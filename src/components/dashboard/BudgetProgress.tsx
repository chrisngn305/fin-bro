
import { Progress } from "@/components/ui/progress";
import MotionCard from "../ui/MotionCard";

const BudgetProgress = () => {
  // Demo data
  const budgetCategories = [
    {
      category: "Groceries",
      spent: 425,
      total: 600,
      percentage: 70,
      color: "bg-blue-500"
    },
    {
      category: "Dining Out",
      spent: 320,
      total: 300,
      percentage: 106,
      color: "bg-red-500"
    },
    {
      category: "Transportation",
      spent: 185,
      total: 250,
      percentage: 74,
      color: "bg-amber-500"
    },
    {
      category: "Entertainment",
      spent: 110,
      total: 200,
      percentage: 55,
      color: "bg-purple-500"
    },
    {
      category: "Shopping",
      spent: 280,
      total: 300,
      percentage: 93,
      color: "bg-green-500"
    }
  ];

  return (
    <MotionCard className="dashboard-grid-medium h-[380px]" delay={250}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Budget Progress</h3>
        <div className="text-sm text-muted-foreground">April 2023</div>
      </div>

      <div className="space-y-5 overflow-auto pr-2 max-h-[280px]">
        {budgetCategories.map((budget, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{budget.category}</span>
              <span className={`font-medium ${
                budget.percentage >= 100 ? "text-red-500" : ""
              }`}>
                ${budget.spent} / ${budget.total}
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={Math.min(budget.percentage, 100)} 
                className="h-2"
              />
              <div 
                className={`absolute top-0 h-2 ${budget.color}`} 
                style={{ 
                  width: `${Math.min(budget.percentage, 100)}%`,
                  borderRadius: "inherit"
                }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {budget.percentage < 100 
                ? `${100 - budget.percentage}% remaining` 
                : `${budget.percentage - 100}% over budget`}
            </p>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

export default BudgetProgress;
