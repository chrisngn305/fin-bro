
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BadgeDollarSign, 
  Calendar, 
  CreditCard, 
  DollarSign, 
  Home, 
  PiggyBank, 
  ShoppingBag, 
  Trophy, 
  TrendingDown, 
  TrendingUp, 
  Wallet 
} from "lucide-react";

const CustomInsights = () => {
  return (
    <div className="space-y-6">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            <span>Debt Reduction Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">Your debt reduction strategy is working well!</p>
          <p className="mb-4">You've reduced your total debt by <span className="font-medium text-green-600">$4,300 (15.2%)</span> over the past 6 months, which is faster than 82% of similar users.</p>
          <p className="text-sm text-muted-foreground">At this rate, you'll be debt-free in approximately 3.5 years, which is 1.2 years earlier than your original plan.</p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-5 w-5 text-green-500" />
            <span>Savings Behavior Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">Your consistent saving habits are building a strong foundation!</p>
          <p className="mb-4">You've maintained an average monthly savings rate of <span className="font-medium text-green-600">12.3%</span> of your income, which is above the recommended 10% minimum.</p>
          <p className="text-sm text-muted-foreground">If you increase your savings rate to 15%, you could reach your retirement goals 4 years earlier.</p>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-amber-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-amber-500" />
            <span>Spending Pattern Insight</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">We've identified a spending pattern worth your attention.</p>
          <p className="mb-4">Your weekend spending is consistently <span className="font-medium text-amber-600">73% higher</span> than weekday spending, primarily in dining and entertainment categories.</p>
          <p className="text-sm text-muted-foreground">Setting a weekend budget could help you save an additional $220-$280 per month.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-purple-500" />
              <span>Credit Optimization</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">You could be getting more from your credit cards.</p>
            <p>Based on your spending patterns, switching to a different rewards card could earn you an additional <span className="font-medium text-purple-600">$340-$420</span> in rewards annually.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-500" />
              <span>Bill Payment Efficiency</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Your bill payment timing could be optimized.</p>
            <p>Adjusting your bill payment schedule could improve your cash flow and potentially save <span className="font-medium text-indigo-600">$15-$25</span> monthly in overdraft or late fees.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              <span>Subscription Audit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">You have several unused subscriptions.</p>
            <p>We've identified <span className="font-medium text-red-600">5 subscriptions</span> with minimal usage in the past 3 months, costing you approximately <span className="font-medium text-red-600">$63.45</span> monthly.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-sky-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-sky-500" />
              <span>Financial Achievement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">Congratulations on your progress!</p>
            <p>You've consistently stayed under budget in your discretionary spending categories for <span className="font-medium text-sky-600">4 consecutive months</span>, better than 76% of users with similar incomes.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-t-4 border-t-emerald-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Home className="h-4 w-4 text-emerald-500" />
              <span>Housing Expense Ratio</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">28.3%</span>
              <span className="text-xs text-muted-foreground">of total income</span>
              <div className="flex items-center mt-1 text-green-500 text-xs">
                <span className="mr-1">✓</span>
                <span>Below 30% recommendation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-rose-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <BadgeDollarSign className="h-4 w-4 text-rose-500" />
              <span>Debt-to-Income Ratio</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">32.7%</span>
              <span className="text-xs text-muted-foreground">of monthly income</span>
              <div className="flex items-center mt-1 text-amber-500 text-xs">
                <span className="mr-1">!</span>
                <span>Slightly above 30% target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-blue-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Wallet className="h-4 w-4 text-blue-500" />
              <span>Savings Rate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">12.3%</span>
              <span className="text-xs text-muted-foreground">of monthly income</span>
              <div className="flex items-center mt-1 text-green-500 text-xs">
                <span className="mr-1">✓</span>
                <span>Above 10% recommendation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomInsights;
