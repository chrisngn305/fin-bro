
import { PiggyBank } from "lucide-react";
import MotionCard from "../ui/MotionCard";
import { Progress } from "@/components/ui/progress";

const FundsSummary = () => {
  // Demo data
  const funds = [
    {
      name: "Emergency Fund",
      balance: 10000,
      target: 15000,
      progress: 67,
      color: "bg-blue-500"
    },
    {
      name: "Retirement",
      balance: 45000,
      target: null,
      progress: null,
      color: "bg-purple-500"
    }
  ];

  return (
    <MotionCard className="h-full" delay={350}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Top Funds</h3>
        <button className="text-sm text-primary font-medium hover:underline">
          Manage
        </button>
      </div>

      <div className="space-y-3">
        {funds.map((fund, index) => (
          <div key={index} className="p-3 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-1.5 rounded-full ${fund.color} text-white`}>
                <PiggyBank size={16} />
              </div>
              <div>
                <h4 className="font-medium">{fund.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Balance: ${fund.balance.toLocaleString()}
                </p>
              </div>
            </div>
            
            {fund.target !== null && (
              <div className="mt-2 space-y-1">
                <Progress value={fund.progress} className="h-1.5" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Target: ${fund.target.toLocaleString()}</span>
                  <span>{fund.progress}% funded</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

export default FundsSummary;
