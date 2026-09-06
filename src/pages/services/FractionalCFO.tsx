import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Check, X } from "lucide-react";

const deliverables = [
  { icon: "📋", title: "NI 52-109 Certifications", body: "Preparation and support for quarterly and annual CEO/CFO certifications required under National Instrument 52-109." },
  { icon: "📊", title: "MD&A Preparation", body: "Complete Management Discussion & Analysis drafting for quarterly and annual SEDAR+ filings — written to institutional standard." },
  { icon: "🤝", title: "Audit Committee Support", body: "Attendance at audit committee meetings, preparation of materials, and liaison between management and external auditors." },
  { icon: "📈", title: "Investor Relations Support", body: "Financial narrative for investor decks, press releases, and one-on-one investor meetings — ensuring consistent messaging." },
  { icon: "💰", title: "Capital Allocation Advisory", body: "Strategic guidance on treasury management, capital deployment, and financing decisions to maximize shareholder value." },
  { icon: "🔍", title: "M&A Financial Due Diligence", body: "Complete financial analysis for acquisition targets, reverse mergers, and strategic transactions — protecting your interests." },
  { icon: "📅", title: "Compliance Calendar Management", body: "Ownership of your complete regulatory calendar — SEDAR+ deadlines, AGM preparation, continuous disclosure." },
  { icon: "🎯", title: "Strategic Financial Planning", body: "Annual budget, quarterly forecasts, and scenario modeling aligned with your company's growth strategy." },
];

const compareRows = [
  ["Annual Salary", "$220,000+", "—"],
  ["Benefits (25%)", "$55,000", "Included"],
  ["Signing Bonus", "$30,000", "None"],
  ["Recruiting Fees", "$44,000", "None"],
  ["Training & Dev", "$10,000", "Included"],
];

const profiles = [
  { title: "Listed but stretched thin", body: "You're listed but your internal finance team can't handle quarterly SEDAR+ obligations.", checks: ["Quarterly filings overdue", "MD&A quality concerns", "Audit committee gaps"] },
  { title: "Going public", body: "You're going public and need CFO-level expertise to prepare your finance function for listing.", checks: ["Pre-IPO readiness", "Auditor coordination", "Listing application support"] },
  { title: "Post-transaction", body: "You just completed a reverse merger or acquisition and need immediate CFO leadership.", checks: ["Day-one CFO presence", "Integration accounting", "Investor narrative"] },
];

const FractionalCFO = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=85"
      badge={{ label: "Fractional CFO" }}
      title={<>Fractional CFO Services for <span className="text-gradient-teal">Public Companies</span></>}
      subtitle="C-suite financial leadership for TSX-V, CSE, and NEO-listed issuers — at a fraction of full-time cost."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Fractional CFO" }]} />
    </div>

    {/* Section 1 */}
    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="label-eyebrow text-teal text-[12px] font-semibold uppercase tracking-[3px]">WHAT IS A FRACTIONAL CFO</p>
          <h2 className="mt-3 font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
            C-Suite Financial Leadership Without the Full-Time Cost
          </h2>
          <div className="mt-8 space-y-6 text-[17px] text-white/75 leading-[1.8]">
            <p>A public company CFO carries extraordinary responsibility — NI 52-109 CEO/CFO certifications, MD&A sign-off, audit committee participation, investor relations financial support, and board-level strategic guidance. Our fractional CFOs have held these responsibilities for multiple listed companies simultaneously and fully understand the weight of the role.</p>
            <p>We embed directly into your leadership team — attending board calls, representing your company to auditors, regulators, and investors, and building the financial narrative that capital markets need. Unlike a consultant who delivers a report and disappears, we're accountable to the same deadlines and outcomes as a full-time hire.</p>
            <p>For small-cap TSX-V, CSE, and NEO-listed companies, a full-time CFO costs $200,000–$280,000 annually in salary alone. 6ixFinance delivers the same expertise at 20–30% of that cost — with the added benefit of a team behind every engagement.</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Section 2 — light */}
    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] leading-[1.1] text-center" style={{ letterSpacing: "-1px" }}>
            What Your Fractional CFO Handles Every Month
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-display font-bold text-[#0D1829] text-[18px] mb-2">{d.title}</h3>
                <p className="text-slate-600 text-[14px] leading-[1.65]">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Section 3 — comparison */}
    <section className="py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-white text-[34px] sm:text-[42px] leading-[1.1] text-center" style={{ letterSpacing: "-1px" }}>
            Full-Time CFO vs 6ixFinance Fractional — <span className="text-gradient-teal">The Real Cost</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-5 text-white/70 font-display text-[13px] uppercase tracking-wider">Cost Item</th>
                  <th className="px-6 py-5 font-display text-[13px] uppercase tracking-wider" style={{ background: "rgba(220,38,38,0.12)", color: "#fca5a5" }}>Full-Time CFO</th>
                  <th className="px-6 py-5 font-display text-[13px] uppercase tracking-wider" style={{ background: "hsl(var(--teal) / 0.15)", color: "hsl(var(--teal-bright))" }}>6ixFinance</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r) => (
                  <tr key={r[0]} className="border-t border-white/5">
                    <td className="px-6 py-4 text-white/80">{r[0]}</td>
                    <td className="px-6 py-4 text-white/90" style={{ background: "rgba(220,38,38,0.06)" }}>{r[1]}</td>
                    <td className="px-6 py-4 text-white font-medium" style={{ background: "hsl(var(--teal) / 0.08)" }}>{r[2]}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-white/20">
                  <td className="px-6 py-5 text-white font-display font-bold text-[18px]">Total Year 1</td>
                  <td className="px-6 py-5 font-display font-bold text-[20px]" style={{ background: "rgba(220,38,38,0.15)", color: "#fca5a5" }}>$359,000+</td>
                  <td className="px-6 py-5 font-display font-bold text-[20px]" style={{ background: "hsl(var(--teal) / 0.18)", color: "hsl(var(--teal-bright))" }}>$66K–$144K</td>
                </tr>
                <tr className="border-t border-white/10 bg-gradient-to-r from-transparent via-teal/5 to-transparent">
                  <td className="px-6 py-5 text-white font-display font-bold">You Save</td>
                  <td className="px-6 py-5 text-white/40">—</td>
                  <td className="px-6 py-5 font-display font-bold text-[22px] text-gradient-teal">Up to $293,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-white/70 text-[16px] italic">Plus you get a team — not a single hire who may leave in 18 months.</p>
        </Reveal>
      </div>
    </section>

    {/* Section 4 — profiles */}
    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>
            Is a Fractional CFO Right for Your Company?
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <Check className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-[#0D1829] text-[20px] mb-3">{p.title}</h3>
                <p className="text-slate-600 text-[15px] mb-5 leading-relaxed">{p.body}</p>
                <ul className="space-y-2.5">
                  {p.checks.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-slate-700 text-[14px]">
                      <Check className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection
      title="Ready to Discuss Your CFO Requirements?"
      subtitle="A 30-minute consultation will tell us — and you — whether we're the right fit."
      secondaryLabel="Download Public Company CFO Guide"
      secondaryTo="/resources/compliance-guides"
    />
  </SiteLayout>
);

export default FractionalCFO;
