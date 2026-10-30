import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck,
  Banknote,
  Check,
  ClipboardCheck,
  ClipboardList,
  FileCheck,
  MapPin,
  MessageCircle,
  Phone,
  PlugZap,
  ShieldCheck,
  Sun,
  Wind,
  X,
  Zap,
} from "lucide-react";

import heroImage from "@/assets/hero-solar.jpg";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import zeroDrillImage from "@/assets/zero-drill.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Radha Rani Enterprises | Rooftop Solar Installation in Govardhan, Mathura",
      },
      {
        name: "description",
        content:
          "Rooftop solar panel installation in Govardhan, Mathura, Vrindavan and nearby towns. Free site survey, PM Surya Ghar subsidy paperwork, net metering and 25-year panel warranty. Call 8979161650.",
      },
      {
        property: "og:title",
        content: "Radha Rani Enterprises | Rooftop Solar in Govardhan, Mathura",
      },
      {
        property: "og:description",
        content:
          "Solar for homes and businesses in Govardhan and Mathura — free site survey, subsidy paperwork, net metering, 25-year panel warranty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+91 89791 61650";
const PHONE_TEL = "tel:+918979161650";
const WHATSAPP =
  "https://wa.me/918979161650?text=Namaste%2C%20I%20want%20a%20free%20solar%20site%20survey%20for%20my%20home.";

function Index() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteHeader />
      <Hero />
      <TrustStrip />
      <SavingsEstimator />
      <SystemCards />
      <Services />
      <WhyUs />
      <Process />
      <SubsidyTable />
      <AreasWeServe />
      <BrandMarquees />
      <Comparison />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 text-night-foreground backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sun-foreground">
            <Sun className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide sm:text-base">
              Radha Rani Enterprises
            </span>
            <span className="block text-[11px] font-medium text-night-muted sm:text-xs">
              Solar Energy · Govardhan, Mathura
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-night-foreground transition-colors hover:bg-white/10 sm:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90 sm:px-5"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xs:inline">{PHONE}</span>
            <span className="xs:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-night">
      <img
        src={heroImage}
        alt="Solar panels on the rooftops of Govardhan town at sunrise"
        className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/75 to-night/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-sun/40 bg-night/50 px-4 py-1.5 text-xs font-semibold tracking-wide text-sun uppercase backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Rooftop solar specialists · Govardhan &amp; Mathura
          </span>

          <h1 className="text-balance mt-6 font-display text-4xl font-bold leading-[1.08] text-night-foreground sm:text-5xl lg:text-6xl">
            Cut your electricity bill with rooftop solar that{" "}
            <span className="text-sun">pays for itself</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-night-muted sm:text-lg">
            Radha Rani Enterprises designs and installs on-grid rooftop solar
            systems for homes, shops, schools and factories across Govardhan,
            Mathura and the Braj region. From the first roof survey to the day
            your subsidy reaches your bank account, one local team handles
            everything — no middlemen, no handoffs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold tracking-wide text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              Get a Free Site Survey
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 font-display text-sm font-bold tracking-wide text-night-foreground backdrop-blur transition-colors hover:bg-white/15"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-night-foreground/90">
            {[
              "PM Surya Ghar subsidy paperwork handled",
              "25-year panel warranty",
              "Zero-drill mounting — no roof leaks",
              "5-year free maintenance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sun/20">
                  <Check className="h-3.5 w-3.5 text-sun" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

function TrustStrip() {
  const stats = [
    { icon: Zap, label: "Up to ₹1,08,000", sub: "Total subsidy (Centre + UP)" },
    { icon: Banknote, label: "2–4 years", sub: "Typical payback period" },
    { icon: ShieldCheck, label: "25 years", sub: "Panel performance warranty" },
    { icon: Wind, label: "170 km/h", sub: "Mounting wind-rating" },
  ];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-start gap-3 px-2 py-3 sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent-foreground">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                {s.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Savings estimator                                                   */
/* ------------------------------------------------------------------ */

const BILL_BANDS = [
  {
    bill: "Less than ₹1,500",
    kw: "1 kW",
    subsidy: "₹45,000",
    savings: "₹600 – ₹1,100 / month",
  },
  {
    bill: "₹1,500 – ₹3,000",
    kw: "2 kW",
    subsidy: "₹90,000",
    savings: "₹1,500 – ₹2,400 / month",
  },
  {
    bill: "₹3,000 – ₹6,000",
    kw: "3 kW",
    subsidy: "₹1,08,000",
    savings: "₹2,500 – ₹4,500 / month",
  },
  {
    bill: "More than ₹6,000",
    kw: "5 kW or more",
    subsidy: "₹1,08,000",
    savings: "₹4,500 – ₹8,000+ / month",
  },
];

function SavingsEstimator() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-4xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-10">
          <div className="text-center">
            <h2 className="text-balance font-display text-2xl font-bold sm:text-3xl">
              Check what subsidy you qualify for
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Pick your average monthly electricity bill and see the system size
              that fits, the subsidy you get under the PM Surya Ghar Yojana, and
              roughly what you will save every month.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {BILL_BANDS.map((band, i) => (
              <button
                key={band.bill}
                type="button"
                onClick={() => setSelected(i === selected ? null : i)}
                className={`rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-all ${
                  selected === i
                    ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "border-border bg-secondary/60 text-foreground hover:border-primary/50 hover:bg-secondary"
                }`}
              >
                {band.bill}
              </button>
            ))}
          </div>

          {selected !== null && BILL_BANDS[selected] && (
            <div className="animate-rise mt-8 grid gap-4 rounded-2xl bg-secondary/70 p-6 sm:grid-cols-3">
              <EstimatorResult label="Recommended system" value={BILL_BANDS[selected]!.kw} />
              <EstimatorResult label="Total subsidy" value={BILL_BANDS[selected]!.subsidy} />
              <EstimatorResult
                label="Monthly savings"
                value={BILL_BANDS[selected]!.savings}
              />
              <p className="text-xs text-muted-foreground sm:col-span-3">
                Approximate estimate. Your exact numbers depend on your roof and
                your DISCOM slab — our engineer confirms everything in the free
                survey.
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE} for a free estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EstimatorResult({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-sm">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-bold text-foreground">{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* System cards                                                        */
/* ------------------------------------------------------------------ */

function SystemCards() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Most popular systems"
          title="Two system sizes cover almost every home in Braj"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SystemCard
            badge="Fits 2–3 BHK homes"
            title="3kW System"
            rows={[
              ["12 to 15 units", "Daily power generation"],
              ["₹2,000 – ₹4,000", "Monthly bill savings"],
              ["₹1,08,000", "Total subsidy (Central + UP)"],
              ["₹60,000 – ₹80,000", "Your cost after subsidy"],
              ["2 to 3 years", "Payback period"],
            ]}
            featured
          />
          <SystemCard
            badge="Large homes · heavy AC use"
            title="5kW System"
            rows={[
              ["20 to 25 units", "Daily power generation"],
              ["₹4,000 – ₹7,000", "Monthly bill savings"],
              ["₹1,08,000", "Total subsidy (Central + UP)"],
              ["3 to 4 years", "Payback period"],
            ]}
          />
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Once the system has paid for itself, your power is essentially free —
          with 20-plus years of warranty still left on the panels.
        </p>
      </div>
    </section>
  );
}

function SystemCard({
  badge,
  title,
  rows,
  featured = false,
}: {
  badge: string;
  title: string;
  rows: [string, string][];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-4xl border p-7 sm:p-8 ${
        featured
          ? "border-primary/40 bg-card shadow-2xl shadow-primary/15"
          : "border-border bg-card shadow-lg shadow-primary/5"
      }`}
    >
      <span className="absolute -top-3.5 left-7 rounded-full bg-primary px-4 py-1 text-xs font-bold tracking-wide text-primary-foreground uppercase">
        {badge}
      </span>
      <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-6 divide-y divide-border">
        {rows.map(([value, label]) => (
          <li key={label} className="flex items-baseline justify-between gap-4 py-3.5">
            <span className="text-sm text-muted-foreground">{label}</span>
            <span className="text-right font-display text-base font-bold text-foreground">
              {value}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={PHONE_TEL}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-night px-6 py-3 text-sm font-bold text-night-foreground transition-colors hover:bg-night/85"
      >
        <Phone className="h-4 w-4" />
        Get exact pricing for your roof
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we install"
          title="Solar for homes and businesses across Govardhan &amp; Mathura"
        />

        <div className="mt-10 space-y-10">
          <ServiceRow
            image={residentialImage}
            imageAlt="Residential rooftop solar installation on an Indian home"
            title="Residential Rooftop Solar (1kW – 10kW)"
            text="An engineer — not a salesperson — visits your home, checks your roof for shadow-free space and reviews your last six electricity bills before recommending anything. Most homes in the Braj region land on a 3kW or 5kW system. We never push a bigger system than you need, and every residential installation qualifies for the PM Surya Ghar subsidy."
            points={[
              "Free site survey and shadow analysis",
              "System design matched to your roof and usage",
              "Tier-1, BIS-certified panels only",
              "Complete PVVNL net-metering paperwork",
              "Subsidy application and follow-up until money lands",
            ]}
          />
          <ServiceRow
            image={commercialImage}
            imageAlt="Commercial rooftop solar installation on a factory roof in Mathura"
            reverse
            title="Commercial &amp; Industrial Solar (5kW – 500kW)"
            text="Commercial power tariffs run far higher than domestic rates, and for a factory, cold storage or school running heavy loads that is a serious line item every month. A commercial rooftop system pays back in 3 to 5 years, and after that the power is free for the life of the panels. Every commercial job gets a dedicated project manager and an install plan built around your operations."
            points={[
              "Load analysis and energy audit",
              "Custom design to maximise your roof space",
              "ALMM-listed Tier-1 panels and proven inverters",
              "DISCOM coordination and net-metering setup",
              "25-year panel warranty, 10-year inverter warranty",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  image,
  imageAlt,
  title,
  text,
  points,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  title: string;
  text: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-8 lg:grid-cols-2 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={1200}
        height={800}
        className="h-72 w-full rounded-4xl object-cover shadow-xl shadow-primary/10 sm:h-96 lg:[direction:ltr]"
      />
      <div className="lg:[direction:ltr]">
        <h3 className="font-display text-2xl font-bold sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {text}
        </p>
        <ul className="mt-6 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm font-medium">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-secondary/70"
        >
          Discuss your project
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Why us                                                              */
/* ------------------------------------------------------------------ */

function WhyUs() {
  return (
    <section className="bg-night py-16 text-night-foreground sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Radha Rani Enterprises"
              title="Local team. Real accountability. Tier-1 hardware."
              dark
            />
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-night-muted sm:text-base">
              We are based on Sakarva Road in Govardhan — a real office you can
              walk into, not a call centre that disappears after the invoice. We
              handle everything in-house: survey, design, installation, net
              metering and subsidy follow-up, so you always know exactly who is
              answerable.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <WhyFeature
                icon={Wind}
                title="Built for Braj weather"
                text="Hot-dip galvanised mounting structures rated for 170 km/h winds, with no on-site welding — they will not rust out in a few seasons."
              />
              <WhyFeature
                icon={FileCheck}
                title="Zero paperwork for you"
                text="Portal registration, DISCOM feasibility, vendor approval, net-meter application and subsidy disbursement — every stage handled by us."
              />
              <WhyFeature
                icon={ShieldCheck}
                title="Zero-drill mounting"
                text="Non-penetrating clamps and chemical anchoring mean no holes in your roof slab and no leak risk, ever."
              />
              <WhyFeature
                icon={BadgeCheck}
                title="Only certified hardware"
                text="BIS-certified, ALMM-listed panels from India's leading manufacturers, with 25-year panel and 10-year inverter warranties."
              />
            </div>
          </div>

          <img
            src={zeroDrillImage}
            alt="Technician fitting a zero-drill solar mounting clamp on a rooftop"
            loading="lazy"
            width={1200}
            height={800}
            className="h-80 w-full rounded-4xl object-cover shadow-2xl sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}

function WhyFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Wind;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sun/20 text-sun">
        <Icon className="h-5 w-5" />
      </span>
      <h4 className="mt-3 font-display text-base font-bold">{title}</h4>
      <p className="mt-1.5 text-xs leading-relaxed text-night-muted sm:text-sm">{text}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Free site survey",
      text: "Our engineer visits your home or business, checks the roof, shadow-free area and electrical panel. Around 30 minutes for a home.",
    },
    {
      icon: FileCheck,
      title: "Custom proposal in 24 hours",
      text: "Recommended system size based on your bills, expected generation, savings projection at your exact tariff slab, subsidy breakdown and EMI options.",
    },
    {
      icon: PlugZap,
      title: "Professional installation (1–3 days)",
      text: "Our own trained technicians do the work under a lead engineer's supervision. No subcontractors, no day labour. Zero-drill mounting on every job.",
    },
    {
      icon: ClipboardCheck,
      title: "Net metering & subsidy filing",
      text: "We file your net-metering application with PVVNL and push your PM Surya Ghar subsidy through until it reaches your bank account.",
    },
    {
      icon: Banknote,
      title: "You start saving",
      text: "System goes live, a monitoring app shows real-time generation, and our 5-year free maintenance covers cleaning, inverter checks and wiring inspections.",
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From first call to first saved unit in five steps"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`relative rounded-4xl border border-border bg-card p-6 shadow-lg shadow-primary/5 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="absolute right-6 top-6 font-display text-4xl font-bold text-primary/15">
                0{i + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-4xl border border-primary/30 bg-secondary/70 p-7 text-center sm:p-8">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Go solar with ₹0 upfront
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Through our banking partners you can finance the entire system on
            EMI — and the monthly EMI is often lower than your current
            electricity bill, so you start saving from month one.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Subsidy table                                                       */
/* ------------------------------------------------------------------ */

function SubsidyTable() {
  const rows = [
    { cap: "1 kW", central: "₹30,000", state: "₹15,000", total: "₹45,000" },
    { cap: "2 kW", central: "₹60,000", state: "₹30,000", total: "₹90,000" },
    { cap: "3 kW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000" },
    { cap: "3 kW – 10 kW", central: "₹78,000", state: "₹30,000", total: "₹1,08,000" },
  ];

  return (
    <section className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="PM Surya Ghar Muft Bijli Yojana"
          title="Solar subsidy in Mathura district"
        />

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          Not a loan, not a discount — a direct subsidy deposited into your bank
          account once your system is installed and verified. Here is what
          residential consumers qualify for:
        </p>

        <div className="mt-10 overflow-hidden rounded-4xl border border-border bg-card shadow-xl shadow-primary/5">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-night text-night-foreground">
                <th className="px-5 py-4 font-display font-semibold sm:px-7">System capacity</th>
                <th className="px-3 py-4 font-display font-semibold">Central subsidy</th>
                <th className="px-3 py-4 font-display font-semibold">State subsidy</th>
                <th className="px-5 py-4 font-display font-semibold text-primary sm:px-7">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.cap} className="transition-colors hover:bg-secondary/50">
                  <td className="px-5 py-4 font-semibold sm:px-7">{r.cap}</td>
                  <td className="px-3 py-4 text-muted-foreground">{r.central}</td>
                  <td className="px-3 py-4 text-muted-foreground">{r.state}</td>
                  <td className="px-5 py-4 font-bold text-primary sm:px-7">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-xs text-muted-foreground">
          Approximate estimate. The subsidy applies to on-grid residential
          systems, and the central share caps at ₹78,000 — going above 3kW
          raises the subsidy no further, but still makes sense if your usage is
          high.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Areas served                                                        */
/* ------------------------------------------------------------------ */

function AreasWeServe() {
  const areas = [
    "Govardhan",
    "Mathura",
    "Vrindavan",
    "Kosi Kalan",
    "Chhata",
    "Deeg",
    "Farah",
    "Nandgaon",
    "Barsana",
    "Raya",
    "Mant",
    "Sonkh",
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Service area"
          title="We serve the whole Braj region"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          Both PVVNL (UPPCL) domestic and commercial consumers are eligible for
          solar installation and net metering — we coordinate directly with the
          DISCOM on your behalf.
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <li
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-sm"
            >
              <MapPin className="h-4 w-4 text-primary" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Brand marquees                                                      */
/* ------------------------------------------------------------------ */

const PANEL_BRANDS = [
  "Tata Power Solar",
  "Adani Solar",
  "Waaree",
  "Vikram Solar",
  "Goldi Solar",
  "UTL Solar",
  "Luminous",
  "Bluebird Solar",
];

const INVERTER_BRANDS = [
  "Deye",
  "Eastman",
  "K Solare",
  "Havells Solar",
  "Microtek",
  "Luminous",
];

const FINANCE_PARTNERS = ["SBI", "HDFC Bank", "Bajaj Finserv", "ICICI Bank"];

function BrandMarquees() {
  return (
    <section className="overflow-hidden border-y border-border bg-card py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our technology & finance partners"
          title="Only the leading panel and inverter brands"
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          We avoid unbranded hardware that loses 20–30% of output within five
          years. Every system we install uses Tier-1, BIS-certified, ALMM-listed
          equipment from India's biggest names.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        <MarqueeRow label="Panels" items={PANEL_BRANDS} />
        <MarqueeRow label="Inverters" items={INVERTER_BRANDS} reverse />
        <MarqueeRow label="Finance & EMI partners" items={FINANCE_PARTNERS} />
      </div>
    </section>
  );
}

function MarqueeRow({
  label,
  items,
  reverse = false,
}: {
  label: string;
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div>
      <p className="mb-3 text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div
          className={`flex min-w-full shrink-0 items-center gap-4 px-2 ${
            reverse ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"
          }`}
        >
          {doubled.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="shrink-0 rounded-2xl border border-border bg-secondary/60 px-6 py-3.5 font-display text-sm font-bold whitespace-nowrap text-foreground/80 sm:text-base"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

function Comparison() {
  const rows: [string, string, string][] = [
    ["Mounting", "Zero-drill — no roof damage", "Drills holes — leak risk"],
    ["Structure", "Galvanised, 170 km/h wind-rated", "Basic iron angles"],
    ["Hardware", "Tier-1, BIS-certified, ALMM-listed", "Unbranded panels"],
    ["Paperwork", "Subsidy + net metering handled", "You run pillar to post"],
    ["Support", "WhatsApp + local office, 5-year AMC", "Phone calls only"],
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Compare before you commit"
          title="Radha Rani Enterprises vs a typical local vendor"
        />

        <div className="mt-10 overflow-hidden rounded-4xl border border-border bg-card shadow-xl shadow-primary/5">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-night text-night-foreground">
                <th className="px-5 py-4 font-display font-semibold sm:px-7">&nbsp;</th>
                <th className="px-3 py-4 font-display text-sm font-bold text-sun sm:px-5">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4" strokeWidth={3} /> Radha Rani
                  </span>
                </th>
                <th className="px-5 py-4 font-display text-sm font-bold text-night-muted sm:px-7">
                  <span className="inline-flex items-center gap-1.5">
                    <X className="h-4 w-4" strokeWidth={3} /> Local vendor
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map(([label, ours, theirs]) => (
                <tr key={label} className="transition-colors hover:bg-secondary/50">
                  <td className="px-5 py-4 font-semibold sm:px-7">{label}</td>
                  <td className="px-3 py-4 font-medium text-accent-foreground sm:px-5">
                    <Check className="mr-1.5 inline h-4 w-4 text-primary" strokeWidth={3} />
                    {ours}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground sm:px-7">
                    <X className="mr-1.5 inline h-4 w-4 text-destructive" strokeWidth={3} />
                    {theirs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS: [string, string][] = [
  [
    "How much does rooftop solar cost in Govardhan or Mathura?",
    "A 3kW on-grid system typically runs ₹1.8–2.2 lakh and a 5kW around ₹2.8–3.5 lakh before subsidy. After the PM Surya Ghar subsidy, a 3kW can drop to roughly ₹60,000–80,000 out of pocket. Final pricing depends on the panel choice and roof complexity.",
  ],
  [
    "How much electricity will my system generate daily?",
    "In this region a 1kW system makes about 4–5 units a day, a 3kW makes 12–15 and a 5kW gives 20–25, depending on the season and how clean your roof gets.",
  ],
  [
    "Will installing panels damage my roof?",
    "No. We use non-penetrating clamps and chemical anchoring — no holes are drilled into your slab, so there is no leak risk. The structure is rated for winds up to 170 km/h.",
  ],
  [
    "What is net metering, and can I get it here?",
    "Net metering lets you export surplus solar power to the grid and earn bill credits through a bidirectional meter. PVVNL (UPPCL) supports it for residential systems, and we handle the entire application for you.",
  ],
  [
    "How long does the whole process take?",
    "The installation itself takes 1–3 days. The full journey, including DISCOM approvals, inspection and net-meter activation, is usually 6–10 weeks.",
  ],
  [
    "Can I install solar with zero upfront cost?",
    "Yes. With solar loans or EMI options from our banking partners, the monthly payment is often lower than your current electricity bill, so your savings start from month one.",
  ],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />

        <div className="mt-10 space-y-3">
          {FAQS.map(([q, a], i) => (
            <div
              key={q}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                aria-expanded={open === i}
              >
                <span className="font-display text-sm font-bold sm:text-base">{q}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="animate-rise border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA + Footer                                                  */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-night py-20 text-night-foreground sm:py-24">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/70 to-night" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance font-display text-3xl font-bold sm:text-4xl">
          Get a free solar estimate for your property
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-night-muted sm:text-base">
          Talk to our team. We will look at your roof, go through your
          electricity bills, work out your savings and tell you exactly how much
          subsidy you qualify for. It takes about 30 minutes, and it costs
          nothing.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={PHONE_TEL}
            className="animate-pulse-ring inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" />
            Call {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-4 font-display text-base font-bold backdrop-blur transition-colors hover:bg-white/15"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-night pb-10 text-night-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun text-sun-foreground">
              <Sun className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <span className="font-display text-base font-bold">Radha Rani Enterprises</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-night-muted">
            Rooftop solar design, installation and maintenance for homes,
            businesses, schools and temples across the Braj region.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-wide uppercase">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-night-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
              Sakarva Road, Govardhan, Mathura, Uttar Pradesh
            </li>
            <li>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2.5 transition-colors hover:text-night-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-sun" />
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-night-foreground"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-sun" />
                WhatsApp: {PHONE}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold tracking-wide uppercase">
            Quick links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm text-night-muted">
            <li>
              <a href="#/" className="transition-colors hover:text-night-foreground">
                Home
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-night-foreground"
              >
                Request a site survey
              </a>
            </li>
            <li>
              <a
                href={PHONE_TEL}
                className="transition-colors hover:text-night-foreground"
              >
                Call for pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-night-muted sm:px-6">
        © {new Date().getFullYear()} Radha Rani Enterprises, Govardhan, Mathura.
        Subsidy figures shown are approximate and subject to government scheme
        rules.
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Shared heading                                                      */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "" : "text-center"}>
      <span
        className={`inline-block text-xs font-bold tracking-widest uppercase ${
          dark ? "text-sun" : "text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`text-balance mt-2 font-display text-2xl font-bold sm:text-3xl lg:text-4xl ${
          dark ? "text-night-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
