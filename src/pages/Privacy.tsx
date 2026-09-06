import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

const sections = [
  {
    h: "Information We Collect",
    p: "We collect information you voluntarily provide through our contact and booking forms — such as your name, company name, email address, exchange listing and market capitalization range — along with standard technical data (browser type, pages visited) collected by our website analytics.",
  },
  {
    h: "How We Use Your Information",
    p: "Information is used solely to respond to your enquiry, schedule consultations, deliver the services you request, and send relevant compliance updates where you have opted in. We do not sell or rent personal information to third parties.",
  },
  {
    h: "Confidentiality",
    p: "Financial information shared with 6ixFinance during discovery or engagement is treated as confidential and is handled in line with professional accounting standards and applicable Canadian securities confidentiality expectations.",
  },
  {
    h: "Service Providers",
    p: "We use trusted third-party providers for form handling, appointment scheduling, chat support and cloud accounting platforms. These providers process data only on our instructions and under their own security commitments.",
  },
  {
    h: "Data Retention & Security",
    p: "Personal data is retained only as long as required to serve you or to meet legal and professional record-keeping obligations. Data is protected with encryption in transit, access controls and multi-factor authentication.",
  },
  {
    h: "Your Rights",
    p: "Under PIPEDA you may request access to, correction of, or deletion of your personal information. Email info@6ixfinance.com and we will respond within one business day.",
  },
];

const PrivacyPage = () => (
  <SiteLayout>
    <PageHero
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=85"
      eyebrow="Legal"
      title={<>Privacy <span className="text-gradient-teal">Policy</span></>}
      subtitle="How 6ixFinance collects, uses and protects your information."
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

export default PrivacyPage;
