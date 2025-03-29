
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TransactionsPage from "./pages/TransactionsPage";
import BudgetPage from "./pages/BudgetPage";
import DebtPage from "./pages/DebtPage";
import InvestmentPage from "./pages/InvestmentPage";
import GoalsPage from "./pages/GoalsPage";
import FundsPage from "./pages/FundsPage";
import InsightsPage from "./pages/InsightsPage";
import AdvisorPage from "./pages/AdvisorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/debt" element={<DebtPage />} />
          <Route path="/investments" element={<InvestmentPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/funds" element={<FundsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/advisor" element={<AdvisorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
