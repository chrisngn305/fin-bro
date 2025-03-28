import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock budget data
const mockBudgetCategories = [
  {
    id: '1',
    name: 'Housing',
    budgeted: 1200,
    spent: 1100,
    color: '#9b87f5',
    icon: '🏠'
  },
  {
    id: '2',
    name: 'Food & Dining',
    budgeted: 600,
    spent: 520,
    color: '#F97316',
    icon: '🍔'
  },
  {
    id: '3',
    name: 'Transportation',
    budgeted: 250,
    spent: 210,
    color: '#0EA5E9',
    icon: '🚗'
  },
  {
    id: '4',
    name: 'Entertainment',
    budgeted: 200,
    spent: 215,
    color: '#D946EF',
    icon: '🎬'
  },
  {
    id: '5',
    name: 'Shopping',
    budgeted: 300,
    spent: 340,
    color: '#ea384c',
    icon: '🛍️'
  },
  {
    id: '6',
    name: 'Healthcare',
    budgeted: 150,
    spent: 120,
    color: '#16A34A',
    icon: '⚕️'
  },
  {
    id: '7',
    name: 'Personal Care',
    budgeted: 100,
    spent: 90,
    color: '#7E69AB',
    icon: '✂️'
  },
  {
    id: '8',
    name: 'Utilities',
    budgeted: 250,
    spent: 240,
    color: '#6E59A5',
    icon: '💡'
  }
];

interface BudgetCategoryListProps {
  timeframe: string;
}

const BudgetCategoryList = ({ timeframe }: BudgetCategoryListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Categories</CardTitle>
        <CardDescription>
          {timeframe === 'monthly' ? 'Monthly' : 'Weekly'} budget allocations and spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockBudgetCategories.map((category) => {
            const percentSpent = Math.round((category.spent / category.budgeted) * 100);
            const isOverBudget = category.spent > category.budgeted;
            const isCloseToLimit = percentSpent >= 90 && !isOverBudget;
            
            return (
              <div key={category.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl" role="img" aria-label={category.name}>
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="text-sm">
                    <span className={isOverBudget ? "text-red-500 font-semibold" : ""}>
                      ${category.spent.toFixed(0)}
                    </span>
                    <span className="text-muted-foreground"> / ${category.budgeted.toFixed(0)}</span>
                  </div>
                </div>
                
                <Progress 
                  value={percentSpent > 100 ? 100 : percentSpent} 
                  className={`h-2 ${
                    isOverBudget 
                      ? "bg-red-100" 
                      : isCloseToLimit 
                        ? "bg-amber-100"
                        : `bg-gray-100`
                  }`}
                />
                
                {isOverBudget && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Over Budget</AlertTitle>
                    <AlertDescription>
                      You've exceeded your {category.name} budget by ${(category.spent - category.budgeted).toFixed(2)}
                    </AlertDescription>
                  </Alert>
                )}
                
                {isCloseToLimit && (
                  <Alert className="bg-amber-50 text-amber-800 border-amber-200 py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Approaching Limit</AlertTitle>
                    <AlertDescription>
                      You've used {percentSpent}% of your {category.name} budget
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetCategoryList;
