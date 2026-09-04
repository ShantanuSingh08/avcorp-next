"use client";

import { FormEvent, useState } from "react";
import { categories } from "@/lib/products";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 style={{ marginTop: 0, color: "var(--navy)" }}>Enquiry Form</h2>

      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input id="cf-name" name="name" required placeholder="Your name" />
      </div>

      <div className="field">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" placeholder="Company name" />
      </div>

      <div className="field">
        <label htmlFor="cf-contact">Email / Phone</label>
        <input
          id="cf-contact"
          name="contact"
          required
          placeholder="How should we contact you?"
        />
      </div>

      <div className="field">
        <label htmlFor="cf-category">Product Category</label>
        <select id="cf-category" name="category" defaultValue={categories[0].name}>
          {categories.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="cf-requirement">Requirement</label>
        <textarea
          id="cf-requirement"
          name="requirement"
          placeholder="Product, quantity, fabric specification, application, timeline, etc."
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Send Enquiry
      </button>

      {sent && (
        <p className="form-note" role="status">
          Preview form only. Connect this to email, CRM or WhatsApp when the site
          goes live.
        </p>
      )}
    </form>
  );
}
