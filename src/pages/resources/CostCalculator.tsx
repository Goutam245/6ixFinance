import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ROLES = [
  { id: "cfo", label: "CFO", salary: 220000 },
  { id: "controller", label: "Controller", salary: 120000 },
  { id: "analyst", label: "Financial Analyst", salary: 80000 },
  { id: "bookkeeper", label: "Bookkeeper", salary: 55000 },
];
const SERVICES = [
  { id: "close", label: "Monthly close & controllership", monthly: 4000 },
  { id: "sedar", label: "SEDAR+ / Regulatory filing", monthly: 3500 },
  { id: "bi", label: "Board reporting (Power BI)", monthly: 2500 },
  { id: "fpa", label: "FP&A & forecasting", monthly: 2000 },
  { id: "migration", label: "Accounting system migration", monthly: 1500 },
];
const STAGES = ["Currently listed (TSX-V/CSE/NEO)", "Going public in 6–12 months", "Post-transaction / restructuring"];

const useCount = (target: number, on: boolean) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!on) { setV(0); return; }
    let r = 0; const start = performance.now(); const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) r = requestAnimationFrame(tick);
    };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [target, on]);
  return v;
};

const CostCalculator = () => {
  const [roles, setRoles] = useState<string[]>(["cfo"]);
  const [services, setServices] = useState<string[]>(["close", "sedar"]);
  const [stage, setStage] = useState(STAGES[0]);

  const fullTime = useMemo(() => {
    const salary = roles.reduce((s, id) => s + (ROLES.find((r) => r.id === id)?.salary || 0), 0);
    const benefits = Math.round(salary * 0.25);
    const recruiting = roles.length ? 44000 : 0;
    const training = roles.length ? 10000 : 0;
    return { salary, benefits, recruiting, training, total: salary + benefits + recruiting + training };
  }, [roles]);

  const fractional = useMemo(() => {
    const monthly = services.reduce((s, id) => s + (SERVICES.find((x) => x.id === id)?.monthly || 0), 0);
    const monthlyMin = Math.max(5500, monthly);
    const annualMin = monthlyMin * 12;
    const annualMax = Math.round(annualMin * 1.5);
    return { monthlyMin, annualMin, annualMax };
  }, [services]);

  const savings = Math.max(0, fullTime.total - fractional.annualMin);
  const showResults = roles.length > 0 && services.length > 0;
  const animated = useCount(savings, showResults);

  const toggle = (arr: string[], setArr: (s: string[]) => void, id: string) => setArr(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]);
  const fmt = (n: number) => "$" + n.toLocaleString();

  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85"
        badge={{ label: "Cost Calculator" }}
        title={<>Compare: Fractional CFO vs <span className="text-gradient-teal">Full-Time CFO</span></>}
        subtitle="See exactly how much you save with 6ixFinance vs hiring in-house."
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Cost Calculator" }]} />
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-teal text-[12px] uppercase tracking-[3px]">Step 1</h3>
                <h4 className="font-display font-bold text-white text-[22px] mt-1">What roles do you need?</h4>
                <div className="mt-4 space-y-2">
                  {ROLES.map((r) => (
                    <label key={r.id} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-white/8 cursor-pointer hover:border-teal/40">
                      <input type="checkbox" checked={roles.includes(r.id)} onChange={() => toggle(roles, setRoles, r.id)} className="accent-teal w-4 h-4" />
                      <span className="text-white flex-1">{r.label}</span>
                      <span className="text-white/50 text-[13px] font-mono">{fmt(r.salary)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-teal text-[12px] uppercase tracking-[3px]">Step 2</h3>
                <h4 className="font-display font-bold text-white text-[22px] mt-1">Services needed</h4>
                <div className="mt-4 space-y-2">
                  {SERVICES.map((s) => (
                    <label key={s.id} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-white/8 cursor-pointer hover:border-teal/40">
                      <input type="checkbox" checked={services.includes(s.id)} onChange={() => toggle(services, setServices, s.id)} className="accent-teal w-4 h-4" />
                      <span className="text-white flex-1">{s.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-teal text-[12px] uppercase tracking-[3px]">Step 3</h3>
                <h4 className="font-display font-bold text-white text-[22px] mt-1">Company stage</h4>
                <div className="mt-4 space-y-2">
                  {STAGES.map((s) => (
                    <label key={s} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-white/8 cursor-pointer hover:border-teal/40">
                      <input type="radio" name="stage" checked={stage === s} onChange={() => setStage(s)} className="accent-teal w-4 h-4" />
                      <span className="text-white flex-1 text-[15px]">{s}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl p-7 border" style={{ background: "rgba(220,38,38,0.06)", borderColor: "rgba(220,38,38,0.25)" }}>
                <h4 className="font-display font-bold text-[#fca5a5] text-[18px] mb-4">Full-Time Hire</h4>
                <div className="space-y-2 text-[14px] text-white/80">
                  <div className="flex justify-between"><span>Salary</span><span>{fmt(fullTime.salary)}</span></div>
                  <div className="flex justify-between"><span>Benefits (25%)</span><span>{fmt(fullTime.benefits)}</span></div>
                  <div className="flex justify-between"><span>Recruiting</span><span>{fmt(fullTime.recruiting)}</span></div>
                  <div className="flex justify-between"><span>Training</span><span>{fmt(fullTime.training)}</span></div>
                  <div className="flex justify-between text-white/60"><span>Notice risk</span><span>3–6 months</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between font-display font-bold text-white text-[18px]"><span>Year 1</span><span>{fmt(fullTime.total)}+</span></div>
              </div>

              <div className="rounded-2xl p-7 border" style={{ background: "hsl(var(--teal) / 0.08)", borderColor: "hsl(var(--teal) / 0.4)" }}>
                <h4 className="font-display font-bold text-teal-bright text-[18px] mb-4">6ixFinance</h4>
                <div className="space-y-2 text-[14px] text-white/85">
                  <div className="flex justify-between"><span>Monthly</span><span>{fmt(fractional.monthlyMin)}–{fmt(Math.round(fractional.monthlyMin * 1.5))}</span></div>
                  <div className="flex justify-between"><span>Annual</span><span>{fmt(fractional.annualMin)}–{fmt(fractional.annualMax)}</span></div>
                  <div className="flex justify-between"><span>Setup</span><span>None</span></div>
                  <div className="flex justify-between"><span>Cancel</span><span>30 days</span></div>
                  <div className="flex justify-between"><span>Team</span><span>Included</span></div>
                </div>
                <div className="mt-4 pt-4 border-t border-teal/20 flex justify-between font-display font-bold text-white text-[18px]"><span>Year 1</span><span>From {fmt(fractional.annualMin)}</span></div>
              </div>

              <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, hsl(var(--teal)) 0%, #0a8a78 100%)" }}>
                <p className="text-white/85 text-[13px] uppercase tracking-[2px] font-semibold">You save up to</p>
                <p className="font-display font-bold text-white text-[52px] sm:text-[64px] leading-none mt-2" style={{ letterSpacing: "-2px" }}>{fmt(animated)}</p>
                <p className="text-white/85 mt-2 text-[15px]">in Year 1</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#070D1A] text-white font-semibold">Book a Free Consultation <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CostCalculator;
