import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle2,
  FileLock2,
  Languages,
  MapPin,
  Quote,
} from "lucide-react";

const trustPoints = [
  {
    label: "Local Support",
    text: "Guidance rooted in Newark and nearby communities.",
    icon: MapPin,
  },
  {
    label: "Multilingual Help",
    text: "Clear explanations in English, French, and supported languages.",
    icon: Languages,
  },
  {
    label: "Private Documents",
    text: "Sensitive personal and financial records are handled with care.",
    icon: FileLock2,
  },
];

const stats = [
  {
    value: "7+",
    label: "service categories",
  },
  {
    value: "1:1",
    label: "personal support",
  },
  {
    value: "Local",
    label: "Newark guidance",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-slate-50 px-6 py-16 text-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Trusted Guidance
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Serious paperwork deserves steady, personal support.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Delwende helps clients understand what needs to be done, organize
            the right documents, and move forward with confidence across tax,
            immigration, insurance, business, and personal services.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-serif text-3xl font-black text-emerald-800">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {trustPoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.label}
                  className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-950">
                      {point.label}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Image
              src="/images/del-hero.png"
              alt="Delwende Global Services consultation"
              width={720}
              height={820}
              className="aspect-4/5 w-full object-cover"
            />

            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-emerald-900 shadow-sm">
              Newark, NJ
            </div>
          </div>

          <div className="relative mx-4 -mt-16 rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
            <Quote className="h-8 w-8 text-amber-400" fill="currentColor" />

            <p className="mt-4 text-base font-semibold leading-7 text-slate-900">
              “They made everything clear, helped me organize my paperwork, and
              gave me the confidence to move forward.”
            </p>

            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <BadgeCheck className="h-5 w-5 text-emerald-700" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-slate-950">
                  Local Client
                </p>
                <p className="text-sm text-slate-600">
                  Tax and document support
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-28 hidden rounded-lg bg-emerald-800 p-5 text-white shadow-lg xl:block">
            <CheckCircle2 className="h-7 w-7 text-amber-300" />
            <p className="mt-3 max-w-40 text-sm font-bold leading-6">
              Clear steps before you leave your consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
