
import InsightsDashboard from "@/components/insights/InsightsDashboard";

const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Insights & Predictions</h1>
          <p className="text-muted-foreground">Financial analysis and forecasting based on your data</p>
        </div>
        <InsightsDashboard />
      </main>
    </div>
  );
};

export default InsightsPage;
