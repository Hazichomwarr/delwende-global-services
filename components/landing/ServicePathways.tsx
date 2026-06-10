import {
  ArrowRight,
  BriefcaseBusiness,
  FileHeart,
  UserRound,
} from "lucide-react";

const pathways = [
  {
    audience: "Individuals",
    title: "Handle personal paperwork with less stress.",
    description:
      "Get help with taxes, notary services, translation, money transfer, credit repair, and important forms.",
    services: ["Taxes", "Notary", "Translation", "Credit Repair"],
    icon: UserRound,
    href: "#contact",
  },
  {
    audience: "Families",
    title: "Support for major life steps and family needs.",
    description:
      "Navigate immigration forms, insurance options, document preparation, and multilingual support in one place.",
    services: ["Immigration", "Insurance", "Document Prep", "Languages"],
    icon: FileHeart,
    href: "#contact",
  },
  {
    audience: "Small Businesses",
    title: "Keep your business organized and moving.",
    description:
      "Stay on top of bookkeeping, taxes, insurance, registrations, and essential admin support.",
    services: ["Bookkeeping", "Business Taxes", "Insurance", "Planning"],
    icon: BriefcaseBusiness,
    href: "#contact",
  },
];

export default function ServicePathways() {
  return (
    <section className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Service Pathways
          </p>

          <h2 className="mt-3 font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Choose the support that fits where you are right now.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-700">
            Whether you are filing, applying, translating, organizing, or
            planning ahead, Delwende helps you start with the right next step.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;

            return (
              <article
                key={pathway.audience}
                className="group flex min-h-105 flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={2.1} />
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-800">
                    {pathway.audience}
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-3xl font-black leading-tight tracking-tight">
                  {pathway.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {pathway.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pathway.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href={pathway.href}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-extrabold text-emerald-800 transition hover:text-emerald-950"
                >
                  Start here
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
