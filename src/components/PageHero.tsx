import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export const PageHero = ({
  image,
  eyebrow,
  title,
  subtitle,
  badge,
}: {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  badge?: { label: string; tone?: "teal" | "gold" };
}) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, filter: "blur(2px) brightness(0.35)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(7,13,26,0.88)" }} />
      <div className="orb orb-1" style={{ opacity: 0.08 }} />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <Reveal>
          {badge && (
            <span
              className={`inline-block mb-5 px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[3px] ${
                badge.tone === "gold"
                  ? "bg-gradient-gold text-[#1a1a1a]"
                  : "bg-teal/15 text-teal border border-teal/30"
              }`}
            >
              {badge.label}
            </span>
          )}
          {eyebrow && <p className="label-eyebrow text-teal">{eyebrow}</p>}
          <h1 className="mt-3 font-display font-bold text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.05] max-w-4xl" style={{ letterSpacing: "-2px" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-muted-foreground text-[18px] max-w-2xl leading-[1.7]">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
};
