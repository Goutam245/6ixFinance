import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { FileText, FileSpreadsheet, BookOpen, FileCheck, AlertTriangle, ShieldCheck, Building2, Eye } from "lucide-react";

const filings = [
  { icon: FileSpreadsheet, title: "Quarterly Financial Statements", body: "Q1, Q2, Q3 — filed within 45 days of quarter-end for TSX-V issuers." },
  { icon: FileText, title: "Annual Financial Statements", body: "Year-end financials filed within 90 days with MD&A and AIF." },
  { icon: BookOpen, title: "MD&A (Management Discussion)", body: "Quarterly and annual — written to institutional standard, SEDAR+ compliant." },
  { icon: FileCheck, title: "Annual Information Form (AIF)", body: "Complete AIF preparation and filing for applicable issuers." },
  { icon: AlertTriangle, title: "Material Change Reports", body: "Same-day filing support for material changes requiring immediate SEDAR+ disclosure." },
  { icon: ShieldCheck, title: "NI 52-109 Certifications", body: "CEO/CFO certification support — quarterly and annual." },
  { icon: Building2, title: "Business Acquisition Reports", body: "BAR preparation for significant acquisitions (>25% threshold)." },
  { icon: Eye, title: "Continuous Disclosure", body: "Ongoing monitoring and filing for all continuous disclosure obligations." },
];

const calendar = [
  { q: "Q1 (March 31 YE)", date: "April 30", item: "Annual Financials + MD&A + AIF", critical: true },
  { q: "Q1 Quarter", date: "May 29", item: "Q1 Financials + MD&A", critical: false },
  { q: "Q2 Quarter", date: "August 29", item: "Q2 Financials + MD&A", critical: false },
  { q: "Q3 Quarter", date: "November 29", item: "Q3 Financials + MD&A", critical: false },
];

const exchanges = [
  { name: "TSX-V", q: "45 days", a: "120 days", aif: "Required if listed > 1 yr", review: "Tier-based" },
  { name: "CSE", q: "60 days", a: "120 days", aif: "Optional", review: "Self-regulated" },
  { name: "NEO (Cboe)", q: "45 days", a: "90 days", aif: "Required (most issuers)", review: "Senior tier" },
];

const RegulatoryReporting = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85"
      badge={{ label: "Regulatory Reporting" }}
      title={<>SEDAR+ Regulatory Reporting & <span className="text-gradient-teal">Compliance</span></>}
      subtitle="Every filing, every deadline, every certification — handled to institutional standard."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Regulatory Reporting" }]} />
    </div>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-teal text-[12px] font-semibold uppercase tracking-[3px]">SEDAR+</p>
          <h2 className="mt-3 font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
            Never Miss a SEDAR+ Deadline Again
          </h2>
          <div className="mt-8 space-y-6 text-[17px] text-white/75 leading-[1.8]">
            <p>SEDAR+ is unforgiving. Late filings result in cease-trade orders, management cease-trade orders against your CEO and CFO personally, default-issuer status, and the kind of headlines that destroy institutional confidence overnight.</p>
            <p>The continuous disclosure regime requires constant attention — quarterly and annual financial statements, MD&A, AIF, material change reports filed within 10 days, NI 52-109 certifications, and a long list of less obvious obligations that catch small-cap issuers off guard.</p>
            <p>6ixFinance owns your SEDAR+ calendar end to end. We prepare every document, coordinate with your auditors and securities counsel, and file on time — every quarter, every year, without exception.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>All SEDAR+ Filings — Handled</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filings.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <f.icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-display font-bold text-[#0D1829] text-[16px] mb-2">{f.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-white text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>
            2025/2026 <span className="text-gradient-teal">Compliance Calendar</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {calendar.map((c, i) => (
            <Reveal key={c.q} delay={i * 0.05}>
              <div className="rounded-2xl p-6 border flex items-center gap-5" style={{ background: "hsl(var(--bg-card))", borderColor: c.critical ? "rgba(220,38,38,0.4)" : "rgba(255,255,255,0.08)" }}>
                <div className="w-20 flex-shrink-0 text-center">
                  <div className={`text-[11px] font-semibold ${c.critical ? "text-red-400" : "text-yellow-400"}`}>{c.critical ? "🔴 CRITICAL" : "🟡 QUARTERLY"}</div>
                  <div className="font-display font-bold text-teal text-[20px] mt-1">{c.date}</div>
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-white text-[16px]">{c.q}</div>
                  <div className="text-white/70 text-[14px] mt-1">{c.item}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-white/60 text-[14px]">Want the full calendar?</p>
            <a href="/resources/sedar-calendar" className="mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-teal text-white font-semibold">Download SEDAR+ Calendar</a>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-white text-[32px] sm:text-[40px] text-center" style={{ letterSpacing: "-1px" }}>Exchange-Specific Rules</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-white/70 font-display text-[12px] uppercase tracking-wider">Exchange</th>
                  <th className="px-6 py-4 text-white/70 font-display text-[12px] uppercase tracking-wider">Quarterly</th>
                  <th className="px-6 py-4 text-white/70 font-display text-[12px] uppercase tracking-wider">Annual</th>
                  <th className="px-6 py-4 text-white/70 font-display text-[12px] uppercase tracking-wider">AIF</th>
                  <th className="px-6 py-4 text-white/70 font-display text-[12px] uppercase tracking-wider">Review</th>
                </tr>
              </thead>
              <tbody>
                {exchanges.map((e) => (
                  <tr key={e.name} className="border-t border-white/5">
                    <td className="px-6 py-4 font-display font-bold text-teal-bright">{e.name}</td>
                    <td className="px-6 py-4 text-white/85">{e.q}</td>
                    <td className="px-6 py-4 text-white/85">{e.a}</td>
                    <td className="px-6 py-4 text-white/85">{e.aif}</td>
                    <td className="px-6 py-4 text-white/85">{e.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Get Your SEDAR+ Filings Off Your Plate" subtitle="One conversation. We'll map your full filing calendar and quote you on the spot." />
  </SiteLayout>
);

export default RegulatoryReporting;
