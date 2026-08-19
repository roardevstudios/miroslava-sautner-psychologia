# One Small Step: Paste the Email Handler

The Google Apps Script editor should already be open in your browser. You only need to replace the text inside the `Code.gs` file. I will deploy it, verify it, and finish the website afterwards.

| Step | What to do |
| --- | --- |
| 1 | Open the attached file **`apps-script-contact-handler.gs`** and copy all of its contents. Use **Ctrl+A**, then **Ctrl+C**. |
| 2 | Return to the open Google Apps Script browser tab. Click once anywhere inside the code area that currently shows `function myFunction()`. |
| 3 | Press **Ctrl+A** to select the existing code, then press **Ctrl+V** to paste the copied handler. |
| 4 | Press **Ctrl+S**. Wait until the top of the page says **“Saved to Drive”**. |
| 5 | Return here and reply only: **saved**. |

> Do **not** change the project name, deployment settings, or sharing permissions. Those are already configured and I will complete the remaining deployment and website work after you save the code.

If the old code does not highlight at step 3, click inside the code area again and repeat **Ctrl+A** before pasting.

The handler uses `doPost(e)` to receive form fields and `ContentService` to return a text response; this is the supported Apps Script web-app pattern for POST request parameters. [1]

## References

[1]: https://developers.google.com/apps-script/guides/web "Google Apps Script: Web Apps"
