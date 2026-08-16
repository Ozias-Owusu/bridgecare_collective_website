"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  MessagesSquare,
  Stethoscope,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    icon: HeartHandshake,
    title: "Patient ↔ healthcare worker connection",
    points: [
      "A clear bridge between people seeking care and trusted professionals",
      "Space for guidance that respects both the patient’s voice and clinical expertise",
      "Educational support — never a substitute for emergency or in-person care",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Better care conversations",
    points: [
      "Help patients prepare questions before appointments or chats",
      "Help professionals explain conditions and next steps in plain language",
      "Reduce fear and confusion that weaken trust in care relationships",
    ],
  },
  {
    icon: Stethoscope,
    title: "Support for healthcare workers",
    points: [
      "Share accurate, community-friendly explanations patients can understand",
      "Strengthen follow-through by making advice clearer and more human",
      "Keep the professional as the trusted guide — BridgeCare amplifies, not replaces",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Supporting education & awareness",
    points: [
      "Myths, wellness tips, and warning signs that improve care conversations",
      "Prevention content that helps people seek help earlier and ask better questions",
      "Community stories that show why trust between patient and provider matters",
    ],
  },
];

export default function OfferPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal">
          Platform
        </p>
        <h1 className="text-4xl font-extrabold text-charcoal sm:text-5xl">
          What we offer
        </h1>
        <p className="mt-4 text-lg text-charcoal/70">
          Tools and content centered on the healthcare worker–patient
          relationship — with education and prevention as supporting pillars.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {offers.map((o, i) => (
          <motion.article
            key={o.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl border border-teal/10 bg-white p-8 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-mint text-white">
                <o.icon className="h-6 w-6" />
              </span>
              <h2 className="text-xl font-bold text-charcoal">{o.title}</h2>
            </div>
            <ul className="space-y-3">
              {o.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-2 text-sm leading-relaxed text-charcoal/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-teal/10 bg-sand p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-green">
          Our promise
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-charcoal">
          We protect trust on both sides of care: verify information, encourage
          professional consultation, and keep the patient–provider relationship
          at the center.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="http://localhost:3001/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20"
        >
          Open the app <ArrowRight className="h-4 w-4" />
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-teal/20 bg-white px-6 py-3.5 text-sm font-semibold text-teal"
        >
          Talk to the team
        </Link>
      </div>
    </div>
  );
}
