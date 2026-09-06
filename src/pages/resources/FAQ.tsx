import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumb";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ChevronDown } from "lucide-react";

const faqs = [
  { cat: "CFO Services", q: "What does a fractional CFO do for a public company?", a: "A 6ixFinance fractional CFO embeds into your leadership team part-time but with full accountability — handling MD&A, NI 52-109 certification support, audit committee participation, board reporting, investor relations financial materials, capital allocation advisory, and strategic financial planning. It's the same scope of work as a full-time CFO, delivered on the cadence your stage actually requires." },
  { cat: "SEDAR+ & Compliance", q: "Can you sign NI 52-109 certifications?", a: "No — NI 52-109 certifications must be signed by your CEO and CFO of record. What we do is build, document, and operate the disclosure controls and internal controls over financial reporting that make those certifications defensible. We prepare the working papers, run the testing, and walk your CEO/CFO through what they're signing every quarter." },
  { cat: "SEDAR+ & Compliance", q: "How do you handle SEDAR+ filings?", a: "We own your SEDAR+ calendar end to end. Each quarter we draft the financials, prepare the MD&A, coordinate with your auditors and securities counsel, package the filing, and submit through SEDAR+ on your behalf. You get a draft for review 5 business days before deadline — every time." },
  { cat: "CFO Services", q: "What exchanges do you have experience with?", a: "TSX-V (Tier 1 and Tier 2), CSE, Cboe Canada (formerly NEO), and OTC-listed Canadian issuers. We also support cross-listed issuers with concurrent SEC reporting requirements (Form 40-F filers and 20-F filers under MJDS)." },
  { cat: "Getting Started", q: "How quickly can you start?", a: "Typical onboarding is 7 days from signed engagement letter to first deliverable. Week 1: data room access, accounting system credentials, kickoff with your CEO and audit committee chair. Week 2: first board package or filing draft." },
  { cat: "Accounting Migration", q: "What does accounting migration involve?", a: "Our 5-phase methodology: (1) Audit your current chart of accounts and historical data; (2) Export and reconcile prior periods; (3) Set up the new system with proper public-company controls; (4) Run parallel for one full close; (5) Cut over with a documented rollback plan. Most public-company migrations take 8–12 weeks." },
  { cat: "CFO Services", q: "Do you work with our auditors?", a: "Yes — we treat your external auditors as partners. We prepare PBC schedules, respond to inquiries, attend audit committee meetings, and represent management in audit walkthroughs. The result is a shorter, less expensive audit." },
  { cat: "Getting Started", q: "What if we're going public soon?", a: "We have a dedicated pre-listing program: 3-year audited financial preparation, prospectus financial sections, listing application support, NI 52-109 controls design, and post-listing day-one readiness. Engagement typically starts 6–12 months before your target listing date." },
  { cat: "CFO Services", q: "Do you attend board meetings?", a: "Yes — virtually by default, in-person for Toronto, Vancouver, and Calgary boards. Your fractional CFO presents the financial section, answers board questions, and attends audit committee meetings as required." },
  { cat: "Pricing", q: "What's your minimum engagement?", a: "Three-month minimum, then month-to-month with 30 days' notice. We don't lock clients into long contracts — we earn the relationship every quarter." },
  { cat: "Pricing", q: "How are you different from a consulting firm?", a: "Consultants deliver a report and leave. We embed and own outcomes. Your fractional CFO is on the same Slack and email threads as your CEO, attends your board meetings, signs off on your filings, and is accountable to the same deadlines as a full-time hire." },
  { cat: "Getting Started", q: "Do you work with US-listed companies?", a: "Yes — we support OTC-listed Canadian companies, dual-listed (TSX-V/Nasdaq, etc.) issuers, and cross-listed companies under MJDS. We handle SEDAR+ alongside EDGAR filings and IFRS-to-US GAAP reconciliation where required." },
];

const tabs = ["All", "CFO Services", "SEDAR+ & Compliance", "Accounting Migration", "Pricing", "Getting Started"];

const FAQ = () => {
  const [tab, setTab] = useState("All");
  const [open, setOpen] = useState<number | null>(0);
  const filtered = tab === "All" ? faqs : faqs.filter((f) => f.cat === tab);

  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=85"
        badge={{ label: "FAQ" }}
        title={<>Frequently Asked <span className="text-gradient-teal">Questions</span></>}
        subtitle="Everything you've wanted to know about working with 6ixFinance."
      />
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 -mt-16 relative z-10">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "FAQ" }]} />
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((t) => (
              <button key={t} onClick={() => { setTab(t); setOpen(null); }} className={`px-4 py-2.5 min-h-[44px] rounded-full text-[13px] font-medium transition-all ${tab === t ? "bg-teal text-background" : "bg-white/5 border border-white/10 text-white/80 hover:border-teal/40"}`}>{t}</button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.03}>
                  <div className={`rounded-2xl border transition-all overflow-hidden ${isOpen ? "border-teal/40" : "border-white/8"}`} style={{ background: "hsl(var(--bg-card))", borderLeftWidth: isOpen ? 3 : 1, borderLeftColor: isOpen ? "hsl(var(--teal))" : undefined }}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-[2px] text-teal">{f.cat}</span>
                        <h3 className="mt-1 font-display font-bold text-white text-[17px]">{f.q}</h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-white/75 text-[15px] leading-[1.7]">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Still have questions?" subtitle="Book a 30-minute call — no pitch, just answers." primaryLabel="Book a Free Call" />
    </SiteLayout>
  );
};

export default FAQ;
