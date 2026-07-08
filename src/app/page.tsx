"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquareHeart,
  Stethoscope,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Users,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: BookOpen,
    title: "Public health education",
    body: "Clear, verified awareness content on prevention, wellness, myths, and emergency warning signs — made simple for every community.",
  },
  {
    icon: MessageSquareHeart,
    title: "Ask with confidence",
    body: "Pose real questions and explore curated answers with related media that deepen understanding.",
  },
  {
    icon: Stethoscope,
    title: "Connect with professionals",
    body: "Bridge the gap between the public and healthcare voices — guidance rooted in trust, accuracy, and care.",
  },
];

const pillars = [
  "Health myths exposed",
  "Doctor & nurse explains",
  "Emergency warning signs",
  "Wellness & prevention",
  "Real community stories",
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-green/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> Healthcare awareness for Ghana
              & beyond
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              Bridging health knowledge &{" "}
              <span className="text-teal">community care</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70"
            >
              BridgeCare Collective is a healthcare awareness community that
              educates, empowers, and guides people toward healthier lives —
              through trusted information, preventive education, and responsible
              medical advocacy.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="http://localhost:3001/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition hover:brightness-110"
              >
                Learn with BridgeCare <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/values"
                className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white px-6 py-3.5 text-sm font-semibold text-teal transition hover:bg-teal/5"
              >
                Our mission
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-md rounded-[2rem] bg-gradient-to-br from-teal via-mint to-green p-1 shadow-2xl shadow-teal/20">
              <div className="flex flex-col items-center rounded-[1.85rem] bg-white px-6 py-10 sm:px-10">
                <Image
                  src="/brand/logo-full-trim.png"
                  alt="BridgeCare Collective logo"
                  width={297}
                  height={236}
                  className="h-auto w-56 object-contain sm:w-64"
                  priority
                />
                <p className="mt-6 text-center text-sm font-medium text-charcoal/70">
                  Know better. Live better.
                </p>
                <div className="mt-6 grid w-full gap-3">
                  {[
                    { icon: ShieldCheck, t: "Trust & accuracy first" },
                    { icon: HeartPulse, t: "Prevention before crisis" },
                    { icon: Users, t: "Community-focused care" },
                  ].map((row) => (
                    <div
                      key={row.t}
                      className="flex items-center gap-3 rounded-2xl bg-sand px-4 py-3"
                    >
                      <row.icon className="h-5 w-5 text-teal" />
                      <span className="text-sm font-medium">{row.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              Built for real community health
            </h2>
            <p className="mt-3 text-charcoal/70">
              From young adults and parents to caregivers and healthcare workers
              — we make health information accessible, caring, and actionable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-teal/10 bg-sand p-6 shadow-sm"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-bold text-charcoal">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/offer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline"
            >
              See everything we offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-charcoal sm:text-4xl">
              Content that protects lives
            </h2>
            <p className="mt-3 text-charcoal/70">
              Our pillars keep information simple, trustworthy, and shareable —
              the kind of health education communities naturally pass on.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {pillars.map((p) => (
              <span
                key={p}
                className="rounded-full border border-teal/15 bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal to-mint px-8 py-12 text-white shadow-xl sm:px-12">
            <h2 className="max-w-xl text-3xl font-bold">
              Educating communities. Protecting lives.
            </h2>
            <p className="mt-3 max-w-lg text-white/85">
              Open the BridgeCare app to learn and ask questions — or reach the
              team directly. Together, let&apos;s protect lives through better
              health information.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="http://localhost:3001/login"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal"
              >
                Launch the app
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
