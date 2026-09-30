"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const expanded = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <article key={faq.question} className="rounded-xl border border-white/10 bg-slate-900/50">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenIndex(expanded ? null : index)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>{faq.question}</span>
                <span aria-hidden="true" className="text-cyan-300">
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </h3>
            {expanded ? (
              <div id={panelId} className="px-5 pb-5 text-sm text-slate-300">
                {faq.answer}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
