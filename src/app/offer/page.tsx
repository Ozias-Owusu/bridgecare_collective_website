"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpenCheck,
  MessagesSquare,
  ShieldAlert,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    icon: BookOpenCheck,
    title: "Health education hub",
    points: [
      "Trusted awareness content on wellness, prevention, and everyday care",
      "Simple explanations that avoid overcrowded medical jargon",
      "Shareable lessons designed for communities across Ghana",
    ],
  },
  {
    icon: MessagesSquare,
    title: "Ask & explore",
    points: [
      "Community questions with clarity-first answers",
      "Myths exposed with evidence-informed guidance",
      "Related reading and media that deepen understanding",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Emergency warning signs",
    points: [
      "Know the signs that mean someone needs urgent help",
      "Practical advice people can remember and share",
      "Clear reminders to seek professional care — never replace it",
    ],
  },
  {
    icon: HeartPulse,
    title: "Wellness & prevention",
    points: [
      "Habits and tips that support healthier daily living",
      "Doctor and nurse explain-style content for trust",
      "Real stories that show why informed decisions matter",
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
          Health awareness that saves lives — education, prevention, and
          community engagement built for young adults, parents, students,
          workers, caregivers, and healthcare professionals.
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
          We verify information before posting, encourage professional medical
          consultation, and stay consistent, trustworthy, and community-focused.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="http://localhost:3001/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20"
        >
          Open the learning app <ArrowRight className="h-4 w-4" />
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
