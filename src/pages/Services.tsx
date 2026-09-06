import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Briefcase, ClipboardList, FolderArchive, BarChart3, TrendingUp, Cloud } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/links";

type Service = {
  icon: any;
  title: string;
  paragraphs: string[];
  deliverables: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: Briefcase,
    title: "Fractional CFO for Public Companies",
    paragraphs: [
      "A public company CFO carries significant responsibility — NI 52-109 CEO/CFO certifications, MD&A sign-off, audit committee participation, investor relations support. Our fractional CFOs have held these responsibilities for multiple listed companies simultaneously and understand the full weight of the role.",
      "We embed directly into your leadership team — attending board calls, representing the company to auditors and regulators, and building the financial narrative that investors need to make decisions.",
      "Unlike a consultant who delivers a report and leaves, we're accountable to the same deadlines and outcomes as a full-time hire — at 20–30% of the annual cost.",
    ],
    deliverables: [
      "NI 52-109 CEO/CFO certification support",
      "Quarterly and annual MD&A preparation",
      "Audit committee representation",
      "Investor relations financial support",
      "Board package preparation",
      "Capital allocation advisory",
      "M&A financial due diligence",
      "Strategic growth planning",
    ],
  },
  {
    icon: ClipboardList,
    title: "Controllership & Compliance",
    paragraphs: [
      "Your controllership function is the engine of public company compliance. We own month-end close, IFRS/GAAP application, intercompany eliminations, and consolidations across subsidiaries.",
      "Every transaction we book has audit traceability. Every reconciliation is documented. Every accrual is supported. The result is a clean trial balance every month and an audit that closes in days, not weeks.",
      "We work alongside your existing accounting team or run the function entirely — whichever fits your stage and budget.",
    ],
    deliverables: [
      "Month-end and quarter-end close",
      "IFRS / ASPE / US GAAP compliance",
      "Intercompany eliminations & consolidations",
      "Audit preparation and PBC schedules",
      "Internal controls documentation",
      "Revenue recognition policy & application",
      "Accounts payable / receivable oversight",
      "Bank and treasury reconciliations",
    ],
  },
  {
    icon: FolderArchive,
    title: "SEDAR+ & Regulatory Filing",
    paragraphs: [
      "SEDAR+ is unforgiving — late filings, errors, or missing documents can result in cease-trade orders that destroy market confidence overnight. We treat every filing with the precision it demands.",
      "We maintain your continuous disclosure calendar, prepare every required document, coordinate with auditors and legal counsel, and submit through SEDAR+ on your behalf — on time, every time.",
      "Material change reports, NI 51-102 amendments, AIF, MD&A, financial statements: all of it, end to end.",
    ],
    deliverables: [
      "Quarterly and annual MD&A drafting",
      "AIF preparation and filing",
      "Audited and interim financial statements",
      "Material change reports",
      "NI 51-102 continuous disclosure",
      "SEDAR+ submission management",
      "TSX-V / CSE / NEO regulator correspondence",
      "Insider reporting (SEDI) coordination",
    ],
  },
  {
    icon: BarChart3,
    title: "Power BI & Board Reporting",
    paragraphs: [
      "Board members and institutional investors expect the same quality of reporting they see at large-cap issuers. We deliver it — using Power BI to build live, interactive dashboards that replace your manual quarterly Excel scramble.",
      "Every metric your board cares about — revenue, EBITDA, cash runway, KPI trends, segment performance — updated in real time and packaged into a polished PDF for the board pack.",
      "We design the dashboards, model the data, and operate the reporting cadence. You and your board get clarity.",
    ],
    deliverables: [
      "Power BI architecture and data modeling",
      "Live executive dashboards",
      "Quarterly board package automation",
      "KPI scorecards with threshold alerts",
      "Segment and product P&L reporting",
      "EBITDA bridge and waterfall charts",
      "Cash runway and burn projections",
      "Investor relations one-pagers",
    ],
  },
  {
    icon: TrendingUp,
    title: "FP&A & Forecasting",
    paragraphs: [
      "Capital raises, strategic decisions, and M&A all hinge on the credibility of your forecasts. We build investor-ready financial models that withstand institutional scrutiny.",
      "Annual operating budgets, quarterly reforecasts, three-statement models, scenario analysis, and sensitivity tables — everything your CEO, board, and investors need to allocate capital with confidence.",
      "We don't deliver a static spreadsheet. We deliver a living planning system that evolves with your business.",
    ],
    deliverables: [
      "Annual operating budget",
      "Quarterly rolling forecasts",
      "Three-statement integrated model",
      "Scenario and sensitivity analysis",
      "Capital raise financial projections",
      "M&A and investment models",
      "Variance analysis and commentary",
      "Long-range strategic plan (3–5 year)",
    ],
  },
  {
    icon: Cloud,
    title: "Accounting System Migration",
    paragraphs: [
      "Most small public companies are stuck on legacy desktop accounting platforms that create audit risk, prevent real-time reporting, and consume hours of manual work. We migrate you to a modern cloud platform with zero data loss and zero downtime.",
      "Our 5-phase methodology — audit, extract, configure, parallel-run, cutover — has migrated TSX-V, CSE, and NEO companies without a single business interruption.",
      "When we're done, your finance function runs on a platform built for the next decade — not the last one.",
    ],
    deliverables: [
      "Legacy platform audit and risk assessment",
      "Historical data extraction and cleansing",
      "Cloud platform selection and configuration",
      "Chart of accounts redesign",
      "Parallel running and validation (2–4 weeks)",
      "Team training and documentation",
      "Full cutover and legacy decommission",
      "Post-migration support",
    ],
    featured: true,
  },
];

