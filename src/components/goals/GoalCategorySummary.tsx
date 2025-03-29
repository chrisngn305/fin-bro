
import { Goal } from "@/types/goal";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart3, Flag } from "lucide-react";

interface GoalCategorySummaryProps {
  goals: Goal[];
}

const GoalCategorySummary = ({ goals }: GoalCategorySummaryProps) => {
  // Calculate totals by category
  const calculateCategoryStats = () => {
    const stats = {
      saving: { count: 0, current: 0, target: 0 },
      'debt-payoff': { count: 0, current: 0, target: 0 },
      'major-purchase': { count: 0, current: 0, target: 0 },
    };

    goals.forEach(goal => {
      if (goal.category in stats) {
        stats[goal.category as keyof typeof stats].count += 1;
        stats[goal.category as keyof typeof stats].current += goal.current;
        stats[goal.category as keyof typeof stats].target += goal.target;
      }
    });

    return stats;
  };

  const stats = calculateCategoryStats();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const categories = [
    {
      key: 'saving',
      label: 'Saving Goals',
      icon: TrendingUp,
      color: 'bg-blue-500',
      stats: stats.saving
    },
    {
      key: 'debt-payoff',
      label: 'Debt Payoff Goals',
      icon: BarChart3,
      color: 'bg-green-500',
      stats: stats["debt-payoff"]
    },
    {
      key: 'major-purchase',
      label: 'Purchase Goals',
      icon: Flag,
      color: 'bg-purple-500',
      stats: stats["major-purchase"]
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.key}>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${category.color} text-white`}>
                <category.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">{category.label}</p>
                <h4 className="text-2xl font-semibold mt-1">
                  {category.stats.count} {category.stats.count === 1 ? 'Goal' : 'Goals'}
                </h4>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span>
                  {formatCurrency(category.stats.current)} of {formatCurrency(category.stats.target)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Completion</span>
                <span>
                  {category.stats.target > 0 
                    ? Math.round((category.stats.current / category.stats.target) * 100)
                    : 0}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default GoalCategorySummary;
