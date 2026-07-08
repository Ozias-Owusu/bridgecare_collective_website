"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  BookOpenCheck,
  ShieldCheck,
  HeartPulse,
  UsersRound,
  Accessibility,
} from "lucide-react";

const values = [
  {
    icon: BookOpenCheck,
    title: "Public health education",
    body: "We turn complex medical topics into clear, shareable awareness so communities can know better and live better.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    body: "Every person deserves patient, judgment-free guidance — whether they are new to health topics or supporting a loved one.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & accuracy",
    body: "Information is verified before it is shared. We avoid fear-based messaging and encourage professional medical consultation.",
  },
  {
    icon: HeartPulse,
    title: "Prevention first",
    body: "We focus on wellness, early warning signs, and preventive habits that help people act before a crisis.",
  },
  {
    icon: UsersRound,
    title: "Community impact",
    body: "BridgeCare exists to bridge medical professionals and the public — building safer, healthier lifestyles together.",
  },
  {
    icon: Accessibility,
    title: "Accessibility of information",
    body: "Clean language, visual clarity, and formats that work for students, parents, workers, caregivers, and health workers alike.",
  },
];

export default function ValuesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-teal">
          About BridgeCare
        </p>
        <h1 className="text-4xl font-extrabold text-charcoal sm:text-5xl">
          Who we are
        </h1>
        <p className="mt-4 text-lg text-charcoal/70">
          BridgeCare Collective is a healthcare awareness community that bridges
          the gap between medical professionals and the public through education,
          prevention, wellness, and responsible healthcare advocacy.
        </p>
      </motion.div>

      <div className="mb-16 grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-teal/10 bg-white p-8 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            Mission
          </p>
          <p className="mt-3 text-lg leading-relaxed text-charcoal">
            To educate, empower, and guide communities toward healthier lives
            through trusted healthcare awareness, preventive education, and
            responsible medical advocacy.
          </p>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-3xl border border-teal/10 bg-white p-8 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            Vision
          </p>
          <p className="mt-3 text-lg leading-relaxed text-charcoal">
            To become one of Ghana&apos;s most trusted digital healthcare
            awareness communities — helping people make informed health decisions
            and encouraging safer, healthier lifestyles.
          </p>
        </motion.article>
      </div>

      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-charcoal">Our core values</h2>
        <p className="mt-3 text-charcoal/70">
          Caring, professional, educational, trustworthy, modern, and
          community-focused — that is the BridgeCare personality.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v, i) => (
          <motion.article
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-teal/10 bg-white p-6 shadow-sm"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
              <v.icon className="h-6 w-6" />
            </span>
            <h2 className="text-lg font-bold text-charcoal">{v.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
              {v.body}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
