import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

const sections = [
  {
    h: "Use of This Website",
    p: "This website and its content are provided for general information about 6ixFinance's services. By using the site you agree to these terms and to use the site lawfully and without disrupting its operation.",
  },
  {
    h: "Not Professional Advice",
    p: "Content on this site — including compliance guides, filing calendars and cost calculators — is general in nature and does not constitute accounting, audit, tax, legal or securities advice. Always obtain advice specific to your company before acting.",
  },
  {
    h: "Engagement Terms",
    p: "Services are performed only under a signed engagement letter that governs scope, fees, deliverables and responsibilities. Nothing on this website creates a client relationship or a binding offer of service.",
  },
  {
    h: "Independence",
    p: "6ixFinance provides fractional CFO, controllership and advisory services. We are not your external auditor and do not perform assurance engagements.",
  },
  {
    h: "Third-Party Links & Tools",
    p: "The site links to third-party platforms such as scheduling, form and accounting software. We are not responsible for the content, availability or privacy practices of those platforms.",
  },
  {
    h: "Limitation of Liability",
    p: "To the maximum extent permitted by law, 6ixFinance is not liable for any loss arising from reliance on website content. These terms are governed by the laws of the Province of Ontario, Canada.",
  },
];

const TermsPage = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=85"
      eyebrow="Legal"
      title={<>Terms of <span className="text-gradient-teal">Use</span></>}
      subtitle="The terms that apply when you use the 6ixFinance website."
    />
    <section className="bg-bg-secondary py-20">
      <div className="max-w-[860px] mx-auto px-6 lg:px-10 space-y-10">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="font-display font-bold text-white text-[22px] sm:text-[26px]">{s.h}</h2>
            <p className="mt-3 text-muted-foreground text-[16px] leading-[1.8]">{s.p}</p>
          </div>
        ))}
        <p className="text-muted-foreground text-[14px] pt-4 border-t border-white/10">
          Last updated: January 2026. Questions? Email{" "}
          <a href="mailto:info@6ixfinance.com" className="text-teal hover:text-teal-bright">info@6ixfinance.com</a>.
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default TermsPage;
