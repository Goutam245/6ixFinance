import { Link } from "react-router-dom";
import { Award, Users, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL } from "@/lib/links";

const reasons = [
  { icon: Target, t: "100% Public Company Focus", b: "We don't dabble. Every engagement is a public issuer. The standards, the deadlines, the controls — that's all we do." },
  { icon: ShieldCheck, t: "Audit-Grade Controls", b: "We build and document controls to the standard your auditors expect. PBC schedules ready before they ask." },
  { icon: Award, t: "Regulator-Tested", b: "Our team has responded to TSX-V, CSE, NEO, and securities commission inquiries. We know what they look for." },
  { icon: Users, t: "Embedded, Not Outsourced", b: "We sit on your Slack, attend your board meetings, and represent your company. We're part of your team." },
];

const credentials = [
  "CPA Designated Team",
  "SEDAR+ Certified",
  "NI 52-109 Experience",
  "TSX-V / CSE / NEO Exchange Experience",
  "IFRS and ASPE Trained",
  "Microsoft Power BI",
];

const AboutPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85"
        eyebrow="About 6ixFinance"
        title={<>The Public Company <span className="text-gradient-teal">Finance Specialists</span></>}
        subtitle="Built by CPAs who've held the seat — for issuers who need it done right."
      />

      {/* Our Story */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Story</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Why We Built 6ixFinance
            </h2>
            <div className="mt-7 space-y-5 text-[#4A5568] text-[17px] leading-[1.85]">
              <p>6ixFinance was built by CPAs who spent years inside public companies and Big Four firms watching small-cap issuers struggle with the same challenges — compliance overload, inadequate reporting infrastructure, and the impossible choice between a $200K+ CFO salary and doing it themselves.</p>
              <p>We built 6ixFinance to solve that problem — delivering institutional-grade financial leadership to public companies that need it most.</p>
              <p>Today, we serve issuers primarily on the TSX-V exchange. Every client gets the same standard of care: a senior CPA accountable to the same outcomes as a full-time CFO, supported by a team that does this every day.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specialization */}
      <section className="bg-background py-24 relative overflow-hidden">
        <div className="orb orb-1" style={{ opacity: 0.05 }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Our Specialization</p>
            <h2 className="mt-3 font-display font-bold text-white text-[32px] sm:text-[40px] lg:text-[44px]" style={{ letterSpacing: "-1px" }}>
              Why We Focus <span className="text-gradient-teal">Exclusively</span> on Public Companies
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-gradient-card rounded-2xl p-7 border border-white/5 card-hover flex gap-5 items-start h-full">
                  <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shrink-0">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-[20px]">{r.t}</h3>
                    <p className="mt-2 text-muted-foreground text-[15px] leading-[1.7]">{r.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-bg-light py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="label-eyebrow text-teal">Credentials</p>
            <h2 className="mt-3 font-display font-bold text-[#0D1829] text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              The Standards We Hold
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 border-l-4 border-teal shadow-sm flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal" />
                  <span className="font-display font-semibold text-[#0D1829] text-[15px]">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team section removed */}

      <section className="bg-gradient-teal py-20 text-center text-white">
        <div className="max-w-[900px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px]" style={{ letterSpacing: "-1px" }}>
              Want to See if We're the Right Fit?
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 min-h-[48px] rounded-full bg-white text-[#0D1829] font-display font-bold transition-all hover:-translate-y-0.5"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
