
import FundDashboard from "@/components/funds/FundDashboard";

const FundsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Funds Management</h1>
          <p className="text-muted-foreground">Emergency and sinking funds to achieve your financial goals</p>
        </div>
        <FundDashboard />
      </main>
    </div>
  );
};

export default FundsPage;
