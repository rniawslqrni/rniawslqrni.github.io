### Setting Up Google Sheets API
**Add Google Apps Script**:
    - Open the Google Sheets file, go to Extensions > Apps Script, and add the following code:

    ```javascript
    const SHEET_NAME = 'comentar';

    const doGet = () => {
      try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
        const [, ...data] = sheet.getDataRange().getValues();

        const comentar = data.map(([id, name, status, message, date, color]) => ({
          id,
          name,
          status,
          message,
          date,
          color
        }));

        const response = {
          status: 200,
          message: 'Success get services',
          comentar
        };

        return ContentService
          .createTextOutput(JSON.stringify(response))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        const errorMessage = {
          status: 500,
          message: `Error retrieving data: ${error}`
        };

        return ContentService
          .createTextOutput(JSON.stringify(errorMessage))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };

    const doPost = (e) => {
      try {
        const { id, name, status, message, date, color } = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

        if (!sheet) {
          throw new Error(`Sheet "${SHEET_NAME}" not found`);
        }

        sheet.appendRow([id, name, status, message, date, color]);

        const response = {
          status: 200,
          message: 'Success add service'
        };

        return ContentService
          .createTextOutput(JSON.stringify(response))
          .setMimeType(ContentService.MimeType.JSON);
      } catch (error) {
        const errorMessage = {
          status: 500,
          message: `Error adding data: ${error}`
        };

        return ContentService
          .createTextOutput(JSON.stringify(errorMessage))
          .setMimeType(ContentService.MimeType.JSON);
      }
    };
    ```

