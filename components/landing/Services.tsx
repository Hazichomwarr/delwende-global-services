import {
  BadgeDollarSign,
  BookOpenCheck,
  FileText,
  Gauge,
  Languages,
  Landmark,
  ShieldCheck,
  Stamp,
} from "lucide-react";
import Container from "../ui/Container";

const services = [
  {
    title: "Taxes",
    description:
      "Individual & business tax preparation, tax planning and IRS assistance.",
    icon: FileText,
  },
  {
    title: "Insurance",
    description: "Auto, home, life, and business insurance solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Immigration Services",
    description:
      "Document preparation, forms assistance and immigration support.",
    icon: BookOpenCheck,
  },
  {
    title: "Bookkeeping",
    description:
      "Accurate bookkeeping and financial organization for businesses.",
    icon: Landmark,
  },
  {
    title: "Notary",
    description: "Certified notary public services for important documents.",
    icon: Stamp,
  },
  {
    title: "Translation",
    description:
      "Professional translation services, including French and English.",
    icon: Languages,
  },
  {
    title: "Money Transfer",
    description: "Secure and reliable international money transfer services.",
    icon: BadgeDollarSign,
  },
  {
    title: "Credit Repair",
    description: "Improve your credit score and rebuild your financial future.",
    icon: Gauge,
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-12 text-slate-950">
      <Container>
        <div className="text-center">
          <h2 className="font-serif text-4xl font-black tracking-tight">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-10 bg-amber-400" />
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-lg border border-slate-200 bg-white px-8 py-7 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <Icon className="h-8 w-8 text-emerald-700" strokeWidth={2} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-black">
                  {service.title}
                </h3>

                <p className="mx-auto mt-3 max-w-48 text-sm leading-6 text-slate-700">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
