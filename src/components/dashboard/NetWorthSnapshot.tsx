
import { ArrowUp } from "lucide-react";
import MotionCard from "../ui/MotionCard";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const NetWorthSnapshot = () => {
  // Demo data
  const netWorthData = [
    { month: "Jan", netWorth: 45000 },
    { month: "Feb", netWorth: 47500 },
    { month: "Mar", netWorth: 48800 },
    { month: "Apr", netWorth: 52000 },
    { month: "May", netWorth: 56000 },
    { month: "Jun", netWorth: 58500 },
    { month: "Jul", netWorth: 62000 }
  ];

  const currentNetWorth = netWorthData[netWorthData.length - 1].netWorth;
  const previousNetWorth = netWorthData[netWorthData.length - 2].netWorth;
  const growthPercent = ((currentNetWorth - previousNetWorth) / previousNetWorth * 100).toFixed(1);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="font-medium text-sm">{label}</p>
          <p className="font-semibold text-primary">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <MotionCard className="dashboard-grid-medium h-[380px]" delay={100} premium>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Net Worth</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-2xl font-bold">
              ${currentNetWorth.toLocaleString()}
            </p>
            <div className="flex items-center gap-0.5 text-green-600 text-sm font-medium">
              <ArrowUp size={14} />
              {growthPercent}%
            </div>
          </div>
        </div>
        <div className="px-2 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full">
          Last 6 months
        </div>
      </div>
      
      <div className="h-[270px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={netWorthData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="netWorth"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#8b5cf6" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </MotionCard>
  );
};

export default NetWorthSnapshot;
