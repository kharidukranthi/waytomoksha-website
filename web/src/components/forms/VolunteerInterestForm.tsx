"use client";

import { useState } from "react";
import { volunteerInterestAreas } from "@/data/volunteer";

const fieldClass =
  "mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-navy outline-none focus:border-teal";

export function VolunteerInterestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="space-y-3 rounded-2xl border border-border bg-surface p-6">
        <h3 className="font-serif text-2xl text-navy">Thank you</h3>
        <p className="leading-relaxed text-navy">
          Your interest was recorded on this page only. A current volunteer will
          follow up. This form does not send a message or create an account yet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="volunteer-name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input id="volunteer-name" name="name" type="text" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="volunteer-email" className="text-sm font-medium text-navy">
          Email
        </label>
        <input id="volunteer-email" name="email" type="email" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="volunteer-phone" className="text-sm font-medium text-navy">
          Phone
        </label>
        <input id="volunteer-phone" name="phone" type="tel" className={fieldClass} />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="volunteer-country" className="text-sm font-medium text-navy">
            Country
          </label>
          <input id="volunteer-country" name="country" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="volunteer-state" className="text-sm font-medium text-navy">
            State / region
          </label>
          <input id="volunteer-state" name="state" type="text" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="volunteer-language" className="text-sm font-medium text-navy">
          Preferred language
        </label>
        <input id="volunteer-language" name="preferredLanguage" type="text" className={fieldClass} />
      </div>
      <fieldset>
        <legend className="text-sm font-medium text-navy">Areas of interest</legend>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {volunteerInterestAreas.map((area) => (
            <li key={area.id}>
              <label className="flex items-start gap-2 text-sm text-navy">
                <input
                  type="checkbox"
                  name="interests"
                  value={area.id}
                  className="mt-1"
                />
                <span>{area.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <div>
        <label htmlFor="volunteer-availability" className="text-sm font-medium text-navy">
          Availability
        </label>
        <input
          id="volunteer-availability"
          name="availability"
          type="text"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="volunteer-notes" className="text-sm font-medium text-navy">
          Notes or motivation
        </label>
        <textarea
          id="volunteer-notes"
          name="notes"
          rows={4}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-dark sm:w-auto"
      >
        Share volunteer interest
      </button>
    </form>
  );
}
