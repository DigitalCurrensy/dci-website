// Google Forms workflow:
// 1. Create each questionnaire in Google Forms.
// 2. In Google Forms, go to Responses.
// 3. Link the form to the matching Google Sheets response spreadsheet.
// 4. Paste the public Google Form URL or embed URL above.
// 5. Website visitors complete the embedded form.
// 6. Google Forms automatically saves responses into the linked Google Sheet.

export const ARTIST_INTAKE_FORM_URL = "PASTE_PUBLIC_ARTIST_INTAKE_GOOGLE_FORM_URL_HERE";
export const CAMPAIGN_STRATEGY_FORM_URL =
  "PASTE_PUBLIC_CAMPAIGN_STRATEGY_GOOGLE_FORM_URL_HERE";

export const ARTIST_INTAKE_EMBED_URL = "PASTE_ARTIST_INTAKE_GOOGLE_FORM_EMBED_URL_HERE";
export const CAMPAIGN_STRATEGY_EMBED_URL =
  "PASTE_CAMPAIGN_STRATEGY_GOOGLE_FORM_EMBED_URL_HERE";

export const ARTIST_INTAKE_RESPONSES_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1nB0r2dj2FrQ9NNBDfxNLMAwmwscHfmYXibjn8vcyvfw/edit?usp=sharing";

export const CAMPAIGN_STRATEGY_RESPONSES_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/13hV68jPI3QRvYhAdUEvJlP2lbdR5YTx0G9jhCMtaVmg/edit?usp=sharing";

export const googleFormUrls = {
  artist: {
    formUrl: ARTIST_INTAKE_FORM_URL,
    embedUrl: ARTIST_INTAKE_EMBED_URL,
  },
  campaign: {
    formUrl: CAMPAIGN_STRATEGY_FORM_URL,
    embedUrl: CAMPAIGN_STRATEGY_EMBED_URL,
  },
};

export const googleFormResponseSheetReferences = {
  artist: {
    label: "Artist Intake Questionnaire - Responses",
    sheetUrl: ARTIST_INTAKE_RESPONSES_SHEET_URL,
  },
  campaign: {
    label: "Campaign Strategy & Marketing Questionnaire - Responses",
    sheetUrl: CAMPAIGN_STRATEGY_RESPONSES_SHEET_URL,
  },
};
