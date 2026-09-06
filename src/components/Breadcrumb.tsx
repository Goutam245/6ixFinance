import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const Breadcrumbs = ({ items }: { items: { label: string; to?: string }[] }) => (
  <nav className="flex items-center gap-1.5 text-[13px] text-white/60 mb-5" aria-label="Breadcrumb">
    {items.map((it, i) => (
      <span key={i} className="flex items-center gap-1.5">
        {it.to ? (
          <Link to={it.to} className="hover:text-teal-bright transition-colors">{it.label}</Link>
        ) : (
          <span className="text-teal">{it.label}</span>
        )}
        {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
      </span>
    ))}
  </nav>
);
