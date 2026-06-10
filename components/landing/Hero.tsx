import Image from "next/image";
import {
  Phone,
  CalendarCheck,
  Users,
  ShieldCheck,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants/businessInfos";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-slate-950">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/del-hero.png"
            alt="Desk with passport, documents, and calculator"
            fill
            priority
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-12 lg:pb-36 lg:pt-16">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-6xl">
              Taxes, Insurance,
              <br />
              Immigration &
              <br />
              Business Services
              <br />
              <span className="text-emerald-900">Under One Roof</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-800">
              Helping individuals, families, and small businesses navigate
              paperwork, finances, and important life services with confidence.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href={BUSINESS.phone.value}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-700 px-6 py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-800"
              >
                <Phone className="h-4 w-4 fill-white" />
                Call Now: {BUSINESS.phone.label}
              </a>

              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:border-emerald-200 hover:text-emerald-800"
              >
                <CalendarCheck className="h-4 w-4" />
                Request Consultation
              </a>
            </div>

            <div className="mt-7 flex items-center gap-4">
              {/* <div className="flex -space-x-3">
                {[
                  "/images/client-1.jpg",
                  "/images/client-2.jpg",
                  "/images/client-3.jpg",
                ].map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={42}
                    height={42}
                    className="rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div> */}

              <div>
                <div className="text-lg leading-none text-amber-400">★★★★★</div>
                <p className="mt-1 text-sm text-slate-800">
                  Trusted by local families and small businesses in Newark.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto -mt-16 max-w-7xl px-6 pb-10">
          <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-lg backdrop-blur md:grid-cols-4">
            <Feature
              icon={<Users />}
              title="Local Community Support"
              text="Proudly serving Newark and surrounding areas."
            />
            <Feature
              icon={<Globe2 />}
              title="Multilingual Assistance"
              text="We speak French, English, and other local languages."
            />
            <Feature
              icon={<ShieldCheck />}
              title="Personal Service"
              text="One-on-one support tailored to your needs."
            />
            <Feature
              icon={<CheckCircle2 />}
              title="One-Stop Solution"
              text="Multiple essential services in one convenient place."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="flex gap-5 border-slate-200 p-8 md:border-r md:last:border-r-0">
      <div className="mt-1 text-emerald-700 [&>svg]:h-9 [&>svg]:w-9">
        {icon}
      </div>

      <div>
        <h3 className="text-base font-extrabold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
      </div>
    </div>
  );
}
