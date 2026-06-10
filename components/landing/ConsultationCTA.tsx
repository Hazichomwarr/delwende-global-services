import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Phone,
} from "lucide-react";

const nextSteps = [
  "Tell us what you need help with",
  "Bring or send the right documents",
  "Leave with clear next steps",
];

export default function ConsultationCTA() {
  return (
    <section id="consultation" className="bg-white px-6 py-16 text-slate-950">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-emerald-900 shadow-xl">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 text-white md:p-12 lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
              Free Consultation
            </p>

            <h2 className="mt-3 max-w-3xl font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Not sure which service you need? Start with a simple conversation.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50">
              We will listen, review your situation, and help you understand the
              right next step for taxes, immigration paperwork, insurance,
              business support, notary services, translation, or money transfer.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:9734440195"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-4 text-sm font-extrabold text-emerald-950 transition hover:bg-amber-300"
              >
                <Phone className="h-4 w-4" />
                Call (973) 444-0195
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-white/15"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 bg-emerald-950/35 p-8 text-white md:p-12 lg:border-l lg:border-t-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <CalendarCheck className="h-7 w-7 text-amber-300" />
            </div>

            <h3 className="mt-7 font-serif text-3xl font-black leading-tight">
              What happens next
            </h3>

            <div className="mt-6 space-y-4">
              {nextSteps.map((step) => (
                <div key={step} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <p className="text-sm font-semibold leading-6 text-emerald-50">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-white/10 p-5">
              <FileText className="h-6 w-6 text-amber-300" />
              <p className="mt-3 text-sm leading-6 text-emerald-50">
                Bring any forms, notices, IDs, letters, tax documents, or
                business records related to your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
