
import GoalDashboard from "@/components/goals/GoalDashboard";

const GoalsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Financial Goals</h1>
          <p className="text-muted-foreground">Track progress towards your financial targets</p>
        </div>
        <GoalDashboard />
      </main>
    </div>
  );
};

export default GoalsPage;
