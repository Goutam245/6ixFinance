import { Mail, MapPin, Calendar, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BOOKING_URL, CONTACT_FORM_URL } from "@/lib/links";

const ContactPage = () => {
  return (
    <SiteLayout>
      <PageHero
        image="https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=85"
        eyebrow="Get in Touch"
        title={<>Let's Discuss Your <span className="text-gradient-teal">Public Company's</span> Financial Needs</>}
        subtitle="Free 30-minute consultation. Confidential and no obligation."
      />

      <section className="bg-bg-secondary py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <Reveal>
            <div className="bg-gradient-card rounded-3xl p-5 sm:p-8 border border-white/5">
              <p className="label-eyebrow text-teal">Book Your Consultation</p>
              <h2 className="mt-2 font-display font-bold text-white text-[26px] sm:text-[32px]">Tell Us About Your Company</h2>

              <div className="mt-7 rounded-xl overflow-hidden bg-white">
                <iframe
                  src={CONTACT_FORM_URL}
                  title="Contact Us - 6ixFinance"
                  style={{ width: "100%", height: "755px", border: "none", borderRadius: "8px", display: "block" }}
                />
              </div>

              <p className="mt-4 text-center text-muted-foreground text-[13px]">
                🔒 Confidential · Response within one business day
              </p>
            </div>
          </Reveal>


          {/* Right column */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="bg-gradient-card rounded-2xl p-7 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-teal" />
                  <h3 className="font-display font-bold text-white text-[18px]">Book Directly</h3>
                </div>
                <p className="text-muted-foreground text-[14px]">
                  Prefer to skip the form? Pick a time that works for you.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block text-center w-full px-5 py-3.5 rounded-full bg-white text-[#0D1829] font-display font-bold transition-all hover:-translate-y-0.5"
                >
                  Open Calendar →
                </a>
              </div>

              <div className="bg-gradient-card rounded-2xl p-7 border border-white/5 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Office</div>
                    <div className="text-white text-[15px]">901 Guelph Line<br />Burlington, ON L7R 3N8</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Email</div>
                    <a href="mailto:info@6ixfinance.com" className="text-white text-[15px] hover:text-teal-bright">info@6ixfinance.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal mt-1" />
                  <div>
                    <div className="text-[12px] text-muted-foreground uppercase tracking-wider">Response Time</div>
                    <div className="text-white text-[15px]">Within one business day</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[4/3]">
                <iframe
                  title="6ixFinance Office"
                  src="https://www.google.com/maps?q=901+Guelph+Line,+Burlington,+ON&output=embed"
                  className="w-full h-full grayscale-[0.4] contrast-110"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
