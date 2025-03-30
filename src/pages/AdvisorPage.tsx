
import FinancialAdvisor from "@/components/advisor/FinancialAdvisor";

const AdvisorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">AI Financial Advisor</h1>
          <p className="text-muted-foreground">Get personalized financial guidance through our interactive assistant</p>
        </div>
        <FinancialAdvisor />
      </main>
    </div>
  );
};

export default AdvisorPage;
