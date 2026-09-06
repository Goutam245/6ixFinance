import quickbooksLogo from "@/assets/quickbooks-logo.png";

/**
 * QuickBooks Certified ProAdvisor badge.
 * - Uses the official Intuit QuickBooks wordmark (qb ball + wordmark, never alone)
 * - Plain white background, no decorative container shape
 * - Sized smaller than the site logo
 */
export const ProAdvisorBadge = () => (
  <div className="inline-flex flex-col items-start gap-2 bg-white py-3 pr-4">
    <img
      src={quickbooksLogo}
      alt="Intuit QuickBooks"
      className="h-8 w-auto object-contain"
    />
    <span className="font-display font-semibold text-[#0D1829] text-[13px] tracking-wide uppercase">
      Certified ProAdvisor
    </span>
  </div>
);
