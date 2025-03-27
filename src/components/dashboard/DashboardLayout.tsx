
import NavBar from "./NavBar";
import FinancialSummary from "./FinancialSummary";
import ExpenseChart from "./ExpenseChart";
import BudgetProgress from "./BudgetProgress";
import RecentTransactions from "./RecentTransactions";
import AccountsSummary from "./AccountsSummary";
import NetWorthSnapshot from "./NetWorthSnapshot";
import MonthlyFlowChart from "./MonthlyFlowChart";
import BudgetAlerts from "./BudgetAlerts";
import GoalTracker from "./GoalTracker";
import FundsSummary from "./FundsSummary";
import AiTipCard from "./AiTipCard";
import QuickActions from "./QuickActions";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <NavBar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Financial Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Overview of your financial health and activities
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-3">
            <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
              April 2023
            </span>
            <button className="px-4 py-2 bg-primary text-white rounded-lg shadow-sm hover:bg-primary/90 transition-colors">
              Add Transaction
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          <FinancialSummary />
          
          <div className="dashboard-grid">
            <NetWorthSnapshot />
            <MonthlyFlowChart />
          </div>
          
          <div className="dashboard-grid">
            <ExpenseChart />
            <BudgetProgress />
          </div>
          
          <div className="dashboard-grid">
            <div className="col-span-1 md:col-span-1 xl:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <BudgetAlerts />
              <GoalTracker />
              <FundsSummary />
              <AiTipCard />
            </div>
            <div className="col-span-1 md:col-span-1 xl:col-span-1 space-y-4">
              <QuickActions />
              <RecentTransactions />
            </div>
          </div>
          
          <div className="dashboard-grid">
            <AccountsSummary />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
