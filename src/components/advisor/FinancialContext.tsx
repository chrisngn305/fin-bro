
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Wallet, DollarSign, CreditCard } from "lucide-react";

const FinancialContext = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Your Financial Context</CardTitle>
        <CardDescription>Key information about your finances</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <Wallet className="h-4 w-4 text-blue-500" />
            Current Budget Status
          </h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Income:</span>
              <span>$4,500/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Expenses:</span>
              <span>$3,890/month</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Balance:</span>
              <span className="text-green-600">+$610/month</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-red-500" />
            Debt Overview
          </h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Credit Cards:</span>
              <span>$3,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Student Loans:</span>
              <span>$12,800</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Auto Loan:</span>
              <span>$8,200</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total Debt:</span>
              <span>$24,500</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            Savings & Investments
          </h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Emergency Fund:</span>
              <span>$4,800</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Retirement:</span>
              <span>$28,600</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Brokerage:</span>
              <span>$7,200</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total Assets:</span>
              <span>$40,600</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-amber-500" />
            Recent Spending Trends
          </h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Groceries:</span>
              <span>$420/month <small className="text-green-500">↓5%</small></span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Dining Out:</span>
              <span>$350/month <small className="text-red-500">↑12%</small></span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Entertainment:</span>
              <span>$180/month <small className="text-red-500">↑8%</small></span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-blue-500" />
            Financial Goals
          </h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-muted-foreground">House Down Payment:</span>
              <span>$12,000/$40,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Debt Freedom:</span>
              <span>$24,500 remaining</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Travel Fund:</span>
              <span>$1,500/$3,000</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialContext;
