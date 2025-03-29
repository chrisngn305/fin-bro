
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  AlertTriangle, 
  ArrowUpRight, 
  BellRing, 
  CreditCard, 
  DollarSign, 
  PiggyBank, 
  TrendingDown, 
  TrendingUp, 
  BadgeAlert
} from "lucide-react";

const FinancialAlerts = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Financial Health Alerts</CardTitle>
          <CardDescription>Important notifications about your financial situation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive" className="border-red-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>High-Interest Debt Alert</AlertTitle>
            <AlertDescription>
              You have $3,500 in credit card debt at 18% APR. Consider prioritizing this debt to save on interest.
            </AlertDescription>
          </Alert>
          
          <Alert className="bg-amber-50 text-amber-800 border-amber-200">
            <BellRing className="h-4 w-4" />
            <AlertTitle>Budget Warning</AlertTitle>
            <AlertDescription>
              You've spent 85% of your dining budget with 10 days left in the month.
            </AlertDescription>
          </Alert>
          
          <Alert className="bg-blue-50 text-blue-800 border-blue-200">
            <PiggyBank className="h-4 w-4" />
            <AlertTitle>Savings Opportunity</AlertTitle>
            <AlertDescription>
              Based on your spending patterns, you could save an additional $230/month by reducing subscription services.
            </AlertDescription>
          </Alert>
          
          <Alert className="bg-green-50 text-green-800 border-green-200">
            <TrendingUp className="h-4 w-4" />
            <AlertTitle>Investment Milestone</AlertTitle>
            <AlertDescription>
              Your investment portfolio has grown by 12% this year, outperforming your 10% target.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Financial Events</CardTitle>
            <CardDescription>Important dates and deadlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-red-100 p-2 rounded-full">
                <CreditCard className="h-5 w-5 text-red-700" />
              </div>
              <div>
                <h4 className="font-medium">Credit Card Payment Due</h4>
                <p className="text-sm text-muted-foreground">July 15th (5 days from now)</p>
                <p className="text-sm mt-1">$320 minimum payment required</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-blue-100 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <h4 className="font-medium">Quarterly Tax Payment</h4>
                <p className="text-sm text-muted-foreground">September 15th (2 months from now)</p>
                <p className="text-sm mt-1">Estimated amount: $1,200</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-green-100 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-green-700" />
              </div>
              <div>
                <h4 className="font-medium">Salary Increase</h4>
                <p className="text-sm text-muted-foreground">August 1st (3 weeks from now)</p>
                <p className="text-sm mt-1">Expected 3% annual increase</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Risk Indicators</CardTitle>
            <CardDescription>Potential issues requiring attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-red-100 p-2 rounded-full">
                <BadgeAlert className="h-5 w-5 text-red-700" />
              </div>
              <div>
                <h4 className="font-medium">Emergency Fund Below Target</h4>
                <p className="text-sm text-muted-foreground">Currently at 65% of 3-month target</p>
                <p className="text-sm mt-1">Recommendation: Add $150/month to reach goal by December</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-amber-100 p-2 rounded-full">
                <TrendingDown className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <h4 className="font-medium">Increasing Discretionary Spending</h4>
                <p className="text-sm text-muted-foreground">15% increase in the last 3 months</p>
                <p className="text-sm mt-1">Recommendation: Review entertainment and dining expenses</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border rounded-md">
              <div className="bg-blue-100 p-2 rounded-full">
                <CreditCard className="h-5 w-5 text-blue-700" />
              </div>
              <div>
                <h4 className="font-medium">Credit Utilization Rising</h4>
                <p className="text-sm text-muted-foreground">Currently at 28% (was 20% last month)</p>
                <p className="text-sm mt-1">Recommendation: Keep below 30% to maintain credit score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialAlerts;
