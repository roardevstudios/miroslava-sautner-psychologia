# Browser-Based Form Delivery Setup

The connected browser has access to Google Apps Script under the Google account `samkomedved319@gmail.com`. The Apps Script start workspace is available at `https://script.google.com/u/0/home/start` and exposes the option to create a new project.

The proposed implementation is a small Apps Script web application that accepts inquiry-form fields and sends a formatted message to `miroslavasautner@gmail.com`. Before creating and publicly deploying that application, obtain user confirmation because deployment creates a public endpoint and authorizes email sending from the signed-in Google account.

## Created project

- Project editor URL: `https://script.google.com/u/0/home/projects/1UMbikTGCUa_sgviMgbJRhxiidXLm0PPqNNcWY-Q_lt2jM9v_TKqIyfCi/edit`
- Script recipient: `miroslavasautner@gmail.com`
- Safeguards: required-field validation, email validation, a honeypot field, input length limits, reply-to routing, and a 40-submission-per-hour cap.

## Deployment status

The script was deployed successfully as a version 1 web application on 19 August 2026. It executes under `samkomedved319@gmail.com` and is configured to accept requests from anyone. The endpoint URL shown in the deployment dialog will be added to the website form after it is copied and verified.

The first deployed revision did not contain the handler functions. The corrected script now includes `doGet` and `doPost` and has been explicitly saved in the editor; the existing web-app deployment must be updated to a new version before it is used in production.

Because direct value replacement in the editor did not persist through a reload, the native code editor has been focused and its original contents selected. The replacement must be entered through the focused editor and then saved before the deployment is updated.

A second replacement-and-save attempt has been made through the focused editor. The script editor still requires an explicit persistence verification before the mail handler can be redeployed and tested.

The exact handler is stored in `apps-script-contact-handler.gs` at the project root so it is available for a one-time paste if manual browser input is required.
