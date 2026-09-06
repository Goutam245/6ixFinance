import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/links";

export const CTASection = ({
  title = "Ready to Discuss Your Requirements?",
  subtitle,
  primaryLabel = "Book a Free Consultation",
  primaryTo = BOOKING_URL,
  secondaryLabel,
  secondaryTo,
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) => (
  <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--teal)) 0%, #0a8a78 100%)" }}>
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)" }} />
    <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
      <Reveal>
        <h2 className="font-display font-bold text-white text-[34px] sm:text-[44px] leading-[1.1]" style={{ letterSpacing: "-1px" }}>
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-white/85 text-[18px] max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {primaryTo.startsWith("http") ? (
            <a href={primaryTo} target="_blank" rel="noopener noreferrer" className="group px-7 py-3.5 min-h-[48px] rounded-full bg-[#070D1A] text-white font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
              {primaryLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ) : (
            <Link to={primaryTo} className="group px-7 py-3.5 min-h-[48px] rounded-full bg-[#070D1A] text-white font-semibold flex items-center gap-2 hover:-translate-y-0.5 transition-transform">
              {primaryLabel} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {secondaryLabel && (
            <Link to={secondaryTo || "#"} className="px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);
