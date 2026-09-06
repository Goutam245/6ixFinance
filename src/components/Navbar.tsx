import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/links";

const servicesItems = [
  { label: "Fractional CFO for Public Companies", to: "/services/fractional-cfo" },
  { label: "Controllership & Compliance", to: "/services/controllership" },
  { label: "Power BI & Board Reporting", to: "/services/power-bi-reporting" },
  { label: "FP&A & Forecasting", to: "/services/fpa-forecasting" },
  { label: "Regulatory Reporting (SEDAR+)", to: "/services/regulatory-reporting" },
  { label: "Accounting System Migration", to: "/accounting-migration" },
];
const resourcesItems = [
  { label: "Compliance Guides", to: "/resources/compliance-guides" },
  { label: "SEDAR+ Filing Calendar", to: "/resources/sedar-calendar" },
  { label: "Cost Calculator", to: "/resources/cost-calculator" },
  { label: "FAQ", to: "/resources/faq" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const navLinkBase = "font-display font-medium text-[15px] text-white/90 hover:text-teal-bright transition-colors";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "backdrop-blur-xl border-b border-teal/15" : ""
      }`}
      style={{ background: scrolled || open ? "rgba(7,13,26,0.98)" : "transparent" }}
    >

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-[22px] tracking-tight">
          <span className="text-gradient-teal">6ix</span>
          <span className="text-white">Finance</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setHovered("services")}
            onMouseLeave={() => setHovered(null)}
          >
            <button className={`${navLinkBase} flex items-center gap-1`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {hovered === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[340px]"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-2 border border-black/5">
                    {servicesItems.map((it) => (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="block px-4 py-3 rounded-xl text-[14px] text-slate-800 hover:bg-teal/10 hover:text-teal transition-colors"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/solutions" className={navLinkBase}>Solutions</NavLink>
          <NavLink to="/accounting-migration" className={navLinkBase}>Accounting Migration</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setHovered("resources")}
            onMouseLeave={() => setHovered(null)}
          >
            <button className={`${navLinkBase} flex items-center gap-1`}>
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {hovered === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[260px]"
                >
                  <div className="bg-white rounded-2xl shadow-2xl p-2 border border-black/5">
                    {resourcesItems.map((it) => (
                      <Link
                        key={it.label}
                        to={it.to}
                        className="block px-4 py-3 rounded-xl text-[14px] text-slate-800 hover:bg-teal/10 hover:text-teal transition-colors"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/about" className={navLinkBase}>About</NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full border border-teal/40 text-teal text-[14px] font-medium hover:bg-teal/10 transition-colors"
          >
            Investor Portal
          </Link>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-5 py-2.5 rounded-full bg-gradient-teal text-white text-[14px] font-semibold flex items-center gap-2 btn-glow transition-all hover:-translate-y-0.5"
            style={{ boxShadow: "0 4px 20px rgba(30,64,175,0.35)" }}
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden absolute top-[72px] inset-x-0 overflow-hidden border-t border-white/10 shadow-2xl"
            style={{ background: "hsl(var(--background))" }}
          >
            <div className="px-6 py-6 flex flex-col gap-1 max-h-[calc(100vh-72px)] overflow-y-auto">
              {[
                { to: "/services", label: "Services" },
                { to: "/solutions", label: "Solutions" },
                { to: "/accounting-migration", label: "Accounting Migration" },
                { to: "/resources", label: "Resources" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-white text-[17px] font-display font-medium py-3 min-h-[48px] flex items-center border-b border-white/5 hover:text-teal-bright transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-3.5 min-h-[48px] flex items-center justify-center rounded-full bg-gradient-teal text-white text-center font-semibold"
              >
                Book a Consultation →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
