import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, Search, Package, Cloud, RotateCw, Check, ArrowRight, Database } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProAdvisorBadge } from "@/components/ProAdvisorBadge";

const phases = [
  { icon: Search, title: "Legacy System Audit", time: "Week 1", body: "Full assessment of your current platform, data quality, integrations, and workflows. We document every gap and risk.", deliverables: ["Risk register", "Data quality report", "Workflow map", "Migration scope"] },
  { icon: Package, title: "Data Export & Cleaning", time: "Week 2", body: "Extract every transaction, reconcile every account, and clean the data before it touches the new platform.", deliverables: ["Master data clean", "GL extracts validated", "Subledger reconciliations", "Opening balance sheet"] },
  { icon: Cloud, title: "New Platform Setup", time: "Week 2-3", body: "Configure the new platform — chart of accounts, dimensions, automation rules, user roles, and integrations.", deliverables: ["COA redesign", "User roles configured", "Bank feeds live", "Integrations tested"] },
  { icon: RotateCw, title: "Parallel Running", time: "Week 3-5", body: "Both systems run side by side. We post identical transactions, reconcile daily, and validate every report.", deliverables: ["Daily reconciliations", "Variance reports", "Sign-off log", "Issue resolution"] },
  { icon: Check, title: "Full Cutover", time: "Week 6", body: "Discontinue the legacy system, train your team, and provide 90 days of post-migration support.", deliverables: ["Go-live", "Team training", "SOP documentation", "Hypercare support"] },
];

type Platform = {
  name: string;
  why?: string;
  proAdvisor?: boolean;
  sections?: { heading: string; body: string }[];
};

const platforms: Platform[] = [
  {
    name: "QuickBooks Online",
    proAdvisor: true,
    sections: [
      {
        heading: "Data Protection",
        body: "QuickBooks takes security seriously. You'll have peace of mind with advanced, industry-recognised security safeguards that keep your financial data private and protected.",
      },
      {
        heading: "See Your Whole Business",
        body: "QuickBooks Online simplifies how you track your business finances, so you can focus on the bigger picture. From money in, to money out, to managing your team, get a clear view of your business in one easy-to-use solution.",
      },
    ],
  },
  { name: "Sage Intacct", why: "Built for true multi-entity consolidation. The right step up when you outgrow QuickBooks Online." },
  { name: "NetSuite", why: "ERP-grade platform for growth-stage public companies needing full operational and financial integration." },
  { name: "MS Business Central", why: "Strong for Canadian companies on the Microsoft stack — pairs natively with Power BI." },
];

const MigrationPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=85"
        badge={{ label: "Featured Service", tone: "gold" }}
        title={<>Modernize Your Entire <span className="text-gradient-teal">Finance Stack</span></>}
        subtitle="From legacy desktop accounting to a cloud-first finance function — with zero data loss and zero operational disruption."
      />

      {/* Section 1 — Problem */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">The Problem</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              Legacy Software is Killing Your Audit Readiness
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { e: "🐌", t: "Slow & Manual", b: "Month-end close takes 3 weeks. Audit prep takes 6. Your team spends more time copy-pasting between systems than analyzing the business." },
              { e: "🚨", t: "Audit Risk", b: "Fragmented spreadsheets, no audit trail, manual reconciliations. Auditors raise findings. PCAOB-style controls are impossible to demonstrate." },
              { e: "📵", t: "No Real-Time Visibility", b: "Your CEO and board need numbers now. Legacy desktop systems require someone in the office, exporting data, building reports manually." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 border-l-4 border-red-400 shadow-sm h-full">
                  <div className="text-3xl">{c.e}</div>
                  <h3 className="mt-3 font-display font-semibold text-[#0D1829] text-[20px]">{c.t}</h3>
                  <p className="mt-3 text-[#4A5568] text-[15px] leading-[1.7]">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Solution / 5-phase */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.05 }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Methodology</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-1px" }}>
              The <span className="text-gradient-teal">5-Phase Migration</span> Framework
            </h2>
            <p className="mt-5 text-muted-foreground text-[17px] max-w-3xl">
              Built for public company controls. Validated on TSX-V, CSE, and NEO migrations. Zero failed cutovers.
            </p>
          </Reveal>
          <div className="mt-14 space-y-5">
            {phases.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-gradient-card rounded-2xl p-7 lg:p-9 border border-white/5 card-hover grid lg:grid-cols-[auto_1fr_1fr] gap-6 items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-teal flex items-center justify-center text-white shrink-0">
                      <p.icon className="w-7 h-7" />
                    </div>
                    <div className="lg:hidden">
                      <div className="font-mono text-[11px] text-teal uppercase tracking-wider">Phase {i + 1}</div>
                      <div className="font-display font-bold text-white text-[20px]">{p.title}</div>
                    </div>
                  </div>
                  <div>
                    <div className="hidden lg:block font-mono text-[11px] text-teal uppercase tracking-wider">Phase {i + 1} · {p.time}</div>
                    <h3 className="hidden lg:block font-display font-bold text-white text-[22px] mt-1">{p.title}</h3>
                    <p className="lg:mt-2 text-muted-foreground text-[15px] leading-[1.7]">{p.body}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-white/90 text-[13px]">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Platforms (light) */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Cloud Platforms We Migrate To</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px] lg:text-[44px] leading-tight max-w-3xl" style={{ letterSpacing: "-1px" }}>
              The Right Platform for Where You're Going
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-black/5 shadow-sm h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center text-white">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-[#0D1829] text-[20px]">{p.name}</h3>
                  {p.why && <p className="mt-3 text-[#4A5568] text-[14px] leading-[1.7]">{p.why}</p>}
                  {p.sections && (
                    <div className="mt-4 space-y-4">
                      {p.sections.map((s) => (
                        <div key={s.heading}>
                          <h4 className="font-display font-semibold text-[#0D1829] text-[15px]">{s.heading}</h4>
                          <p className="mt-1.5 text-[#4A5568] text-[14px] leading-[1.7]">{s.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {p.proAdvisor && (
                    <div className="mt-6 pt-5 border-t border-black/5">
                      <ProAdvisorBadge />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Paperless before/after (dark) */}
      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">What Paperless Looks Like</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-1px" }}>
              From Manual & Risky to <span className="text-gradient-teal">Automated & Audit-Ready</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl p-8 border border-red-400/30" style={{ background: "linear-gradient(145deg, rgba(127,29,29,0.25), rgba(60,15,15,0.25))" }}>
                <h3 className="font-display font-bold text-red-300 text-[22px] mb-5">Before</h3>
                <ul className="space-y-3">
                  {["Desktop accounting software (single PC)", "Manual Excel consolidations", "Paper receipts and invoices", "No real-time visibility", "Audit prep takes weeks", "Manual journal entries", "Email-based approvals", "No version control"].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-white/85 text-[14px]"><XCircle className="w-4 h-4 mt-0.5 text-red-400 shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl p-8 border border-teal/40" style={{ background: "linear-gradient(145deg, rgba(30,64,175,0.12), rgba(30,58,138,0.08))" }}>
                <h3 className="font-display font-bold text-teal-bright text-[22px] mb-5">After</h3>
                <ul className="space-y-3">
                  {["Cloud-first platform (any device, any location)", "Automated reconciliation & consolidations", "Paperless document management", "Real-time board dashboards", "Audit-ready in 24 hours", "Rules-based journal automation", "Workflow approvals with audit trail", "Full version control & change logs"].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-white/95 text-[14px]"><CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-bright shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5 — Case study preview */}
      <section className="bg-background py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="bg-gradient-card rounded-3xl p-10 lg:p-14 border border-teal/20 border-glow">
              <p className="label-eyebrow text-teal">Case Study Preview</p>
              <h2 className="mt-3 font-display font-bold text-white text-[28px] sm:text-[36px] leading-tight" style={{ letterSpacing: "-1px" }}>
                How We Migrated a TSX-V Mining Company from Legacy Desktop to Full Cloud in 6 Weeks — With Zero Data Loss
              </h2>
              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {[
                  { n: "6 weeks", l: "End-to-end migration" },
                  { n: "0", l: "Days of disruption" },
                  { n: "$180K", l: "Annual savings post-migration" },
                ].map((s) => (
                  <div key={s.l} className="bg-white/5 rounded-xl p-5 border border-white/5">
                    <div className="font-display font-bold text-gradient-teal text-[28px]">{s.n}</div>
                    <div className="text-muted-foreground text-[13px] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-teal text-white font-semibold btn-glow transition-all hover:-translate-y-0.5">
                Book a Migration Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default MigrationPage;
