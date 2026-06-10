import { BUSINESS } from "@/lib/constants/businessInfos";
import { ChevronDown, Globe2, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-700 bg-white">
            <Globe2 className="h-7 w-7 text-emerald-700" />
          </div>

          <div className="leading-none">
            <p className="font-serif text-2xl font-bold tracking-wide text-emerald-800">
              DELWENDE
            </p>
            <p className="text-sm font-semibold tracking-[0.18em] text-amber-500">
              GLOBAL SERVICES
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-900 md:flex">
          <a href="#" className="hover:text-emerald-700">
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-emerald-700"
          >
            Services <ChevronDown className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-emerald-700">
            About
          </a>
          <a href="#" className="hover:text-emerald-700">
            FAQ
          </a>
          <a href="#" className="hover:text-emerald-700">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={BUSINESS.phone.value}
            className="flex items-center gap-2 text-sm font-bold text-emerald-900"
          >
            <Phone className="h-4 w-4 fill-emerald-800 text-emerald-800" />
            {BUSINESS.phone.label}
          </a>

          <a
            href="#consultation"
            className="rounded-md bg-emerald-800 px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-900"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
