"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  BookOpenCheck,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Relationship-centered care",
    body: "We put the bond between healthcare workers and patients or clients first — dignity, listening, and mutual understanding.",
  },
  {
    icon: MessageCircleHeart,
    title: "Clear communication",
    body: "Care fails when people talk past each other. We help both sides ask better questions and explain with compassion.",
  },
  {
    icon: Stethoscope,
    title: "Respect for professionals",
    body: "Doctors, nurses, pharmacists, and caregivers deserve tools that help the public understand their guidance — not replace them.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & accuracy",
    body: "Information that shapes care conversations must be verified. We avoid fear-based messaging and encourage professional consultation.",
  },
  {
    icon: UsersRound,
    title: "Compassion for patients & clients",
    body: "Every person seeking care deserves judgment-free support — whether they are new to a condition or navigating complex decisions.",
  },
  {
    icon: BookOpenCheck,
    title: "Education that serves the relationship",
    body: "Myths, prevention, and wellness content still matter — as support for stronger patient–provider conversations, not as the only focus.",
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
          BridgeCare Collective bridges the gap between healthcare workers and
          the patients or clients they serve — so care is rooted in trust, clear
          communication, and mutual respect.
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
            To strengthen the relationship between healthcare professionals and
            patients or clients through trusted guidance, clearer conversations,
            and responsible healthcare advocacy — supported by education and
            prevention.
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
            To become one of Ghana&apos;s most trusted bridges between care
            providers and the public — where people feel understood, and
            healthcare workers feel supported in guiding healthier lives.
          </p>
        </motion.article>
      </div>

      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-charcoal">Our core values</h2>
        <p className="mt-3 text-charcoal/70">
          Caring, professional, and relationship-first — with education and
          community awareness as supporting pillars.
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
