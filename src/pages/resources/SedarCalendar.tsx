import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { downloadFile, toCSV } from "@/lib/downloads";
import { toast } from "@/hooks/use-toast";

type Item = { date: string; label: string; type: "critical" | "quarterly" | "ongoing"; exchanges: string[] };

const items: { quarter: string; rows: Item[] }[] = [
  { quarter: "Q1 Annual Deadlines (March 31 year-end)", rows: [
    { date: "April 30", label: "Annual Financial Statements", type: "critical", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "April 30", label: "MD&A (Annual)", type: "critical", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "April 30", label: "AIF (if applicable)", type: "critical", exchanges: ["TSX-V", "NEO"] },
    { date: "May 29", label: "Q1 Financial Statements", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "May 29", label: "Q1 MD&A", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
  ]},
  { quarter: "Q2 Deadlines", rows: [
    { date: "August 29", label: "Q2 Financial Statements", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "August 29", label: "Q2 MD&A", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
  ]},
  { quarter: "Q3 Deadlines", rows: [
    { date: "November 29", label: "Q3 Financial Statements", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "November 29", label: "Q3 MD&A", type: "quarterly", exchanges: ["TSX-V", "CSE", "NEO"] },
  ]},
  { quarter: "Ongoing Obligations", rows: [
    { date: "≤ 1 day", label: "Material Change Reports", type: "ongoing", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "≤ 5 days", label: "Insider Reports (SEDI)", type: "ongoing", exchanges: ["TSX-V", "CSE", "NEO"] },
    { date: "As required", label: "Early Warning Reports", type: "ongoing", exchanges: ["TSX-V", "CSE", "NEO"] },
  ]},
];

const dot = (t: Item["type"]) => t === "critical" ? "🔴" : t === "quarterly" ? "🟡" : "🔵";
const filters = ["All Filings", "TSX-V", "CSE", "NEO"];

const SedarCalendar = () => {
  const [filter, setFilter] = useState("All Filings");
  const visible = (r: Item) => filter === "All Filings" || r.exchanges.includes(filter);

  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=85"
        badge={{ label: "SEDAR+ Calendar" }}
        title={<>SEDAR+ Filing Calendar <span className="text-gradient-teal">2025/2026</span></>}
        subtitle="Every continuous-disclosure deadline that matters to a Canadian small-cap public company — in one place."
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "SEDAR+ Calendar" }]} />
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${filter === f ? "bg-teal text-background" : "bg-white/5 border border-white/10 text-white/80 hover:border-teal/40"}`}>{f}</button>
            ))}
          </div>

          <div className="space-y-12">
            {items.map((q, idx) => (
              <Reveal key={q.quarter} delay={idx * 0.05}>
                <div>
                  <h3 className="font-display font-bold text-teal-bright text-[14px] uppercase tracking-[3px] mb-5">{q.quarter}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.rows.filter(visible).map((r) => (
                      <div key={r.label + r.date} className="rounded-2xl p-5 border flex items-center gap-5" style={{ background: "hsl(var(--bg-card))", borderColor: r.type === "critical" ? "rgba(220,38,38,0.4)" : "rgba(255,255,255,0.08)" }}>
                        <div className="text-center w-24 flex-shrink-0">
                          <div className="text-[16px]">{dot(r.type)}</div>
                          <div className="font-display font-bold text-teal text-[18px] mt-1">{r.date}</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-display font-bold text-white text-[15px]">{r.label}</div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {r.exchanges.map((e) => (
                              <span key={e} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/60 border border-white/10">{e}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-[13px] text-white/60">
              <span className="flex items-center gap-2">🔴 Critical / Annual</span>
              <span className="flex items-center gap-2">🟡 Quarterly</span>
              <span className="flex items-center gap-2">🔵 Ongoing</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20" style={{ background: "hsl(var(--bg-secondary))" }}>
        <div className="max-w-[700px] mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-white text-[30px] sm:text-[36px]" style={{ letterSpacing: "-1px" }}>Download the Full Calendar as PDF</h2>
            <p className="mt-3 text-white/70 text-[15px]">Enter your email and the full deadline calendar downloads instantly as a spreadsheet file.</p>
            <form
              className="mt-8 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                const rows: (string | number)[][] = [["Period", "Deadline", "Filing", "Priority", "Exchanges"]];
                items.forEach((g) =>
                  g.rows.forEach((r) => rows.push([g.quarter, r.date, r.label, r.type, r.exchanges.join(" / ")]))
                );
                downloadFile("6ixFinance-SEDAR-Filing-Calendar.csv", toCSV(rows), "text/csv;charset=utf-8");
                toast({ title: "Calendar downloaded", description: "Check your downloads folder for the SEDAR+ filing calendar." });
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <input required type="email" placeholder="you@company.com" className="flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-teal" />
              <button className="px-6 py-3.5 rounded-full bg-gradient-teal text-white font-semibold flex items-center justify-center gap-2">Send Me the Calendar <ArrowRight className="w-4 h-4" /></button>
            </form>
            <p className="mt-6 text-white/55 text-[13px] italic">Deadlines shown are for issuers with March 31 year-end. Contact us for your specific deadlines.</p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default SedarCalendar;
