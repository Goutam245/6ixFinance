export const Ticker = () => {
  const items = [
    "TSX-V Listed", "CSE Listed", "NEO Listed",
    "SEDAR+ Reporting", "NI 52-109 Compliance",
    "MD&A Preparation", "AIF Filing",
    "Board Reporting", "PCAOB Ready",
    "CEO/CFO Certification", "Audit Committee Support",
    "Investor Relations",
  ];
  const row = (
    <div className="flex items-center gap-10 px-5 shrink-0">
      {items.map((t, i) => (
        <span key={i} className="font-mono text-[13px] font-medium text-white/90 whitespace-nowrap">
          {t} <span className="text-teal-bright/80 ml-10">·</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker-strip border-y border-white/10 bg-background/60 backdrop-blur-sm py-3 overflow-hidden">
      <div className="ticker-track">
        {row}{row}
      </div>
    </div>
  );
};
