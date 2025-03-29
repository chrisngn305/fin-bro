
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for the widget
const fundData = [
  {
    name: "Emergency Fund",
    balance: 10000,
    target: 15000,
    progress: 67,
  },
  {
    name: "Travel Fund",
    balance: 3000,
    target: 5000,
    progress: 60,
  },
  {
    name: "Car Maintenance",
    balance: 1200,
    target: 2000,
    progress: 60,
  }
];

const FundSummaryWidget = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium flex items-center">
          <PiggyBank className="h-4 w-4 mr-2 text-primary" />
          Funds Summary
        </CardTitle>
        <CardDescription>Your emergency and sinking funds</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          {fundData.map((fund, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium">{fund.name}</span>
                <span className="text-muted-foreground">{fund.progress}%</span>
              </div>
              <Progress value={fund.progress} className="h-1.5" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatCurrency(fund.balance)}</span>
                <span>Goal: {formatCurrency(fund.target)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to="/funds">Manage Funds</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FundSummaryWidget;
