import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  Languages,
  MapPin,
} from "lucide-react";

const founderHighlights = [
  {
    label: "Community-first service",
    icon: Handshake,
  },
  {
    label: "Business and family support",
    icon: BriefcaseBusiness,
  },
  {
    label: "Multilingual guidance",
    icon: Languages,
  },
];

export default function MeetTheFounder() {
  return (
    <section id="about" className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/founder.jpg"
              alt="Founder of Delwende Global Services"
              width={720}
              height={860}
              className="aspect-4/5 w-full object-cover object-top"
            />
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/30 bg-white/95 p-5 shadow-lg backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <BadgeCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-950">
                  Delwende Global Services
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  Local support for taxes, immigration paperwork, insurance,
                  bookkeeping, and essential documents.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Meet the Founder
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Built to help people feel less alone with important paperwork.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Delwende Global Services was created to give individuals, families,
            and small businesses a dependable place to turn when forms,
            deadlines, documents, and financial decisions start to feel
            overwhelming.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
            From tax preparation and immigration document support to insurance,
            bookkeeping, notary services, translation, money transfer, and
            credit repair, the mission is simple: provide clear guidance,
            respectful service, and practical next steps.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {founderHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <Icon
                    className="h-6 w-6 text-emerald-700"
                    strokeWidth={2.1}
                  />
                  <p className="mt-4 text-sm font-extrabold leading-6 text-slate-900">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="font-extrabold text-slate-950">
                    Based in Newark
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Serving local families, workers, entrepreneurs, and small
                    businesses.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Globe2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                <div>
                  <p className="font-extrabold text-slate-950">
                    Global perspective
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Support designed for people navigating systems, languages,
                    and life transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#consultation"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-emerald-800 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-emerald-900"
          >
            Request a consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
