"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  website: string;
  businessType: string;
  service: string;
  budgetTimeline: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  whatsapp: "",
  website: "",
  businessType: "",
  service: "",
  budgetTimeline: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  const canSubmit = useMemo(() => {
    return (
      formState.name.trim().length > 1 &&
      /.+@.+\..+/.test(formState.email) &&
      formState.businessType.trim().length > 1 &&
      formState.service.trim().length > 1 &&
      formState.message.trim().length > 9
    );
  }, [formState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus("error");
      setError("Please complete all required fields before submitting.");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setError("Form endpoint is not configured yet. Please set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT.");
      return;
    }

    try {
      setStatus("loading");
      setError("");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setFormState(initialState);
    } catch {
      setStatus("error");
      setError("We could not submit your request. Please try again or contact us on WhatsApp.");
    }
  }

  return (
    <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" required>
          <input
            value={formState.name}
            onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
            className="field"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            value={formState.email}
            onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
            className="field"
            autoComplete="email"
          />
        </Field>
        <Field label="Company">
          <input
            value={formState.company}
            onChange={(event) => setFormState((prev) => ({ ...prev, company: event.target.value }))}
            className="field"
          />
        </Field>
        <Field label="WhatsApp">
          <input
            value={formState.whatsapp}
            onChange={(event) => setFormState((prev) => ({ ...prev, whatsapp: event.target.value }))}
            className="field"
          />
        </Field>
        <Field label="Current Website">
          <input
            type="url"
            value={formState.website}
            onChange={(event) => setFormState((prev) => ({ ...prev, website: event.target.value }))}
            className="field"
            placeholder="https://"
          />
        </Field>
        <Field label="Business Type" required>
          <input
            value={formState.businessType}
            onChange={(event) => setFormState((prev) => ({ ...prev, businessType: event.target.value }))}
            className="field"
          />
        </Field>
        <Field label="Service Needed" required>
          <select
            value={formState.service}
            onChange={(event) => setFormState((prev) => ({ ...prev, service: event.target.value }))}
            className="field"
          >
            <option value="">Select a service</option>
            <option value="Website Development">Website Development</option>
            <option value="SEO Growth">SEO Growth</option>
            <option value="Both Services">Both Services</option>
          </select>
        </Field>
        <Field label="Budget / Timeline (Optional)">
          <input
            value={formState.budgetTimeline}
            onChange={(event) => setFormState((prev) => ({ ...prev, budgetTimeline: event.target.value }))}
            className="field"
          />
        </Field>
      </div>

      <Field label="Message" required>
        <textarea
          rows={5}
          value={formState.message}
          onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
          className="field"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition enabled:hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {status === "loading" ? "Submitting..." : "Submit Consultation Request"}
      </button>

      {status === "success" ? (
        <p className="rounded-lg border border-emerald-400/40 bg-emerald-900/20 p-3 text-sm text-emerald-200">
          Thanks for reaching out. Your request was submitted successfully.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-lg border border-rose-400/40 bg-rose-900/20 p-3 text-sm text-rose-200">{error}</p>
      ) : null}
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm text-slate-200">
      <span>
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
