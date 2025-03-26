
import { CreditCard, Landmark, Wallet } from "lucide-react";
import MotionCard from "../ui/MotionCard";

const AccountsSummary = () => {
  // Demo data
  const accounts = [
    {
      name: "Main Checking",
      institution: "Chase Bank",
      balance: "$7,245.80",
      icon: Landmark,
      iconColor: "bg-blue-500",
      change: "+$250.45",
      positive: true
    },
    {
      name: "Savings Account",
      institution: "Wells Fargo",
      balance: "$24,895.20",
      icon: Wallet,
      iconColor: "bg-green-500",
      change: "+$1,200.00",
      positive: true
    },
    {
      name: "Credit Card",
      institution: "American Express",
      balance: "$1,580.00",
      icon: CreditCard,
      iconColor: "bg-purple-500",
      change: "-$320.18",
      positive: false
    }
  ];
  
  return (
    <MotionCard className="col-span-1 md:col-span-1 xl:col-span-2 h-[350px]" delay={350}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Your Accounts</h3>
        <button className="text-sm text-primary font-medium hover:underline">
          View All
        </button>
      </div>
      
      <div className="space-y-3 overflow-auto pr-2 max-h-[275px]">
        {accounts.map((account, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${account.iconColor} text-white`}>
                <account.icon size={16} />
              </div>
              <div>
                <h4 className="font-medium">{account.name}</h4>
                <p className="text-xs text-muted-foreground">{account.institution}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{account.balance}</p>
              <p className={`text-xs ${account.positive ? 'text-green-600' : 'text-red-500'}`}>
                {account.change} today
              </p>
            </div>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

export default AccountsSummary;
