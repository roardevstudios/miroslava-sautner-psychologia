const RECIPIENT = 'miroslavasautner@gmail.com';

function doGet() {
  return output({ ok: true, status: 'active' });
}

function doPost(e) {
  const data = (e && e.parameter) || {};
  const name = clean(data.name, 120);
  const email = clean(data.email, 160);
  const message = clean(data.message, 4000);
  const honeypot = clean(data.website, 200);

  if (honeypot || !name || !validEmail(email) || !message) {
    return output({ ok: false, error: 'invalid_request' });
  }

  MailApp.sendEmail({
    to: RECIPIENT,
    subject: 'Nová správa z webu — ' + name.replace(/[\r\n]+/g, ' '),
    body: 'Nová správa z webovej stránky Miroslavy Sautner.\n\nMeno: ' + name + '\nE-mail: ' + email + '\n\nSpráva:\n' + message + '\n\n---\nOdoslané cez kontaktný formulár.',
    replyTo: email,
    name: 'Web Miroslava Sautner'
  });

  return output({ ok: true });
}

function output(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function clean(value, max) {
  return String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, max);
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
