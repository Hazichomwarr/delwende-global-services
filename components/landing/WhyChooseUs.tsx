import {
  BadgeCheck,
  Clock3,
  FileCheck2,
  Languages,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    title: "Paperwork handled carefully",
    description:
      "Tax forms, immigration paperwork, insurance details, and business records are reviewed with attention before anything moves forward.",
    icon: FileCheck2,
  },
  {
    title: "Local Newark support",
    description:
      "Work with a nearby team that understands the needs of local families, workers, entrepreneurs, and small businesses.",
    icon: MapPin,
  },
  {
    title: "Multilingual guidance",
    description:
      "Get clear explanations in English, French, and other supported languages so every step is easier to understand.",
    icon: Languages,
  },
];

const proofPoints = [
  {
    value: "1 place",
    label: "for essential services",
  },
  {
    value: "Fast",
    label: "appointment scheduling",
  },
  {
    value: "Clear",
    label: "next steps every time",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-16 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Why Delwende
          </p>

          <h2 className="mt-3 max-w-xl font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Practical help for the paperwork that shapes your life.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
            Delwende Global Services brings tax, insurance, immigration,
            bookkeeping, notary, translation, and financial support into one
            calm, organized experience.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-lg border border-emerald-100 bg-emerald-50/60 p-5"
              >
                <p className="font-serif text-2xl font-black text-emerald-800">
                  {point.value}
                </p>
                <p className="mt-1 text-sm font-medium leading-5 text-slate-700">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-emerald-800 p-6 text-white shadow-sm">
              <ShieldCheck className="h-7 w-7" />
              <h3 className="mt-4 text-lg font-extrabold">
                Confidential by default
              </h3>
              <p className="mt-2 text-sm leading-6 text-emerald-50">
                Personal records, financial details, and sensitive documents are
                treated with care.
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-6 shadow-sm">
              <Clock3 className="h-7 w-7 text-amber-700" />
              <h3 className="mt-4 text-lg font-extrabold text-slate-950">
                Built for busy schedules
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Get guidance, preparation, and follow-up support without running
                between different offices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
            <p className="text-sm leading-6 text-slate-700">
              Every consultation starts with the same goal: understand what you
              need, explain your options clearly, and help you take the next
              right step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
