import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase, ClipboardList, FolderArchive, BarChart3, TrendingUp, Cloud,
  CheckCircle2, XCircle, Search, Package, RotateCw, Check, Rocket, Handshake, Lock, Download,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Ticker } from "@/components/Ticker";
import { BOOKING_URL } from "@/lib/links";

const trustStats = [
  { num: "50+", label: "Public Companies Served" },
  { num: "$2B+", label: "Capital Markets Transactions" },
  { num: "100%", label: "SEDAR+ Filing Accuracy" },
  { num: "NI 52-109", label: "Certified Team" },
];

const services = [
  { icon: Briefcase, title: "Fractional CFO for Public Companies", body: "C-suite financial leadership without the full-time cost. We represent your company to investors, board, and auditors with complete authority and accountability." },
  { icon: ClipboardList, title: "Controllership & Compliance", body: "Month-end close, GAAP/IFRS compliance, intercompany eliminations, audit preparation, and continuous accounting oversight." },
  { icon: FolderArchive, title: "SEDAR+ & Regulatory Filing", body: "MD&A, AIF, financial statements, material change reports, and all SEDAR+ submissions — prepared accurately and filed on time, every time." },
  { icon: BarChart3, title: "Board & Investor Reporting", body: "Custom Power BI dashboards and board packages that give your directors and investors real-time financial visibility — built to institutional standards." },
  { icon: TrendingUp, title: "FP&A & Forecasting", body: "Annual budgets, quarterly forecasts, scenario modeling, and investor-ready financial projections that support capital raises and strategic decisions." },
  { icon: Cloud, title: "Accounting System Migration", body: "We modernize your entire finance stack — from legacy desktop software to cloud platforms. Parallel running, data migration, and zero operational disruption.", featured: true },
];

const phases = [
  { icon: Search, title: "Legacy System Audit", body: "Assess current platform, identify data quality issues, map workflows." },
  { icon: Package, title: "Data Export & Cleaning", body: "Extract all historical data, clean and validate before migration." },
  { icon: Cloud, title: "New Platform Setup", body: "Configure new accounting platform to match your chart of accounts and reporting needs." },
  { icon: RotateCw, title: "Parallel Running", body: "Run both systems simultaneously for 2–4 weeks to validate accuracy." },
  { icon: Check, title: "Full Cutover", body: "Discontinue legacy, provide team training, go fully paperless." },
];

const audiences = [
  { icon: TrendingUp, title: "Listed Companies", body: "Already trading on TSX-V, CSE, or NEO Exchange and need institutional-grade financial infrastructure? We integrate within days and immediately take ownership of your compliance calendar." },
  { icon: Rocket, title: "Pre-IPO & Going Public", body: "Preparing for your listing? We help you build the finance infrastructure auditors, regulators, and investors expect — before you ring the bell." },
  { icon: Handshake, title: "Post-M&A & Restructuring", body: "Acquired a company or just completed a reverse merger? We consolidate financial systems, establish controls, and ensure compliance from day one." },
];

const processSteps = [
  { day: "Day 0", title: "Discovery Call", body: "We review your current compliance status, filing history, and immediate priorities." },
  { day: "Day 7", title: "Paperwork Signed / Engagement Agreement", body: "Engagement letter executed, scope confirmed, and onboarding kicked off." },
  { day: "Days 8–20", title: "Team Integration", body: "Your 6ixFinance CFO joins your Slack, attends board calls, and takes ownership of the compliance calendar." },
  { day: "Week 4", title: "First Deliverables", body: "SEDAR+ calendar updated, first Power BI dashboard live, month-end close process documented." },
  { day: "Ongoing", title: "Monthly Cadence", body: "Monthly close, board packages, SEDAR+ filings, and strategic advisory — handled completely." },
];

const calendarItems = [
  { date: "Apr 30", label: "Annual Financials", critical: true },
  { date: "Apr 30", label: "AIF Filing", critical: true },
  { date: "May 29", label: "Q1 Financials" },
  { date: "Aug 29", label: "Q2 Financials" },
  { date: "Nov 29", label: "Q3 Financials" },
  { date: "Quarterly", label: "MD&A" },
  { date: "Quarterly", label: "NI 52-109 Certification" },
  { date: "Ongoing", label: "Material Change Reports" },
];

