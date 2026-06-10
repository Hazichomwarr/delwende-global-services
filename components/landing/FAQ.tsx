import { BUSINESS } from "@/lib/constants/businessInfos";
import { HelpCircle, Mail, MapPin, Phone } from "lucide-react";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended so we can give your situation the right attention, but you can call first to ask about availability.",
  },
  {
    question: "What should I bring to a consultation?",
    answer:
      "Bring any IDs, forms, notices, letters, tax documents, insurance papers, business records, or other paperwork related to the service you need.",
  },
  {
    question: "Do you help with immigration paperwork?",
    answer:
      "Yes. We provide document preparation and form assistance for immigration-related paperwork, including help organizing supporting documents.",
  },
  {
    question: "Can you help small businesses?",
    answer:
      "Yes. We support small businesses with bookkeeping, tax preparation, business insurance guidance, document support, and administrative organization.",
  },
  {
    question: "What languages do you support?",
    answer:
      "We offer support in English, French, and other supported languages depending on availability. Call ahead if you need help in a specific language.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <aside className="lg:sticky lg:top-28">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
            <HelpCircle className="h-7 w-7" strokeWidth={2.1} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Questions
          </p>

          <h2 className="mt-3 max-w-xl font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Clear answers before you come in.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-700">
            A quick call is often the easiest way to confirm what service you
            need and which documents to bring.
          </p>

          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold text-slate-950">
              Contact Delwende Global Services
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <a
                href={BUSINESS.phone.value}
                className="flex items-center gap-3 transition hover:text-emerald-800 hover:underline cursor-pointer"
              >
                <Phone className="h-4 w-4 text-emerald-700" />
                {BUSINESS.phone.label}
              </a>

              <a
                href={BUSINESS.email.value}
                className="flex items-center gap-3 transition hover:text-emerald-800 hover:underline cursor-pointer"
              >
                <Mail className="h-4 w-4 text-emerald-700" />
                {BUSINESS.email.label}
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 hover:underline cursor-pointer" />
                <a
                  href={BUSINESS.location.value}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  <span>{BUSINESS.location.label}</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm open:border-emerald-200 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-base font-extrabold text-slate-950">
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-700 transition group-open:bg-emerald-700 group-open:text-white">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:block">−</span>
                </span>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
