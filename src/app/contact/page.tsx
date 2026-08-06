"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin } from "lucide-react";

const CONTACT_EMAIL = "bridgecarecollectivehq@gmail.com";
const WHATSAPP =
  "https://wa.me/15551234567?text=Hello%20BridgeCare%20Collective%20%E2%80%94%20I%27d%20like%20to%20learn%20more.";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`BridgeCare inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal">
          Get in touch
        </p>
        <h1 className="text-4xl font-extrabold text-charcoal sm:text-5xl">
          Contact BridgeCare
        </h1>
        <p className="mt-4 text-lg text-charcoal/70">
          Reach the team by email or WhatsApp. We welcome patients, partners,
          healthcare workers, NGOs, and curious learners.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-start gap-4 rounded-3xl border border-teal/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal text-white">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-charcoal">Email</p>
              <p className="text-sm text-charcoal/70">{CONTACT_EMAIL}</p>
            </div>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 rounded-3xl border border-teal/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-charcoal">WhatsApp</p>
              <p className="text-sm text-charcoal/70">
                Chat with the BridgeCare team
              </p>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-3xl border border-teal/10 bg-sand p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green/20 text-green">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-charcoal">Serving Ghana & beyond</p>
              <p className="text-sm text-charcoal/70">
                Digital healthcare awareness for communities — online, anytime.
              </p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-teal/10 bg-white p-6 shadow-sm lg:col-span-3 sm:p-8"
        >
          <h2 className="mb-6 text-xl font-bold text-charcoal">
            Send a message
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-charcoal/80">
                Name
              </span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl border border-teal/15 bg-sand px-4 py-3 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-charcoal/80">
                Email
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-teal/15 bg-sand px-4 py-3 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1.5 block font-medium text-charcoal/80">
              Message
            </span>
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-2xl border border-teal/15 bg-sand px-4 py-3 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
              placeholder="How can we help protect lives through better health information?"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal/20 transition hover:brightness-110"
          >
            Open in email <Send className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs text-charcoal/50">
            Submitting opens your mail app with a draft to {CONTACT_EMAIL}.
          </p>
        </motion.form>
      </div>
    </div>
  );
}