const sectionIds = ["fractional-cfo", "controllership", "sedar-filing", "board-reporting", "fpa-forecasting", "accounting-migration"];

const ServicesPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85"
        eyebrow="Our Services"
        title={<>Complete <span className="text-gradient-teal">Financial Services</span> for Public Companies</>}
        subtitle="From SEDAR+ compliance to board-level strategy — we handle it all."
      />

      {services.map((s, i) => {
        const dark = i % 2 === 0;
        return (
          <section
            key={i}
            id={sectionIds[i]}
            className={`${dark ? "bg-bg-secondary" : "bg-bg-white"} py-24 scroll-mt-20`}
          >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-teal/15 border border-teal/30 text-teal" : "bg-teal text-white"}`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[12px] text-muted-foreground uppercase tracking-[3px]">
                    Service 0{i + 1}
                  </span>
                  {s.featured && (
                    <span className="px-3 py-1 rounded-full bg-gradient-gold text-[#1a1a1a] text-[10px] font-semibold uppercase tracking-wider">Featured</span>
                  )}
                </div>
                <h2 className={`font-display font-bold text-[28px] sm:text-[36px] lg:text-[40px] leading-tight ${dark ? "text-white" : "text-[#0D1829]"}`} style={{ letterSpacing: "-1px" }}>
                  {s.title}
                </h2>
                <div className={`mt-6 space-y-4 text-[16px] leading-[1.8] ${dark ? "text-muted-foreground" : "text-[#4A5568]"}`}>
                  {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className={`rounded-2xl p-7 border ${dark ? "bg-gradient-card border-white/5" : "bg-bg-light border-black/5"}`}>
                  <h3 className={`label-eyebrow ${dark ? "text-teal" : "text-teal"} mb-5`}>What's Delivered</h3>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className={`flex items-start gap-3 text-[14px] ${dark ? "text-white" : "text-[#0D1829]"}`}>
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-teal shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5"
                  >
                    Discuss This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="bg-gradient-teal py-20 text-white text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              One Partner. Every Public Company Finance Need.
            </h2>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-8 py-4 min-h-[48px] rounded-full bg-white text-[#0D1829] font-display font-bold transition-all hover:-translate-y-0.5">
              Book a Free Consultation →
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ServicesPage;
