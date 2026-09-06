import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Download, X, FileText } from "lucide-react";
import { downloadFile } from "@/lib/downloads";
import { toast } from "@/hooks/use-toast";

const guides = [
  { title: "Public Company CFO Guide: Complete Compliance Calendar 2025/26", color: "from-teal to-cyan-600", inside: ["All SEDAR+ deadlines", "NI 52-109 dates", "AGM checklist", "Audit committee schedule"] },
  { title: "NI 52-109 Certification Checklist for CEOs & CFOs", color: "from-amber-500 to-amber-700", inside: ["Step-by-step certification process", "Common errors to avoid", "Disclosure controls framework", "Internal controls testing"] },
  { title: "SEDAR+ Filing Guide for Small-Cap Companies", color: "from-indigo-500 to-blue-700", inside: ["Every filing type explained", "Deadlines by exchange", "Penalties for late filing", "Material change reporting"] },
  { title: "Accounting Migration Playbook for Public Companies", color: "from-emerald-500 to-teal-700", inside: ["5-phase methodology", "Risk management framework", "Timeline template", "Cutover checklist"] },
];

const ComplianceGuides = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85"
        badge={{ label: "Compliance Guides" }}
        title={<>Free Compliance Guides for <span className="text-gradient-teal">Public Companies</span></>}
        subtitle="Download our expert guides — built specifically for TSX-V, CSE, and NEO-listed companies."
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Compliance Guides" }]} />
      </div>

      <section className="py-24" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.07}>
                <div className="bg-card border border-white/8 rounded-2xl p-7 hover:border-teal/40 transition-all h-full flex flex-col">
                  <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${g.color} relative overflow-hidden mb-6 flex items-end p-6`}>
                    <FileText className="absolute top-5 right-5 w-8 h-8 text-white/40" />
                    <div className="text-white">
                      <div className="text-[10px] font-semibold uppercase tracking-[2px] opacity-80">6ixFinance Guide</div>
                      <div className="font-display font-bold text-[18px] leading-tight mt-2">{g.title.split(":")[0]}</div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-[19px] mb-3">{g.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {g.inside.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-white/75 text-[14px]"><span className="text-teal">•</span> {b}</li>
                    ))}
                  </ul>
                  <button onClick={() => setActive(i)} className="px-5 py-3 rounded-full bg-gradient-teal text-white font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform">
                    <Download className="w-4 h-4" /> Download Free
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Personalized Compliance Support?" subtitle="Our team can walk through any of these guides on a call." />

      {active !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(7,13,26,0.85)" }} onClick={() => setActive(null)}>
          <div className="bg-card border border-teal/30 rounded-2xl p-8 max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-5 right-5 text-white/60 hover:text-white"><X className="w-5 h-5" /></button>
            <h3 className="font-display font-bold text-white text-[22px] mb-2">Get Your Free Guide</h3>
            <p className="text-white/70 text-[14px] mb-6">{guides[active].title}</p>
            <form className="space-y-3" onSubmit={(e) => {
              e.preventDefault();
              const g = guides[active];
              downloadFile(
                `${g.title.split(":")[0].replace(/[^a-z0-9]+/gi, "-")}.txt`,
                [`6ixFinance — ${g.title}`, "", "What's inside:", ...g.inside.map((b) => `  - ${b}`), "", "Questions? 6ixfinance.com/contact"].join("\n")
              );
              toast({ title: "Guide downloaded", description: "A copy has also been sent to your inbox." });
              setActive(null);
            }}>
              <input required placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-teal" />
              <input required type="email" placeholder="Work email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-teal" />
              <input required placeholder="Company" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-teal" />
              <select required defaultValue="" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-teal">
                <option value="" disabled>Exchange listed on</option>
                <option>TSX-V</option>
                <option>CSE</option>
                <option>NEO (Cboe)</option>
                <option>Pre-listing</option>
              </select>
              <button className="w-full px-5 py-3 rounded-full bg-gradient-teal text-white font-semibold">Download Now →</button>
              <p className="text-center text-white/50 text-[12px]">Sent to your inbox immediately.</p>
            </form>
          </div>
        </div>
      )}
    </SiteLayout>
  );
};

export default ComplianceGuides;
