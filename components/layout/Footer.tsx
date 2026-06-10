import { Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Delwende", href: "#why-delwende" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Taxes",
  "Insurance",
  "Immigration Services",
  "Bookkeeping",
  "Notary",
  "Translation",
  "Money Transfer",
  "Credit Repair",
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 px-6 pt-14 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10">
                <ShieldCheck className="h-7 w-7 text-emerald-300" />
              </div>

              <div className="leading-none">
                <p className="font-serif text-2xl font-bold tracking-wide text-emerald-300">
                  DELWENDE
                </p>
                <p className="text-sm font-semibold tracking-[0.18em] text-amber-300">
                  GLOBAL SERVICES
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Tax, insurance, immigration, bookkeeping, notary, translation,
              money transfer, and credit repair support for individuals,
              families, and small businesses.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
                <FaLinkedinIn className="h-5 w-5" />
              </button>

              <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
                <FaInstagram className="h-5 w-5" />
              </button>

              <button className="rounded-xl border border-slate-800 p-3 text-slate-400 transition hover:border-slate-600 hover:text-white cursor-pointer">
                <FaFacebook className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h2>

            <nav className="mt-5 grid gap-3 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-slate-300 transition hover:text-amber-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Services
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="w-fit text-slate-300 transition hover:text-amber-300"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white">
              Contact
            </h2>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <a
                href="tel:9734440195"
                className="flex gap-3 transition hover:text-amber-300"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>(973) 444-0195</span>
              </a>

              <a
                href="mailto:info@delwendeglobalservices.com"
                className="flex gap-3 transition hover:text-amber-300"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>info@delwendeglobalservices.com</span>
              </a>

              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>123 Market Street, Newark, NJ 07102</span>
              </div>
            </div>

            <a
              href="#consultation"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
            >
              Request Consultation
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Delwende Global Services. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-amber-300">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-amber-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
