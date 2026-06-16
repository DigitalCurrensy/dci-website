"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  artistSteps,
  campaignSteps,
  inviteFormContent,
  type Field,
  type FormMode,
} from "@/data/inviteContent";

type FormValue = string | string[] | boolean;

// Kept for a later direct-submission flow. This custom questionnaire can be connected
// later to Airtable, Notion, Google Sheets API, or a custom backend.
export function InviteForms() {
  const [mode, setMode] = useState<FormMode>("artist");
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, FormValue>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const steps = mode === "artist" ? artistSteps : campaignSteps;
  const currentStep = steps[step];
  const progress = Math.round(((step + 1) / steps.length) * 100);
  const copy = inviteFormContent.forms[mode];

  const requiredFields = useMemo(
    () => currentStep.fields.filter((field) => field.required),
    [currentStep]
  );

  function switchMode(nextMode: FormMode) {
    setMode(nextMode);
    setStep(0);
    setValues({});
    setErrors({});
    setStatus("idle");
  }

  function updateValue(field: Field, value: FormValue) {
    setValues((current) => ({ ...current, [field.name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field.name];
      return next;
    });
  }

  function toggleCheckbox(field: Field, option?: string) {
    if (option) {
      const existing = Array.isArray(values[field.name]) ? (values[field.name] as string[]) : [];
      const next = existing.includes(option)
        ? existing.filter((item) => item !== option)
        : [...existing, option];
      updateValue(field, next);
      return;
    }

    updateValue(field, !values[field.name]);
  }

  function validateStep() {
    const nextErrors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      const value = values[field.name];
      const emptyArray = Array.isArray(value) && value.length === 0;
      if (!value || emptyArray) {
        nextErrors[field.name] = inviteFormContent.requiredError;
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function nextStep() {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: mode, payload: values }),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success reveal" role="status">
        <p className="eyebrow">{inviteFormContent.successEyebrow}</p>
        <h2>{inviteFormContent.successHeadline}</h2>
        <p>{copy.confirmation}</p>
        <button type="button" className="chrome-button chrome-button-secondary" onClick={() => switchMode(mode)}>
          <span>{inviteFormContent.startAnotherLabel}</span>
        </button>
      </div>
    );
  }

  return (
    <section className="invite-module reveal" aria-labelledby="invite-forms">
      <div className="form-selector" role="tablist" aria-label={inviteFormContent.selectorLabel}>
        <button
          type="button"
          className={mode === "artist" ? "selector-card selector-card-active" : "selector-card"}
          onClick={() => switchMode("artist")}
        >
          <span>{inviteFormContent.forms.artist.selectorNumber}</span>
          <strong>{inviteFormContent.forms.artist.selectorTitle}</strong>
          <small>{inviteFormContent.forms.artist.selectorDescription}</small>
        </button>
        <button
          type="button"
          className={mode === "campaign" ? "selector-card selector-card-active" : "selector-card"}
          onClick={() => switchMode("campaign")}
        >
          <span>{inviteFormContent.forms.campaign.selectorNumber}</span>
          <strong>{inviteFormContent.forms.campaign.selectorTitle}</strong>
          <small>{inviteFormContent.forms.campaign.selectorDescription}</small>
        </button>
      </div>

      <form className="questionnaire" onSubmit={submitForm} noValidate>
        <div className="form-head">
          <div>
            <p className="eyebrow">{inviteFormContent.startEyebrow}</p>
            <h2 id="invite-forms">{copy.title}</h2>
            <p>{copy.intro}</p>
          </div>
          <div className="progress-wrap" aria-label={`${inviteFormContent.stepLabel} ${step + 1} of ${steps.length}`}>
            <span>{progress}%</span>
            <div>
              <i style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="form-step-header">
          <span>
            {inviteFormContent.stepLabel} {step + 1} / {steps.length}
          </span>
          <h3>{currentStep.title}</h3>
          {currentStep.intro ? <p>{currentStep.intro}</p> : null}
        </div>

        <div className="field-grid">
          {currentStep.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={values[field.name]}
              error={errors[field.name]}
              onChange={(value) => updateValue(field, value)}
              onToggle={(option) => toggleCheckbox(field, option)}
            />
          ))}
        </div>

        {status === "error" ? (
          <p className="form-error" role="alert">
            {inviteFormContent.submitError}
          </p>
        ) : null}

        <div className="form-actions">
          <button
            type="button"
            className="chrome-button chrome-button-ghost"
            disabled={step === 0}
            onClick={() => setStep((current) => Math.max(current - 1, 0))}
          >
            <span>{inviteFormContent.backLabel}</span>
          </button>
          <button type="button" className="save-placeholder">
            {inviteFormContent.saveLabel}
          </button>
          {step < steps.length - 1 ? (
            <button type="button" className="chrome-button chrome-button-primary" onClick={nextStep}>
              <span>{inviteFormContent.continueLabel}</span>
            </button>
          ) : (
            <button type="submit" className="chrome-button chrome-button-primary" disabled={status === "submitting"}>
              <span>{status === "submitting" ? inviteFormContent.submittingLabel : copy.submit}</span>
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

function FormField({
  field,
  value,
  error,
  onChange,
  onToggle,
}: {
  field: Field;
  value?: FormValue;
  error?: string;
  onChange: (value: FormValue) => void;
  onToggle: (option?: string) => void;
}) {
  const id = `field-${field.name}`;

  if (field.type === "textarea") {
    return (
      <label className="form-field form-field-wide" htmlFor={id}>
        <span>{field.label}</span>
        <textarea id={id} placeholder={field.placeholder} value={(value as string) ?? ""} onChange={(event) => onChange(event.target.value)} />
        {error ? <small>{error}</small> : null}
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="form-field" htmlFor={id}>
        <span>{field.label}</span>
        <select id={id} value={(value as string) ?? ""} onChange={(event) => onChange(event.target.value)}>
          <option value="">{inviteFormContent.emptySelectLabel}</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error ? <small>{error}</small> : null}
      </label>
    );
  }

  if (field.type === "radio") {
    return (
      <fieldset className="choice-field form-field-wide">
        <legend>{field.label}</legend>
        <div className="choice-grid">
          {field.options?.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name={field.name}
                checked={value === option}
                onChange={() => onChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {error ? <small>{error}</small> : null}
      </fieldset>
    );
  }

  if (field.type === "checkbox" && field.options) {
    const selected = Array.isArray(value) ? value : [];
    return (
      <fieldset className="choice-field form-field-wide">
        <legend>{field.label}</legend>
        <div className="choice-grid">
          {field.options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => onToggle(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {error ? <small>{error}</small> : null}
      </fieldset>
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="agreement-field form-field-wide">
        <input type="checkbox" checked={Boolean(value)} onChange={() => onToggle()} />
        <span>{field.label}</span>
        {error ? <small>{error}</small> : null}
      </label>
    );
  }

  return (
    <label className="form-field" htmlFor={id}>
      <span>{field.label}</span>
      <input
        id={id}
        type={field.type}
        placeholder={field.placeholder}
        value={(value as string) ?? ""}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <small>{error}</small> : null}
    </label>
  );
}
