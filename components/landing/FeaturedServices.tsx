import {
  ArrowUpRight,
  BriefcaseBusiness,
  ClipboardCheck,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const featuredServices = [
  {
    label: "Tax Preparation",
    title: "File with confidence, whether personal or business.",
    description:
      "Organized tax preparation, planning support, and IRS assistance for individuals, families, and small businesses.",
    icon: FileText,
    href: "#contact",
  },
  {
    label: "Immigration Forms",
    title: "Clear support for important immigration paperwork.",
    description:
      "Document preparation and form assistance with careful review, translation support, and step-by-step guidance.",
    icon: ClipboardCheck,
    href: "#contact",
  },
  {
    label: "Insurance Guidance",
    title: "Find coverage that protects what matters.",
    description:
      "Support for auto, home, life, and business insurance with explanations that are easy to understand.",
    icon: ShieldCheck,
    href: "#contact",
  },
  {
    label: "Business Support",
    title: "Keep your business records clean and organized.",
    description:
      "Bookkeeping, business tax help, document support, and admin guidance for local entrepreneurs.",
    icon: BriefcaseBusiness,
    href: "#contact",
  },
];

export default function FeaturedServices() {
  const primary = featuredServices[0];
  const PrimaryIcon = primary.icon;

  return (
    <section className="bg-white px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="rounded-lg bg-emerald-900 p-8 text-white shadow-sm lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <PrimaryIcon
                className="h-7 w-7 text-amber-300"
                strokeWidth={2.1}
              />
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
              Featured Service
            </p>

            <h2 className="mt-3 font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
              {primary.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-emerald-50">
              {primary.description}
            </p>

            <a
              href={primary.href}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-extrabold text-emerald-950 transition hover:bg-amber-300"
            >
              Ask about taxes
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredServices.slice(1).map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.label}
                  className="group rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-emerald-700" />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                    {service.label}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl font-black leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="mt-6 inline-flex text-sm font-extrabold text-emerald-800 transition hover:text-emerald-950"
                  >
                    Learn more
                  </a>
                </article>
              );
            })}

            <article className="rounded-lg border border-amber-200 bg-amber-50 p-7 shadow-sm">
              <Landmark className="h-8 w-8 text-amber-700" strokeWidth={2.1} />

              <h3 className="mt-5 font-serif text-2xl font-black leading-tight tracking-tight">
                Need more than one service?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                Many clients come in for one form and leave with a clearer plan
                across taxes, documents, insurance, and business needs.
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-emerald-800 transition hover:text-emerald-950"
              >
                Request guidance
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
