import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Calculator, RefreshCw, GitBranch, TrendingUp, Coins } from "lucide-react";

const services = [
  { icon: Calculator, title: "Annual Budget", body: "Bottom-up annual budget built with your leadership team — tied to your strategic plan and board-approved targets." },
  { icon: RefreshCw, title: "Rolling Quarterly Forecasts", body: "Updated every quarter based on actuals — so your board always has a current view of the year ahead." },
  { icon: GitBranch, title: "Scenario Modeling", body: "Best case, base case, worst case — financial models that stress-test your plan against market conditions." },
  { icon: TrendingUp, title: "Cash Flow Projections", body: "13-week rolling cash flow forecast — the most important number for any public company managing runway." },
  { icon: Coins, title: "Capital Raise Modeling", body: "Financial models built specifically for private placement, rights offering, or debt financing presentations." },
];

const boardItems = [
  { label: "P&L vs Budget", body: "Actuals vs plan with variance commentary" },
  { label: "Cash Position", body: "Current cash, runway, and 13-week forecast" },
  { label: "KPI Scorecard", body: "Operational metrics against targets" },
  { label: "Forward Outlook", body: "Updated forecast and scenarios" },
  { label: "Risks & Opportunities", body: "Material items requiring board attention" },
];

const FPA = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85"
      badge={{ label: "FP&A & Forecasting" }}
      title={<>FP&A, Budgeting & <span className="text-gradient-teal">Forecasting</span></>}
      subtitle="From annual budget to real-time scenario modeling for public company boards."
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "FP&A & Forecasting" }]} />
    </div>

    <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
      <div className="max-w-[980px] mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-teal text-[12px] font-semibold uppercase tracking-[3px]">FP&A</p>
          <h2 className="mt-3 font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
            From Annual Budget to Real-Time Scenario Modeling
          </h2>
          <div className="mt-8 space-y-6 text-[17px] text-white/75 leading-[1.8]">
            <p>For a public company, FP&A is more than budgeting. It's the discipline of telling your board, your auditors, and your investors a credible, consistent forward story — and updating it as facts change.</p>
            <p>We build the annual budget with your operators, then layer rolling quarterly forecasts on top. Every variance to plan is explained. Every scenario is modeled. Every cash projection is defensible. The output is what institutional investors expect: clarity on where the company is going and what it will cost to get there.</p>
            <p>For small-cap issuers managing runway, FP&A is also a survival tool. A 13-week cash forecast that updates weekly is the difference between a planned raise and an emergency one.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-24" style={{ background: "hsl(var(--bg-light))" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-bold text-[#0D1829] text-[34px] sm:text-[42px] text-center" style={{ letterSpacing: "-1px" }}>What's Included</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal hover:-translate-y-1 hover:shadow-xl transition-all h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "hsl(var(--teal) / 0.12)" }}>
                  <s.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-display font-bold text-[#0D1829] text-[19px] mb-2">{s.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{s.body}</p>
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
            What Your Board Sees <span className="text-gradient-teal">Every Quarter</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-4">
          {boardItems.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.06}>
              <div className="bg-card border border-white/8 rounded-2xl p-6 hover:border-teal/40 transition-colors h-full text-center">
                <div className="w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-4 font-display font-bold text-background" style={{ background: "hsl(var(--teal))" }}>{i + 1}</div>
                <h4 className="font-display font-bold text-white text-[15px] mb-2">{it.label}</h4>
                <p className="text-white/65 text-[13px] leading-[1.6]">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <CTASection title="Ready to Upgrade Your Forecasting?" subtitle="Get a board-grade FP&A function without hiring a VP Finance." />
  </SiteLayout>
);

export default FPA;
