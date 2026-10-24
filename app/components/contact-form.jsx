"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const whatsappNumber = "919423452658";

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const whatsappMessage = [
      "Hi (This enquiry is from the website)",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;

    setStatus("Opening WhatsApp with your enquiry message.");
    event.currentTarget.reset();
  }

  return <form className="contact-form" onSubmit={handleSubmit}><p className="form-heading">Send us a note<span>We usually respond within one business day.</span></p><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Mobile number" required /></label></div><label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>How can we help?<textarea name="message" placeholder="Tell us about what you need" rows="2" required /></label><button className="button button-primary" type="submit">Send enquiry <span aria-hidden="true">&rarr;</span></button><small className="form-note" aria-live="polite">{status || "By submitting, you agree that our team can contact you about your enquiry."}</small></form>;
}
