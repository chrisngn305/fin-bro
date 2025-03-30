import DebtDashboard from "@/components/debt/DebtDashboard";

const DebtPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
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