const Home = () => {
  return (
    <SiteLayout>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-hero min-h-screen pt-32 pb-0">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[55fr_45fr] gap-14 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full label-eyebrow text-teal border border-teal/30" style={{ background: "rgba(30,64,175,0.1)" }}>
                ✦ Financial Leadership for Public Companies
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display font-bold text-white mt-6 leading-[1.05] text-[40px] sm:text-[52px] lg:text-[68px]" style={{ letterSpacing: "-2px" }}>
                Institutional-Grade<br />
                Financial Leadership.<br />
                Built for Public <span className="text-gradient-teal">Companies.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[18px] text-muted-foreground max-w-[620px] leading-[1.75]">
                6ixFinance delivers fractional CFO, controllership, and regulatory reporting services purpose-built for TSX-V, CSE, and NEO-listed companies. We handle SEDAR+ filings, NI 52-109 compliance, and board-level reporting — so your leadership team can focus on growth, not paperwork.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-4 min-h-[48px] rounded-full bg-gradient-teal text-white font-semibold text-[15px] btn-glow transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 4px 20px rgba(30,64,175,0.35)" }}
                >
                  Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/services"
                  className="inline-flex items-center px-7 py-4 rounded-full border border-teal/40 text-teal font-semibold text-[15px] hover:bg-teal hover:text-white transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2">
                {trustStats.map((s, i) => (
                  <div key={i} className={`px-4 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}>
                    <div className="font-display text-teal font-bold text-[28px] leading-none">{s.num}</div>
                    <div className="text-[#64748B] text-[13px] mt-2">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <Reveal delay={0.2}>
            <div className="relative">
              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: -2 }}
                className="glass-card premium-shadow rounded-3xl p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1.5 rounded-full bg-teal/15 border border-teal/30 text-teal text-[11px] font-mono uppercase tracking-wider">Q4 Board Report</span>
                  <span className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" /> Live
                  </span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Revenue", val: "$12.4M", chg: "+18%", up: true },
                    { label: "EBITDA", val: "$2.1M", chg: "+24%", up: true },
                    { label: "Cash Position", val: "$4.8M", chg: "Stable", up: null },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                      <div>
                        <div className="text-[11px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
                        <div className="font-mono text-white text-[20px] font-semibold mt-1">{m.val}</div>
                      </div>
                      <div className={`text-[12px] font-mono ${m.up === true ? "text-emerald-400" : m.up === null ? "text-muted-foreground" : "text-red-400"}`}>
                        {m.up === true ? "↑" : m.up === null ? "→" : "↓"} {m.chg}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mini chart */}
                <div className="mt-5 flex items-end gap-1.5 h-20">
                  {[35, 50, 42, 60, 55, 72, 68, 85, 78, 92, 88, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "linear-gradient(180deg, #3B82F6, #1E3A8A)" }} />
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[12px]">
                  <span className="flex items-center gap-1.5 text-emerald-400"><Check className="w-3.5 h-3.5" /> SEDAR+ Filed</span>
                  <span className="flex items-center gap-1.5 text-emerald-400"><Check className="w-3.5 h-3.5" /> NI 52-109 Certified</span>
                </div>
              </motion.div>

              {/* Floating pills */}
              <div className="absolute -top-6 -left-6 float-pill px-4 py-2.5 rounded-full bg-gradient-teal text-white text-[12px] font-semibold shadow-xl">
                ↑ 24% EBITDA Growth
              </div>
              <div className="absolute -bottom-5 -right-4 float-pill-2 px-4 py-2.5 rounded-full bg-bg-card border border-teal/40 text-teal text-[12px] font-semibold shadow-xl">
                SEDAR+ Filed ✓
              </div>
              <div className="absolute top-1/2 -right-8 float-pill-3 px-4 py-2.5 rounded-full bg-gradient-gold text-[#1a1a1a] text-[12px] font-semibold shadow-xl">
                Board Report Ready
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Ticker />
        </div>
      </section>

      {/* SECTION 2 — TRUST EXCHANGES */}
      <section className="bg-bg-secondary py-16 border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="label-eyebrow text-muted-foreground">Serving companies listed on</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["TSX-V", "CSE", "NEO Exchange", "OTC Markets"].map((e) => (
                <span key={e} className="px-5 py-2.5 rounded-full border border-teal/30 text-white font-display font-semibold text-[14px] hover:bg-teal/10 transition-colors">
                  {e}
                </span>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground text-[14px]">
              Also supporting pre-IPO and going-public transactions
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3 — CHALLENGE (light) */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">The Public Company Challenge</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              Most Public Companies Struggle With Financial Infrastructure
            </h2>
            <p className="mt-5 text-[#4A5568] text-[17px] max-w-3xl leading-[1.75]">
              Being listed comes with obligations that most small public companies aren't equipped to handle internally. SEDAR+ deadlines, NI 52-109 certifications, quarterly MD&A, board reporting — all while trying to actually run and grow the business.
            </p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { e: "📋", t: "Regulatory Burden", b: "SEDAR+ filings, AIF, NI 52-109 CEO/CFO certifications — the compliance workload is relentless for small public companies without dedicated finance infrastructure." },
              { e: "💰", t: "Capital Efficiency", b: "Hiring a full-time CFO costs $200K+. For small-cap public companies, that's a significant burn. Fractional leadership delivers the same expertise at 20% of the cost." },
              { e: "📊", t: "Investor Expectations", b: "Public company investors expect institutional-grade reporting. Most small-cap finance teams simply aren't equipped to produce it consistently." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border-l-4 border-teal shadow-sm h-full">
                  <div className="text-3xl">{c.e}</div>
                  <h3 className="mt-3 font-display font-semibold text-[#0D1829] text-[22px]">{c.t}</h3>
                  <p className="mt-3 text-[#4A5568] text-[15px] leading-[1.7]">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES OVERVIEW (dark) */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.06 }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">What We Do</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              End-to-End Financial Infrastructure for <span className="text-gradient-teal">Public Companies</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`relative bg-gradient-card rounded-2xl p-8 border border-white/5 card-hover h-full ${s.featured ? "border-glow" : ""}`}>
                  {s.featured && (
                    <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-gold text-[#1a1a1a] text-[10px] font-semibold uppercase tracking-wider">Featured</span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-white text-[20px] leading-tight">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-[1.7]">{s.body}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-teal text-[14px] font-medium hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — MIGRATION FEATURE (white) */}
      <section className="bg-bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="label-eyebrow text-gold">Featured Service</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-1px" }}>
              Modernize Your Entire Finance Stack — Without the Risk
            </h2>
            <div className="mt-6 space-y-4 text-[#4A5568] text-[16px] leading-[1.8]">
              <p>Most small public companies are running their finances on legacy desktop software that creates inefficiency, errors, and audit risk. We identify the right modern platform for your business and execute a complete migration — with zero data loss and zero operational disruption.</p>
              <p>Our migration methodology runs both systems in parallel for a controlled test period. We validate every transaction, reconcile every account, and only discontinue the legacy system when we're 100% confident in the new platform.</p>
              <p>The result: a cloud-first finance infrastructure that gives your CFO, board, and auditors real-time access — from anywhere, on any device.</p>
            </div>
            <div className="mt-8 space-y-3">
              {phases.map((p, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-black/5 bg-bg-light">
                  <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center text-white shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-[#0D1829] text-[15px]">Phase {i + 1}: {p.title}</div>
                    <div className="text-[#4A5568] text-[14px]">{p.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-28 space-y-5">
              <div className="rounded-2xl p-7 border border-red-200" style={{ background: "linear-gradient(145deg, #FEF2F2, #FEE2E2)" }}>
                <h4 className="font-display font-bold text-[#991B1B] text-[18px] mb-4">Before</h4>
                <ul className="space-y-3 text-[#7F1D1D] text-[14px]">
                  {["Desktop accounting software", "Manual Excel consolidations", "Paper receipts and invoices", "No real-time visibility", "Audit prep takes weeks"].map((t) => (
                    <li key={t} className="flex items-start gap-2"><XCircle className="w-4 h-4 mt-0.5 text-red-500 shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-7 border border-teal/30" style={{ background: "linear-gradient(145deg, #ECFDF5, #D1FAE5)" }}>
                <h4 className="font-display font-bold text-[#065F46] text-[18px] mb-4">After</h4>
                <ul className="space-y-3 text-[#064E3B] text-[14px]">
                  {["Cloud-first platform", "Automated reconciliation", "Paperless document management", "Real-time board dashboards", "Audit-ready in 24 hours"].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
              <Link to="/accounting-migration" className="block text-center w-full px-6 py-4 rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5">
                Book a Migration Consultation →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — WHO WE SERVE (dark) */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Who We Serve</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              Purpose-Built for Small-Cap Public Companies
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-gradient-card rounded-2xl p-8 border border-white/5 card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal">
                    <a.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-white text-[20px]">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-[1.7]">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESS (light) */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Process</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              Embedding your business within 30 days
            </h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-teal/20 -translate-x-1/2" />
            <div className="space-y-8">
              {processSteps.map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "" : ""}`}>
                    <div className={`${i % 2 ? "md:order-2 md:text-left" : "md:text-right"}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-teal text-white text-[11px] font-mono font-semibold uppercase tracking-wider">{s.day}</span>
                      <h3 className="mt-3 font-display font-bold text-[#0D1829] text-[22px]">{s.title}</h3>
                      <p className="mt-2 text-[#4A5568] text-[15px] leading-[1.7]">{s.body}</p>
                    </div>
                    <div className="hidden md:flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-teal text-white font-display font-bold flex items-center justify-center shadow-lg ring-8 ring-bg-light">
                        {i + 1}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMPLIANCE CALENDAR (dark) */}
      <section className="bg-background py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Never Miss a Deadline</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-1px" }}>
              Public Company Compliance Calendar — <span className="text-gradient-teal">2025/2026</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calendarItems.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`bg-gradient-card rounded-2xl p-6 border ${it.critical ? "border-gold/40" : "border-white/5"} card-hover h-full`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold ${it.critical ? "bg-gradient-gold text-[#1a1a1a]" : "bg-teal/15 text-teal border border-teal/30"}`}>
                    {it.date}
                  </span>
                  <div className="mt-4 font-display font-semibold text-white text-[16px]">{it.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <p className="text-muted-foreground mb-5">We track every deadline for you.</p>
              <Link to="/resources" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5">
                <Download className="w-4 h-4" /> Download Full Compliance Calendar
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 9 — POWER BI SHOWCASE */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="label-eyebrow text-teal">Real-Time Reporting</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-1px" }}>
              Board-Ready Dashboards.<br /><span className="text-gradient-teal">Investor-Grade Reporting.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Real-time financial dashboards",
                "Quarterly board packages (PDF auto-gen)",
                "Investor relations reporting",
                "KPI scorecards with threshold alerts",
                "EBITDA bridge and waterfall charts",
                "Cash runway projections",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white text-[15px]">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-teal-bright shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card premium-shadow rounded-3xl p-7">
              <div className="flex items-center justify-between mb-5">
                <span className="text-white font-display font-semibold">Executive Dashboard</span>
                <span className="flex items-center gap-2 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" /> Live Data
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Revenue", v: "$12.4M" }, { l: "EBITDA", v: "$2.1M" },
                  { l: "Cash", v: "$4.8M" }, { l: "Share Price", v: "$0.42" },
                  { l: "Market Cap", v: "$48M" }, { l: "Burn Rate", v: "$320K" },
                ].map((m) => (
                  <div key={m.l} className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.l}</div>
                    <div className="font-mono text-white text-[18px] font-semibold mt-1">{m.v}</div>
                  </div>
                ))}
              </div>
              {/* Two mini line charts */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[0, 1].map((k) => (
                  <div key={k} className="bg-white/5 rounded-xl p-4 border border-white/5 h-24">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <defs>
                        <linearGradient id={`g${k}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d={k === 0 ? "M0,30 L20,25 L40,28 L60,15 L80,18 L100,8 L100,40 L0,40 Z" : "M0,25 L20,28 L40,20 L60,22 L80,12 L100,15 L100,40 L0,40 Z"} fill={`url(#g${k})`} />
                      <path d={k === 0 ? "M0,30 L20,25 L40,28 L60,15 L80,18 L100,8" : "M0,25 L20,28 L40,20 L60,22 L80,12 L100,15"} fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 10 — TESTIMONIALS (light) */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Client Results</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px]" style={{ letterSpacing: "-1px" }}>
              What Public Company Leaders Say
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 bg-white rounded-3xl p-10 border-l-[6px] border-[#0D1829] shadow-lg">
              <p className="text-[#1F2937] text-[20px] leading-[1.7] font-display">
                "6ixFinance transformed how our board views financial reporting. We went from manually compiling board packages in Excel — which took 2 weeks every quarter — to a live Power BI dashboard that updates in real time. Our SEDAR+ filings have been on time every quarter since we engaged them. Worth every penny."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-teal flex items-center justify-center text-white font-display font-bold">JR</div>
                <div>
                  <div className="font-display font-semibold text-[#0D1829]">James Richardson, CEO</div>
                  <div className="text-[#64748B] text-[14px]">TSX-V Listed Mining Company</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { quote: "They handled our going-public transition finance completely. From audit preparation to SEDAR+ setup — everything was done right the first time.", name: "Sarah Park, CFO", co: "CSE Listed Tech Company", initials: "SP" },
              { quote: "Our legacy accounting system migration was seamless. Zero data loss, parallel running for 3 weeks, and full cutover without a single day of disruption.", name: "Michael Chen, CEO", co: "NEO Listed Cannabis Company", initials: "MC" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-black/5 h-full">
                  <p className="text-[#1F2937] text-[16px] leading-[1.7]">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-teal text-white flex items-center justify-center font-display font-semibold text-[13px]">{t.initials}</div>
                    <div>
                      <div className="font-display font-semibold text-[#0D1829] text-[14px]">{t.name}</div>
                      <div className="text-[#64748B] text-[13px]">{t.co}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — STATS (dark) */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="orb orb-2" style={{ opacity: 0.05 }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { n: 50, suffix: "+", label: "Public Companies Served" },
            { n: 2, prefix: "$", suffix: "B+", label: "Capital Markets Transactions" },
            { n: 100, suffix: "%", label: "On-Time SEDAR+ Filing Rate" },
            { n: 8, suffix: "+", label: "Years of Public Company Experience" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="font-display font-bold text-gradient-teal text-[48px] lg:text-[64px] leading-none">
                <Counter to={s.n} prefix={s.prefix || ""} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[#64748B] text-[14px]">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 12 — FINAL CTA */}
      <section className="bg-gradient-teal py-24 text-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight" style={{ letterSpacing: "-1px" }}>
              Ready to Build Institutional-Grade Financial Infrastructure?
            </h2>
            <p className="mt-5 text-white/90 text-[18px] max-w-2xl mx-auto">
              Book a free 30-minute consultation. We'll review your current compliance status and show you exactly how we can help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 min-h-[48px] inline-flex items-center rounded-full bg-white text-[#0D1829] font-display font-bold text-[16px] hover:bg-gold-light hover:text-[#1a1a1a] transition-all hover:-translate-y-0.5 shadow-xl">
                Book a Free Consultation →
              </a>
              <Link to="/resources" className="px-8 py-4 rounded-full border-2 border-white/70 text-white font-semibold text-[15px] hover:bg-white/10 transition-all">
                Download Public Company CFO Guide
              </Link>
            </div>
            <p className="mt-8 text-white/80 text-[13px] flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Confidential · No obligation · Response within one business day
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Home;
