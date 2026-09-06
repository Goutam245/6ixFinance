import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { CalendarClock, FileCheck, Banknote, ShieldCheck, Layers, ClipboardCheck } from "lucide-react";

const cards = [
  { icon: CalendarClock, title: "Month-End Close Management", body: "Complete close process within 5 business days of month-end — reconciliations, accruals, journal entries, financials." },
  { icon: ShieldCheck, title: "GAAP/IFRS Compliance", body: "All financial statements prepared to Canadian GAAP or IFRS as required by your exchange listing standards." },
  { icon: Banknote, title: "Bank Reconciliation", body: "Daily and monthly bank reconciliations across all accounts — eliminating errors before they reach your auditors." },
  { icon: FileCheck, title: "Audit Preparation", body: "Audit-ready working papers, schedules, and documentation — reducing your external audit timeline and cost." },
  { icon: ClipboardCheck, title: "Internal Controls", body: "Design and implementation of internal controls appropriate for a public company — supporting NI 52-109 certification." },
  { icon: Layers, title: "Multi-Entity Consolidation", body: "Financial consolidation across multiple subsidiaries, joint ventures, and intercompany eliminations." },
];

const timeline = [
  { day: "Day 1", title: "Cutoff & Import", body: "Transaction cutoff, data import from all systems, sub-ledger close." },
  { day: "Day 2", title: "Reconciliations", body: "All bank, credit card, and balance sheet reconciliations completed." },
  { day: "Day 3", title: "Accruals & JEs", body: "Accruals, deferrals, and adjusting journal entries posted." },
  { day: "Day 4", title: "Financials", body: "Financial statements prepared, variance analysis drafted." },
  { day: "Day 5", title: "Review & Reporting", body: "Management review, board package, and KPI dashboards delivered." },
];

const Controllership = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=85"
      badge={{ label: "Controllership" }}
      title={<>Controllership & Compliance for <span className="text-gradient-teal">Public Companies</span></>}
      subtitle="Audit-ready books, every month. The accounting foundation public company finance teams trust."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Controllership" }]} />
    </div>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-teal text-[12px] font-semibold uppercase tracking-[3px]">CONTROLLERSHIP</p>
          <h2 className="mt-3 font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
            The Accounting Foundation Every Public Company Needs
          </h2>
          <div className="mt-8 space-y-6 text-[17px] text-white/75 leading-[1.8]">
            <p>The controller function is where public company compliance is won or lost. Every entry must be documented, every reconciliation supported, and every period closed on a predictable cadence — because your auditors, your board, and your investors depend on it.</p>
            <p>6ixFinance controllers run your month-end close to a 5-day standard, apply IFRS or Canadian GAAP correctly the first time, and prepare audit working papers that shorten your year-end audit by weeks. We work alongside or in place of your accounting team, depending on where you are.</p>
            <p>For TSX-V, CSE, and NEO issuers, audit-readiness isn't a once-a-year project — it's a monthly discipline. We bring that discipline, the documentation, and the systems that make NI 52-109 certification something your CEO and CFO can sign with confidence.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>
            What Our Controllers Handle Every Month
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <c.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-[#0D1829] text-[19px] mb-2">{c.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-white text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>
            Our 5-Day <span className="text-gradient-teal">Month-End Close Timeline</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-teal/0 via-teal/40 to-teal/0" />
          {timeline.map((t, i) => (
            <Reveal key={t.day} delay={i * 0.08}>
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center font-display font-bold text-[14px] text-background" style={{ background: "hsl(var(--teal))" }}>{t.day}</div>
                <div className="mt-5 bg-card border border-white/8 rounded-2xl p-5 text-center hover:border-teal/40 transition-colors h-[160px]">
                  <h4 className="font-display font-bold text-white text-[16px] mb-2">{t.title}</h4>
                  <p className="text-white/65 text-[13px] leading-[1.6]">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Ready for Audit-Ready Books?" subtitle="Talk to a 6ixFinance controller about your close process." />
  </SiteLayout>
);

export default Controllership;
