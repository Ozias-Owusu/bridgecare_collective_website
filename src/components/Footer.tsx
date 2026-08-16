import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-teal/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Image
              src="/brand/logo-mark.png"
              alt="BridgeCare Collective"
              width={288}
              height={139}
              className="h-9 w-auto object-contain"
            />
            <span className="font-bold text-charcoal">BridgeCare Collective</span>
          </div>
          <p className="text-sm leading-relaxed text-charcoal/70">
            Bridging healthcare workers and the patients or clients they serve —
            so care is clearer, kinder, and built on trust.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-charcoal">Explore</p>
          <ul className="space-y-2 text-sm text-charcoal/70">
            <li>
              <Link href="/values" className="hover:text-teal">
                About & values
              </Link>
            </li>
            <li>
              <Link href="/offer" className="hover:text-teal">
                What we offer
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-charcoal">Reach us</p>
          <ul className="space-y-2 text-sm text-charcoal/70">
            <li>
              <a
                href="mailto:bridgecarecollectivehq@gmail.com"
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <Mail className="h-4 w-4" /> bridgecarecollectivehq@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/15551234567?text=Hello%20BridgeCare%20Collective"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-charcoal/50">
            #BridgeCareCollective · #HealthAwareness · #PreventiveCare
          </p>
        </div>
      </div>
      <div className="border-t border-teal/10 py-4 text-center text-xs text-charcoal/50">
        © {new Date().getFullYear()} BridgeCare Collective. Educational guidance
        only — always consult a qualified professional for medical care.
      </div>
    </footer>
  );
}
