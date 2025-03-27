
import { ChartContainer, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";
import MotionCard from "../ui/MotionCard";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer 
} from "recharts";

const MonthlyFlowChart = () => {
  // Demo data
  const cashflowData = [
    { month: "Jan", income: 5200, expenses: 3800, savings: 1400 },
    { month: "Feb", income: 5200, expenses: 4100, savings: 1100 },
    { month: "Mar", income: 5350, expenses: 3950, savings: 1400 },
    { month: "Apr", income: 5800, expenses: 4200, savings: 1600 },
    { month: "May", income: 5800, expenses: 4300, savings: 1500 },
    { month: "Jun", income: 6200, expenses: 4100, savings: 2100 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="font-medium">{label}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Income: <span className="font-semibold">${payload[0].value.toLocaleString()}</span>
            </p>
            <p className="text-sm">
              <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Expenses: <span className="font-semibold">${payload[1].value.toLocaleString()}</span>
            </p>
            <p className="text-sm">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Savings: <span className="font-semibold">${payload[2].value.toLocaleString()}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const chartConfig = {
    income: { theme: { light: "#10b981" } },
    expenses: { theme: { light: "#f97316" } },
    savings: { theme: { light: "#3b82f6" } }
  };

  return (
    <MotionCard className="dashboard-grid-medium h-[380px]" delay={150} premium>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Monthly Cashflow</h3>
        <div className="text-sm text-muted-foreground">Last 6 months</div>
      </div>

      <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={cashflowData}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend 
                formatter={(value) => <span style={{ color: '#666', fontSize: '12px' }}>{value}</span>}
                iconType="circle"
                iconSize={8}
              />
              <Bar dataKey="income" name="Income" stackId="a" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" name="Expenses" stackId="b" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="savings" name="Savings" fill="var(--color-savings)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </MotionCard>
  );
};

export default MonthlyFlowChart;
