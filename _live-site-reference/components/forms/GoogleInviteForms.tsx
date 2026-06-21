"use client";

import { useState } from "react";
import { googleFormUrls } from "@/data/googleFormsConfig";
import { googleInviteContent, type FormMode } from "@/data/inviteContent";

type GoogleFormOption = {
  key: FormMode;
  selectorNumber: string;
  title: string;
  description: string;
  buttonLabel: string;
  responseSpreadsheetLabel: string;
  formUrl: string;
  embedUrl: string;
};

const PLACEHOLDER_PREFIX = "PASTE_";

function isConfiguredUrl(url: string) {
  return url.startsWith("https://") && !url.startsWith(PLACEHOLDER_PREFIX);
}

const googleFormOptions: GoogleFormOption[] = [
  {
    key: "artist",
    ...googleInviteContent.forms.artist,
    ...googleFormUrls.artist,
  },
  {
    key: "campaign",
    ...googleInviteContent.forms.campaign,
    ...googleFormUrls.campaign,
  },
];

export function GoogleInviteForms() {
  const [selectedKey, setSelectedKey] = useState<FormMode | null>(null);
  const selectedForm = googleFormOptions.find((form) => form.key === selectedKey) ?? null;
  const selectedEmbedUrl = selectedForm?.embedUrl ?? "";
  const selectedFormUrl = selectedForm?.formUrl ?? "";
  const hasEmbedUrl = isConfiguredUrl(selectedEmbedUrl);
  const hasFormUrl = isConfiguredUrl(selectedFormUrl);

  return (
    <section className="invite-module reveal" aria-label={googleInviteContent.selectorLabel}>
      <div className="form-selector google-form-selector" role="tablist" aria-label={googleInviteContent.selectorLabel}>
        {googleFormOptions.map((form) => {
          const active = selectedKey === form.key;

          return (
            <button
              type="button"
              className={active ? "selector-card selector-card-active" : "selector-card"}
              onClick={() => setSelectedKey(form.key)}
              aria-pressed={active}
              key={form.key}
            >
              <span>{form.selectorNumber}</span>
              <strong>{form.title}</strong>
              <small>{form.description}</small>
              <small className="google-form-sheet-label">
                Connected response spreadsheet: {form.responseSpreadsheetLabel}
              </small>
              <b>{form.buttonLabel}</b>
            </button>
          );
        })}
      </div>

      {selectedForm ? (
        <div className="google-form-panel reveal">
          <div className="google-form-panel-head">
            <div>
              <p className="eyebrow">START QUESTIONNAIRE</p>
              <h2>{selectedForm.title}</h2>
              <p>{googleInviteContent.panelNote}</p>
            </div>
            {hasFormUrl ? (
              <a className="chrome-button chrome-button-secondary" href={selectedFormUrl} target="_blank" rel="noopener noreferrer">
                <span>{googleInviteContent.fallbackLabel}</span>
              </a>
            ) : (
              <span className="chrome-button chrome-button-secondary chrome-button-disabled">
                <span>{googleInviteContent.fallbackLabel}</span>
              </span>
            )}
          </div>

          <div className="google-form-frame-wrap">
            {hasEmbedUrl ? (
              <iframe
                title={selectedForm.title}
                src={selectedEmbedUrl}
                width="100%"
                height="1400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading...
              </iframe>
            ) : (
              <div className="google-form-placeholder">
                <p>{googleInviteContent.missingEmbedMessage}</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
