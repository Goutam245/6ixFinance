import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/links";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-teal/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="font-display font-bold text-[24px] tracking-tight">
              <span className="text-gradient-teal">6ix</span>
              <span className="text-white">Finance</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
              Institutional Financial Leadership for Public Companies.
            </p>
            <div className="mt-5 flex gap-2 flex-wrap">
              {["TSX-V", "CSE", "NEO"].map((b) => (
                <span key={b} className="px-3 py-1 rounded-full text-[11px] font-mono border border-teal/30 text-teal">
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="mailto:info@6ixfinance.com" aria-label="Email 6ixFinance" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal/20 hover:border-teal/40 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/6ixfinance" target="_blank" rel="noopener noreferrer" aria-label="6ixFinance on LinkedIn" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-teal/20 hover:border-teal/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-white text-[15px] font-semibold label-eyebrow text-teal mb-5">Services</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              {[
                ["Fractional CFO", "/services#fractional-cfo"],
                ["Controllership", "/services#controllership"],
                ["SEDAR+ Filing", "/services#sedar-filing"],
                ["Board Reporting", "/services#board-reporting"],
                ["FP&A & Forecasting", "/services#fpa-forecasting"],
                ["Accounting Migration", "/accounting-migration"],
              ].map(([l, h]) => (
                <li key={l}><Link to={h} className="hover:text-teal-bright transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow text-teal mb-5">Company</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li><Link to="/about" className="hover:text-teal-bright">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-teal-bright">Resources</Link></li>
              <li><Link to="/resources/sedar-calendar" className="hover:text-teal-bright">Compliance Calendar</Link></li>
              <li><Link to="/resources/faq" className="hover:text-teal-bright">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow text-teal mb-5">Contact</h4>
            <ul className="space-y-3 text-[14px] text-muted-foreground">
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 text-teal" /> info@6ixfinance.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-teal" /> 901 Guelph Line, Burlington, ON L7R 3N8</li>

            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 px-4 py-3 min-h-[44px] rounded-full bg-gradient-teal text-white text-[13px] font-semibold btn-glow transition-all hover:-translate-y-0.5">
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-muted-foreground">
          <p>© 2026 6ixFinance. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-teal-bright">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal-bright">Terms</Link>
            <Link to="/contact" className="hover:text-teal-bright">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
