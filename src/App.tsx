import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import AccountingMigration from "./pages/AccountingMigration.tsx";
import Resources from "./pages/Resources.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Solutions from "./pages/Solutions.tsx";
import FractionalCFO from "./pages/services/FractionalCFO.tsx";
import Controllership from "./pages/services/Controllership.tsx";
import PowerBI from "./pages/services/PowerBI.tsx";
import FPA from "./pages/services/FPA.tsx";
import RegulatoryReporting from "./pages/services/RegulatoryReporting.tsx";

import ComplianceGuides from "./pages/resources/ComplianceGuides.tsx";
import SedarCalendar from "./pages/resources/SedarCalendar.tsx";
import CostCalculator from "./pages/resources/CostCalculator.tsx";
import FAQ from "./pages/resources/FAQ.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/fractional-cfo" element={<FractionalCFO />} />
          <Route path="/services/controllership" element={<Controllership />} />
          <Route path="/services/power-bi-reporting" element={<PowerBI />} />
          <Route path="/services/fpa-forecasting" element={<FPA />} />
          <Route path="/services/regulatory-reporting" element={<RegulatoryReporting />} />
          <Route path="/accounting-migration" element={<AccountingMigration />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          
          <Route path="/resources/compliance-guides" element={<ComplianceGuides />} />
          <Route path="/resources/sedar-calendar" element={<SedarCalendar />} />
          <Route path="/resources/cost-calculator" element={<CostCalculator />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
