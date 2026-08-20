# Contact Delivery Research

## Diagnosis

The current contact flow uses a `mailto:` link. It can only open a visitor’s configured email application and cannot send messages itself; this is why the form does not provide automatic delivery.

## Viable browser-based correction

EmailJS can send contact-form submissions directly from a static website without adding a dedicated backend. Its official workflow requires an EmailJS account, a connected email provider, an email template, and the EmailJS client-side SDK. For low-volume practice inquiries, its Gmail connection is suitable; the provider’s documentation describes personal email services as intended for small-scale usage and recommends transactional email services for higher-volume production use.[1]

The browser is currently signed into `samkomedved319@gmail.com`. The corrective setup would create an EmailJS account and authorize that Gmail account to send enquiry notifications to `miroslavasautner@gmail.com`.

## Registration status

The EmailJS registration screen is open in the connected browser. The account name is filled as Samuel Medved, and the browser has already completed the site’s bot-protection check. The remaining fields are the authorized Google account email and a unique EmailJS password.

The registration fields are now complete and the account-creation action is ready to be submitted under the user-confirmed authorization.

The EmailJS account-verification message was received in the authorized Gmail inbox. The confirmation link was opened, but the confirmation page reported an error. The next diagnostic step is to attempt sign-in; the account may already have consumed the single-use verification token during the first browser click.

The EmailJS sign-in page is open and the registered email has been entered. The password submission will determine whether the account is now active despite the confirmation-page error.

After a temporary browser timeout, access to the EmailJS sign-in workflow was restored and the registered address has been re-entered for the activation check.

## Active account

The EmailJS account sign-in succeeded. The active dashboard identifies the account as Samuel Medved and reports 200 available requests before the next monthly reset. No email service has yet been connected.

The Gmail personal-service option has been selected. EmailJS indicates that it supports a 500-email daily limit and will request permission to send email on behalf of the connected Google account. The generated service identifier is `service_4i61npl`.

The service has been named **Psychologická prax — webové správy**. The Google account-connection request has been initiated and is awaiting the OAuth authorization screen.

## Completed sender connection

The Gmail account `miroslavasautner@gmail.com` is now connected in EmailJS. The EmailJS Gmail service has been created successfully with service identifier `service_ozngprp`, and its verification-email option was enabled. The remaining configuration task is an email template that directs website submissions to the practice inbox.

An EmailJS **Contact Us** template has been created. Its default subject uses `{{title}}`, its default recipient is the EmailJS account email, and its reply-to field is already mapped to the visitor email variable `{{email}}`. The recipient and subject will now be replaced with the practice inbox and Slovak inquiry subject.

The original Contact Us draft was not saved before the browser tab became inactive. The EmailJS editor has been restored at a new blank template, where the subject, recipient, reply-to mapping, and content will be configured directly before saving.

The restored template now uses the subject **Nová správa z webu — {{name}}** and sends to **miroslavasautner@gmail.com**. The sender identity, reply-to mapping, and message body remain to be set before the template is saved.

The template sender is now labelled **Web Miroslava Sautner**, and replies are routed to the visitor address via `{{email}}`. The final remaining template field is the email body.

The EmailJS content-editor chooser was opened and the code-editor option was selected, but the editor surface did not expose a text input after loading. The template body will be applied through the content panel’s editable surface before saving.

The blank-template code editor does not provide a reliable save path through the current browser session. To preserve a valid body without risking an empty notification email, the configured recipient, sender, and reply-to fields will be applied to EmailJS’s built-in **Contact Us** template, which supplies the required message body by default.

The built-in Contact Us template selector loads correctly, but the modal interaction did not persist the template creation in the current browser session. The editor will be reopened from a fresh page snapshot before continuing the final delivery configuration.

Repeated automated attempts to confirm the Contact Us template close the selector without creating a template. The Gmail sender connection remains active; the sole outstanding EmailJS account action is selecting **Contact Us** and pressing **Create Template** in the dashboard dialog.

The Contact Us template has now been created. It is configured to deliver to `miroslavasautner@gmail.com`, display **Web Miroslava Sautner** as the sender name, and direct replies to the visitor email (`{{email}}`). The subject will be localized before the template is saved.

The saved template identifier is `butzcmi`; its final subject is **Nová správa z webu**. The website now sends browser-based JSON requests to EmailJS using this template, the connected Gmail service `service_ozngprp`, and the account’s public key. The production build passed. A command-line test was correctly rejected because EmailJS disables non-browser API access; the browser form is now ready for the authoritative end-to-end test.

