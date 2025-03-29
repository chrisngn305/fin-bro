
import NavBar from "@/components/dashboard/NavBar";
import DebtDashboard from "@/components/debt/DebtDashboard";

const DebtPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Debt & Liabilities</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage all your loans and debts
          </p>
        </div>
        
        <DebtDashboard />
      </main>
    </div>
  );
};

export default DebtPage;
