
import { ArrowUpRight, ArrowDownRight, Wallet, PiggyBank } from "lucide-react";
import MotionCard from "../ui/MotionCard";

const FinancialSummary = () => {
  // Demo data
  const summaryData = [
    {
      title: "Total Balance",
      amount: "$12,560.80",
      change: "+2.3%",
      isPositive: true,
      icon: Wallet,
      color: "from-blue-500 to-blue-600",
      delay: 100
    },
    {
      title: "Monthly Income",
      amount: "$4,820.00",
      change: "+12.5%",
      isPositive: true,
      icon: ArrowUpRight,
      color: "from-green-500 to-green-600",
      delay: 200
    },
    {
      title: "Monthly Expenses",
      amount: "$2,368.50",
      change: "-3.1%",
      isPositive: true,
      icon: ArrowDownRight,
      color: "from-orange-500 to-orange-600",
      delay: 300
    },
    {
      title: "Savings",
      amount: "$24,895.20",
      change: "+5.4%",
      isPositive: true,
      icon: PiggyBank,
      color: "from-purple-500 to-purple-600",
      delay: 400
    }
  ];

  return (
    <div className="dashboard-grid">
      {summaryData.map((item, index) => (
        <MotionCard 
          key={index} 
          className="transition-transform duration-300 hover:translate-y-[-4px]"
          delay={item.delay}
          premium
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              <h3 className="text-2xl font-bold mt-1 tracking-tight">{item.amount}</h3>
            </div>
            <div className={`rounded-full p-2 bg-gradient-to-br ${item.color} text-white`}>
              <item.icon size={18} />
            </div>
          </div>
          <div className="flex items-center mt-3">
            <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${
              item.isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}>
              {item.change}
            </span>
            <span className="text-xs text-muted-foreground ml-2">vs last month</span>
          </div>
        </MotionCard>
      ))}
    </div>
  );
};

export default FinancialSummary;