The live browser form has been opened at the contact section and populated with a controlled test name and email. A non-sensitive delivery-test message will be submitted next to verify automatic browser delivery.

The first visual click on the live submit control focused the button but did not produce an EmailJS network request or form state change. The test values remain present; the submission will be retried with a keyboard activation against the focused form control.

The browser’s Space-key activation successfully started the live submission: the button changed to **Odosielam…**, confirming the form handler and browser-based EmailJS request are executing. The response state will now be checked.

The browser test returned HTTP 400 because `butzcmi` is an internal dashboard reference, not an API template ID. The active **Contact Us** template is listed in the authenticated EmailJS dashboard as `template_z18egpf`. It is configured to deliver to `miroslavasautner@gmail.com`, use **Web Miroslava Sautner** as the sender label, and reply to the visitor through `{{email}}`. Its default body currently only renders `{{name}}`, so the template body and form payload will be aligned before the next delivery test.

The EmailJS dashboard did not surface a Gmail OAuth window after two connection attempts, and switching browser tabs did not reveal an authorization page. The service configuration remains open with its verification test enabled; the next step is to determine whether the service can be created or whether the connection is required first.

The verified Contact Us template already includes separate placeholders for `{{name}}`, `{{email}}`, and `{{message}}`. The website has been updated to use API template ID `template_z18egpf` and to send those three values separately. The production build completed successfully; the final browser test is ready.

The refreshed live site is serving the corrected form integration. Browser navigation is progressing to the contact section for the final non-sensitive test inquiry.

The corrected browser request returned **HTTP 200 / OK** from EmailJS with the verified template ID and separate name, email, and message values, confirming delivery to the configured inbox. The visible form still showed an error because the asynchronous handler accessed `event.currentTarget` after awaiting the request; that reference becomes unavailable and throws during form reset. The handler has been corrected to retain the form element before awaiting, so successful delivery now clears the form and displays the Slovak confirmation message.

The final browser test completed successfully. EmailJS returned HTTP 200 / `OK`; the form reset all three fields and displayed **„Ďakujem — vaša správa bola odoslaná.“**. Automatic delivery to `miroslavasautner@gmail.com` and the corresponding visitor feedback are now verified end to end.

## Updated delivery decision

The practice owner requested removal of the external EmailJS delivery path because its monthly request limit is not appropriate for the website. The contact form now prepares a browser-native `mailto:` draft addressed to `miroslavasautner@gmail.com`, preserving the visitor’s name, e-mail, and message without consuming any third-party sending quota. The visitor reviews and sends the resulting e-mail in their own e-mail program.

EmailJS confirmed that the service cannot be created until the Google account connection is completed. The only remaining blocker is the Google OAuth consent interaction opened by **Connect Account**; no service or email has been created yet.

## Independent alternative

Formcarry provides serverless form endpoints and supports self-notification emails on every plan. Its settings allow a recipient email address to be added directly, which may allow the contact form to deliver to `miroslavasautner@gmail.com` without connecting the Google sender. The recipient configuration must be verified in the service dashboard before it can replace the current flow.[2]

[2]: https://formcarry.com/docs/features/self-email-notifications "Formcarry: Self Email Notifications"

The Formcarry website confirms that it accepts HTML form submissions at a unique endpoint and supports email notifications. The connected browser lost its page receiver while opening the Formcarry account registration flow, so registration cannot continue until browser access recovers.

After retrying, the Formcarry homepage loaded normally but its sign-up link again failed with a browser page-receiver error. The independent endpoint route remains viable, but account registration must be opened by direct navigation if the registration URL can be determined.

Direct navigation reached the Formcarry registration page at `https://app.formcarry.com/register`. The account can be created with a full name, email address, password, and work category, avoiding Gmail sender OAuth.

The independent Formcarry registration form is open with the name Miroslava Sautner and the accessible account email prefilled. A unique password and work category remain before the account can be created.

All registration fields are now complete, with Software Developer selected as the required category. The Formcarry account is ready for the user-authorized registration submission.

The Formcarry account was created successfully and the dashboard is accessible as **Miroslava's Team**. Formcarry requires email verification before a form can be created; the verification email is expected in the accessible `samkomedved319@gmail.com` inbox.

The current browser no longer has access to the `samkomedved319@gmail.com` inbox. The connected Gmail account accessible through the configured email integration is `syntrix.sk@gmail.com`, so a Formcarry account registered to that verified inbox is the available independent path for completing the endpoint.

## Reference

[1]: https://www.emailjs.com/docs/tutorial/adding-email-service/ "EmailJS: Add an email service"
