"use client";

import { FormEvent, useState } from "react";
import { categories } from "@/lib/products";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          contact: data.get("contact"),
          category: data.get("category"),
          requirement: data.get("requirement"),
          website: data.get("website"),
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
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

      {/* Honeypot: hidden from real visitors, left blank; bots tend to fill every field. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />

      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "sent" && (
        <p className="form-note" role="status">
          Thanks! Your enquiry has been sent. We&rsquo;ll get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="form-note form-note-error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
