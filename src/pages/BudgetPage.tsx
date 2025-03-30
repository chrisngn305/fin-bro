
import { useState } from "react";
import IncomeHistory from "@/components/budget/IncomeHistory";
import BudgetCategoryList from "@/components/budget/BudgetCategoryList";
import BudgetTimeframeSelector from "@/components/budget/BudgetTimeframeSelector";
import BudgetAlertsList from "@/components/budget/BudgetAlertsList";
import AiBudgetSuggestions from "@/components/budget/AiBudgetSuggestions";

const BudgetPage = () => {
  const [timeframe, setTimeframe] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Income & Budget</h1>
            <p className="text-muted-foreground mt-1">
              Track your income and manage your budgets
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <BudgetTimeframeSelector 
              value={timeframe}
              onChange={setTimeframe}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <IncomeHistory />
          </div>
          <div className="lg:col-span-1">
            <BudgetAlertsList />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BudgetCategoryList timeframe={timeframe} />
          </div>
          <div className="lg:col-span-1">
            <AiBudgetSuggestions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BudgetPage;
