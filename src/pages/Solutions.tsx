import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Shuffle, Building2, Globe } from "lucide-react";

const solutions = [
  { icon: Rocket, title: "Going Public (IPO / RTO)", body: "Pre-listing CFO support: financial statement preparation, audit coordination, prospectus financials, listing application financials, and post-listing readiness.", outcomes: ["3-year audited financials", "Prospectus support", "Day-one SEDAR+ readiness"] },
  { icon: Shuffle, title: "Post-Reverse-Merger Integration", body: "You closed the deal — now you have a public shell with operating subsidiary financials. We integrate, consolidate, and stand up your reporting function.", outcomes: ["Opening balance sheet", "Consolidated reporting", "Auditor onboarding"] },
  { icon: Building2, title: "Listed & Stretched Thin", body: "You're already listed but quarterly SEDAR+ obligations are crushing your team. We embed and run the function so your finance team can focus on the business.", outcomes: ["On-time filings", "Audit-ready books", "Board-grade reporting"] },
  { icon: Globe, title: "Cross-Listed / US-Canadian", body: "Dual-listed issuers face two regulatory regimes. We handle SEDAR+ alongside SEC reporting requirements, IFRS-to-US-GAAP reconciliation, and dual-tracked filings.", outcomes: ["SEDAR+ + EDGAR", "IFRS / US GAAP", "Dual audit support"] },
];

const Solutions = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1400&q=85"
      badge={{ label: "Solutions" }}
      title={<>Solutions for <span className="text-gradient-teal">Every Stage</span> of Public Company Life</>}
      subtitle="Whether you're going public, just closed an RTO, or running long, we have a playbook for your stage."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Solutions" }]} />
    </div>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="bg-card border border-white/8 rounded-2xl p-8 hover:border-teal/40 hover:-translate-y-1 transition-all h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <s.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-white text-[22px] mb-3">{s.title}</h3>
                <p className="text-white/70 text-[15px] leading-relaxed mb-5">{s.body}</p>
                <ul className="space-y-2">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-white/85 text-[14px]">
                      <span className="text-teal mt-0.5">→</span> {o}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-teal-bright font-semibold text-[14px] group">
                  Discuss this solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>One Engagement Model. Three Service Lines.</h2>
          <p className="mt-4 text-slate-600 text-[17px] max-w-2xl mx-auto">Fractional CFO leadership, Controllership, and Regulatory Reporting — under one team, one engagement, one accountable partner.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: "Fractional CFO", to: "/services/fractional-cfo" },
              { t: "Controllership", to: "/services/controllership" },
              { t: "Regulatory Reporting", to: "/services/regulatory-reporting" },
            ].map((it) => (
              <Link key={it.t} to={it.to} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-teal hover:shadow-lg transition-all flex items-center justify-between">
                <span className="font-display font-bold text-[#0D1829]">{it.t}</span>
                <ArrowRight className="w-5 h-5 text-teal" />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <CTASection title="Find Your Solution" subtitle="A 30-minute call will tell us which playbook is right for you." />
  </SiteLayout>
);

export default Solutions;
