
import InvestmentDashboard from "@/components/investments/InvestmentDashboard";

const InvestmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Investment Portfolio</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage your investment assets
          </p>
        </div>
        
        <InvestmentDashboard />
      </main>
    </div>
  );
};

export default InvestmentPage;
