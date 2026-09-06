import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { LayoutDashboard, FileBarChart, Users, Wallet, Target, Activity, X, Check } from "lucide-react";

const dashboards = [
  { icon: LayoutDashboard, title: "Executive Financial Dashboard", body: "Single-pane view of revenue, gross margin, OpEx, EBITDA, and cash — refreshed daily.", metrics: ["Revenue", "EBITDA", "Cash", "Burn rate"] },
  { icon: FileBarChart, title: "Quarterly Board Package", body: "Auto-generated board-ready PDF and live dashboard for every quarterly meeting.", metrics: ["P&L vs Budget", "KPIs", "Variance"] },
  { icon: Users, title: "Investor Relations Report", body: "Distilled metrics formatted for investor decks and one-on-one meetings.", metrics: ["ARR", "Growth %", "Runway"] },
  { icon: Wallet, title: "Cash Runway Projection", body: "13-week rolling cash forecast with scenario toggles for fundraising and OpEx.", metrics: ["Weekly cash", "Runway", "Scenarios"] },
  { icon: Target, title: "KPI Scorecard", body: "Operational and financial KPIs against board-approved targets, color-coded.", metrics: ["KPI vs Target", "Trend", "Status"] },
  { icon: Activity, title: "EBITDA Bridge & Waterfall", body: "Visual waterfall of how EBITDA moved quarter-over-quarter and year-over-year.", metrics: ["YoY Bridge", "QoQ Bridge", "Drivers"] },
];

const beforeList = ["2 weeks to prepare board package", "Data always out of date", "Manual copy-paste errors", "No real-time visibility", "Different formats each quarter"];
const afterList = ["Board package auto-generates", "Real-time financial data", "Zero manual errors", "Live dashboard 24/7", "Consistent institutional format"];
const integrations = ["QuickBooks Online", "Sage", "Excel", "Salesforce", "HubSpot"];

const PowerBI = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85"
      badge={{ label: "Power BI Reporting" }}
      title={<>Power BI <span className="text-gradient-teal">Board & Investor Reporting</span></>}
      subtitle="Replace static Excel with live, board-ready dashboards connected directly to your accounting system."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Power BI Reporting" }]} />
    </div>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-teal text-[12px] font-semibold uppercase tracking-[3px]">POWER BI</p>
          <h2 className="mt-3 font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
            Replace Static Reports With Living, Board-Ready Dashboards
          </h2>
          <div className="mt-8 space-y-6 text-[17px] text-white/75 leading-[1.8]">
            <p>Public company boards expect more than a printed PDF emailed two days before a meeting. They expect institutional-grade visibility — live KPIs, current cash position, real-time variance to plan, and the ability to drill into the numbers themselves.</p>
            <p>Power BI, properly architected, delivers exactly that. We build dashboards directly connected to your accounting system, ERP, and CRM — so every number you put in front of your board, audit committee, or investors is current, accurate, and traceable to source.</p>
            <p>For TSX-V, CSE, and NEO issuers, this means board packages that build themselves, MD&A variance tables that don't take a week to compile, and an investor narrative backed by data your IR team can defend.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>What We Build For You</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboards.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <d.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-[#0D1829] text-[19px] mb-2">{d.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed mb-4">{d.body}</p>
                <div className="flex flex-wrap gap-2">
                  {d.metrics.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-md text-[11px] font-medium" style={{ background: "hsl(var(--teal) / 0.1)", color: "hsl(var(--teal))" }}>{m}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-white text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>Before vs After Power BI</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl p-8 border" style={{ background: "rgba(220,38,38,0.06)", borderColor: "rgba(220,38,38,0.25)" }}>
              <h3 className="font-display font-bold text-[#fca5a5] text-[20px] mb-5">Before — Manual Excel</h3>
              <ul className="space-y-3">
                {beforeList.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/80 text-[15px]">
                    <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl p-8 border" style={{ background: "hsl(var(--teal) / 0.08)", borderColor: "hsl(var(--teal) / 0.4)" }}>
              <h3 className="font-display font-bold text-teal-bright text-[20px] mb-5">After — Power BI with 6ixFinance</h3>
              <ul className="space-y-3">
                {afterList.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90 text-[15px]">
                    <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="py-20" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-teal text-[12px] font-semibold uppercase tracking-[3px]">CONNECTS TO</p>
          <h2 className="mt-3 font-display font-bold text-white text-[28px] sm:text-[34px]">Your Existing Stack</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {integrations.map((i) => (
              <span key={i} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-display font-medium hover:border-teal/40 transition-colors">{i}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Ready for Live Board Reporting?" subtitle="See a Power BI dashboard built specifically for your company." />
  </SiteLayout>
);

export default PowerBI;
