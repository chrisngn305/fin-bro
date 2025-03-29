
import GoalDashboard from "@/components/goals/GoalDashboard";
import NavBar from "@/components/dashboard/NavBar";

const GoalsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 pt-20 pb-10">
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
