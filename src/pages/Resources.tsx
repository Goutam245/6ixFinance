import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lock, Calculator, ArrowRight, Calendar, FileText } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/links";

const articles = [
  { title: "NI 52-109: A Plain-Language Guide for Small-Cap CEOs and CFOs", cat: "Compliance", read: "8 min", date: "Apr 18, 2026", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80", excerpt: "What CEO/CFO certifications actually require — and how small-cap public company leaders can sign with confidence." },
  { title: "SEDAR+ vs SEDAR: What Changed and What Public Companies Must Do Now", cat: "Regulatory", read: "6 min", date: "Apr 5, 2026", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80", excerpt: "The transition from SEDAR to SEDAR+ wasn't just a UI refresh. Here's the operational impact for issuers." },
  { title: "How Much Does a Fractional CFO Cost for a TSX-V Listed Company?", cat: "Cost", read: "5 min", date: "Mar 22, 2026", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80", excerpt: "Realistic pricing benchmarks across early-stage and growth-stage TSX-V issuers — and what's included at each tier." },
  { title: "The Public Company Finance Checklist: Listing Day to First Annual Filing", cat: "Playbook", read: "10 min", date: "Mar 8, 2026", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80", excerpt: "Every milestone, every deliverable, every deadline in your first 12 months as a public company." },
  { title: "Accounting System Migration for Public Companies: A Risk Management Guide", cat: "Migration", read: "9 min", date: "Feb 19, 2026", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80", excerpt: "How to plan, execute, and validate a finance system migration without putting your continuous disclosure at risk." },
  { title: "Power BI for Public Company Board Reporting: A Complete Setup Guide", cat: "Reporting", read: "12 min", date: "Feb 2, 2026", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=900&q=80", excerpt: "Architecture, data modeling, and dashboard design for institutional-grade board packages." },
];

const guides = [
  { title: "Public Company CFO Guide: Compliance Calendar 2025/26", desc: "Every TSX-V / CSE / NEO deadline in one downloadable PDF." },
  { title: "NI 52-109 Certification Checklist", desc: "Step-by-step CEO/CFO certification readiness checklist." },
  { title: "SEDAR+ Filing Guide for Small-Cap Companies", desc: "Submission walkthrough, common errors, and remediation." },
  { title: "Accounting Migration Playbook for Public Companies", desc: "Our complete 5-phase methodology, including templates." },
];

const calendarDates = [
  { date: "Apr 30", label: "Annual Financials & MD&A", critical: true },
  { date: "Apr 30", label: "AIF Filing", critical: true },
  { date: "May 29", label: "Q1 Interim Financials" },
  { date: "May 29", label: "Q1 MD&A" },
  { date: "Aug 29", label: "Q2 Interim Financials" },
  { date: "Aug 29", label: "Q2 MD&A" },
  { date: "Nov 29", label: "Q3 Interim Financials" },
  { date: "Nov 29", label: "Q3 MD&A" },
];

const faqs = [
  { q: "What does a fractional CFO do for a public company?", a: "Same scope as a full-time CFO — NI 52-109 certifications, MD&A sign-off, audit committee, board reporting, investor relations support, capital allocation — at 20–30% of the cost." },
  { q: "Can you sign NI 52-109 certifications?", a: "Yes. Our fractional CFOs hold the role for purposes of NI 52-109 and sign the certifications when engaged in that capacity." },
  { q: "How do you handle SEDAR+ filings?", a: "End-to-end. We prepare every document, coordinate with auditors and counsel, and submit through SEDAR+ on your behalf — on time, every time." },
  { q: "What exchanges do you have experience with?", a: "TSX-V, CSE, NEO Exchange, and selected OTC issuers. We also support pre-IPO and going-public transactions." },
  { q: "How quickly can you start?", a: "We can be embedded in your business within 7 days — Discovery on Day 1, Blueprint by Day 3, integration by Day 5." },
  { q: "What does accounting migration involve?", a: "Our 5-phase methodology: audit, extract & clean, configure, parallel-run for 2–4 weeks, then full cutover. Zero data loss, zero downtime." },
  { q: "Do you work with our auditors?", a: "Always. We act as the financial counterpart to your audit team, providing PBC schedules, working papers, and direct technical resolution." },
  { q: "What if we're going public soon?", a: "We help you build the finance infrastructure auditors and regulators expect — chart of accounts, controls, reporting, and continuous disclosure readiness." },
  { q: "Do you attend board meetings?", a: "Yes. Your fractional CFO attends board and audit committee meetings, presents the financial section, and answers questions." },
  { q: "What's your minimum engagement?", a: "Our standard engagement is 6 months minimum. Most clients stay multi-year." },
  { q: "How are you different from a consulting firm?", a: "Consultants deliver reports and leave. We're accountable to the same deadlines, certifications, and outcomes as a full-time CFO." },
  { q: "Do you work with US-listed companies?", a: "We support cross-listed and dual-listed issuers, and Canadian issuers preparing for US listings. SEC-registered issuers are case-by-case." },
];

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full py-5 flex items-center justify-between text-left gap-6">
        <span className="font-display font-semibold text-white text-[16px]">{q}</span>
        <ChevronDown className={`w-5 h-5 text-teal shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground text-[15px] leading-[1.7]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResourcesPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85"
        eyebrow="Knowledge Base"
        title={<>Public Company <span className="text-gradient-teal">Finance Resources</span></>}
        subtitle="Guides, calculators, and insights for TSX-V, CSE, and NEO-listed companies."
      />

      {/* Blog section removed */}

      {/* Guides — gated */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Compliance Guides</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Free Downloads (Email-Gated)
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {guides.map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm flex gap-5 items-start hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center text-white shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-[#0D1829] text-[18px]">{g.title}</h3>
                    <p className="mt-2 text-[#4A5568] text-[14px]">{g.desc}</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-teal font-semibold text-[14px] hover:gap-3 transition-all">
                      <Lock className="w-4 h-4" /> Get the Guide
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="bg-background py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Cost Comparison</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Fractional CFO vs Full-Time CFO
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-gradient-card rounded-2xl p-8 border border-white/5 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <Calculator className="w-6 h-6 text-red-400" />
                  <h3 className="font-display font-bold text-white text-[20px]">Full-Time CFO</h3>
                </div>
                <ul className="space-y-3 text-[15px]">
                  {[
                    ["Salary", "$220,000"],
                    ["Benefits (25%)", "$55,000"],
                    ["Signing bonus", "$30,000"],
                    ["Recruiting", "$44,000"],
                    ["Training", "$10,000"],
                  ].map(([l, v]) => (
                    <li key={l} className="flex justify-between text-white/85 border-b border-white/5 pb-2"><span>{l}</span><span className="font-mono">{v}</span></li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-red-400/30 flex justify-between items-center">
                  <span className="font-display font-semibold text-white">Total / year</span>
                  <span className="font-mono font-bold text-red-400 text-[24px]">$359,000</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-8 border border-teal/40 h-full" style={{ background: "linear-gradient(145deg, rgba(30,64,175,0.12), rgba(30,58,138,0.06))" }}>
                <div className="flex items-center gap-3 mb-5">
                  <Calculator className="w-6 h-6 text-teal-bright" />
                  <h3 className="font-display font-bold text-white text-[20px]">6ixFinance Fractional</h3>
                </div>
                <ul className="space-y-3 text-[15px]">
                  {[
                    ["Monthly retainer", "$5,500–$12,000"],
                    ["Benefits", "Included"],
                    ["Signing bonus", "$0"],
                    ["Recruiting", "$0"],
                    ["Training", "Included"],
                  ].map(([l, v]) => (
                    <li key={l} className="flex justify-between text-white/85 border-b border-white/5 pb-2"><span>{l}</span><span className="font-mono">{v}</span></li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-teal/40 flex justify-between items-center">
                  <span className="font-display font-semibold text-white">Total / year</span>
                  <span className="font-mono font-bold text-teal-bright text-[24px]">$66K–$144K</span>
                </div>
                <div className="mt-5 text-center bg-gradient-teal rounded-xl py-3 text-white font-display font-bold">
                  You save up to $293,000/year
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 min-h-[48px] rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5">
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filing Calendar */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">SEDAR+ Filing Calendar</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              2025 / 2026 Key Deadlines
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calendarDates.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`bg-gradient-card rounded-2xl p-6 border ${it.critical ? "border-gold/40" : "border-white/5"} card-hover h-full`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className={`w-4 h-4 ${it.critical ? "text-gold" : "text-teal"}`} />
                    <span className={`text-[11px] font-mono uppercase tracking-wider ${it.critical ? "text-gold" : "text-teal"}`}>{it.date}</span>
                  </div>
                  <div className="font-display font-semibold text-white text-[15px]">{it.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Frequently Asked Questions</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Everything You Need to Know
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 bg-gradient-card rounded-2xl p-6 lg:p-10 border border-white/5">
              {faqs.map((f, i) => <FAQ key={i} {...f} />)}
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ResourcesPage;
