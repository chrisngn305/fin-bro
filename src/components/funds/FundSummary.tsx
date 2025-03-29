
import { Fund } from "@/types/fund";
import { Card, CardContent } from "@/components/ui/card";
import { PiggyBank, TrendingUp, DollarSign } from "lucide-react";

interface FundSummaryProps {
  funds: Fund[];
}

const FundSummary = ({ funds }: FundSummaryProps) => {
  // Calculate summary statistics
  const totalBalance = funds.reduce((sum, fund) => sum + fund.balance, 0);
  const totalTarget = funds.reduce((sum, fund) => sum + fund.target, 0);
  const totalProgress = totalTarget > 0 ? Math.round((totalBalance / totalTarget) * 100) : 0;
  
  const emergencyFunds = funds.filter(fund => fund.type === 'emergency');
  const emergencyBalance = emergencyFunds.reduce((sum, fund) => sum + fund.balance, 0);
  const emergencyTarget = emergencyFunds.reduce((sum, fund) => sum + fund.target, 0);
  
  const sinkingFunds = funds.filter(fund => fund.type === 'sinking');
  const sinkingBalance = sinkingFunds.reduce((sum, fund) => sum + fund.balance, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <PiggyBank className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Total Funds</p>
              <h4 className="text-2xl font-semibold mt-1">{formatCurrency(totalBalance)}</h4>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span>{formatCurrency(totalTarget)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <span>{totalProgress}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Active Funds</span>
              <span>{funds.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-red-500/10 text-red-500">
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Emergency Fund</p>
              <h4 className="text-2xl font-semibold mt-1">{formatCurrency(emergencyBalance)}</h4>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span>{formatCurrency(emergencyTarget)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span>
                {emergencyTarget > 0 
                  ? Math.round((emergencyBalance / emergencyTarget) * 100)
                  : 0}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fund Count</span>
              <span>{emergencyFunds.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium">Sinking Funds</p>
              <h4 className="text-2xl font-semibold mt-1">{formatCurrency(sinkingBalance)}</h4>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Fund Due</span>
              <span>
                {sinkingFunds.length > 0 
                  ? new Date(sinkingFunds.sort((a, b) => 
                      new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
                    )[0].dueDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  : 'None'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fund Count</span>
              <span>{sinkingFunds.length}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundSummary;
