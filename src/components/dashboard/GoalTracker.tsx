
import { Progress } from "@/components/ui/progress";
import MotionCard from "../ui/MotionCard";

const GoalTracker = () => {
  // Demo data
  const goals = [
    {
      name: "Vacation Fund",
      target: 5000,
      current: 3200,
      deadline: "August 2023",
      progress: 64
    },
    {
      name: "New Car",
      target: 25000,
      current: 8750,
      deadline: "December 2023",
      progress: 35
    }
  ];

  return (
    <MotionCard className="h-full" delay={300}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Financial Goals</h3>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h4 className="font-medium">{goal.name}</h4>
              <p className="text-sm text-muted-foreground">
                {goal.deadline}
              </p>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <div className="flex justify-between text-sm">
              <p className="text-muted-foreground">
                ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
              </p>
              <p className="font-medium">{goal.progress}%</p>
            </div>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

export default GoalTracker;
