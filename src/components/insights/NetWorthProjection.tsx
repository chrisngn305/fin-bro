
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock projection data
const mockProjectionData = [
  { month: "Jan", netWorth: 55000, assets: 75000, liabilities: 20000 },
  { month: "Feb", netWorth: 57000, assets: 77000, liabilities: 20000 },
  { month: "Mar", netWorth: 58500, assets: 78500, liabilities: 20000 },
  { month: "Apr", netWorth: 61000, assets: 80000, liabilities: 19000 },
  { month: "May", netWorth: 63000, assets: 81000, liabilities: 18000 },
  { month: "Jun", netWorth: 65500, assets: 82500, liabilities: 17000 },
  { month: "Jul", netWorth: 68000, assets: 84000, liabilities: 16000 },
  { month: "Aug", netWorth: 70500, assets: 85500, liabilities: 15000 },
  { month: "Sep", netWorth: 73000, assets: 87000, liabilities: 14000 },
  { month: "Oct", netWorth: 76000, assets: 89000, liabilities: 13000 },
  { month: "Nov", netWorth: 79000, assets: 91000, liabilities: 12000 },
  { month: "Dec", netWorth: 82000, assets: 93000, liabilities: 11000 },
  { month: "Jan +1y", netWorth: 85000, assets: 95000, liabilities: 10000 },
  { month: "Feb +1y", netWorth: 88000, assets: 97000, liabilities: 9000 },
  { month: "Mar +1y", netWorth: 91000, assets: 99000, liabilities: 8000 },
  { month: "Apr +1y", netWorth: 94000, assets: 101000, liabilities: 7000 },
  { month: "May +1y", netWorth: 97000, assets: 103000, liabilities: 6000 },
  { month: "Jun +1y", netWorth: 100000, assets: 105000, liabilities: 5000 },
];

const NetWorthProjection = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Net Worth Projection (18 Months)</CardTitle>
          <CardDescription>Based on your current saving rate and debt reduction plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockProjectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fontSize: 12 }}
                  interval={2}
                />
                <YAxis 
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="assets" 
                  stroke="#4ade80" 
                  strokeWidth={2} 
                  dot={{ r: 1 }}
                  activeDot={{ r: 6 }}
                  name="Assets"
                />
                <Line 
                  type="monotone" 
                  dataKey="liabilities" 
                  stroke="#f43f5e" 
                  strokeWidth={2} 
                  dot={{ r: 1 }}
                  activeDot={{ r: 6 }}
                  name="Liabilities"
                />
                <Line 
                  type="monotone" 
                  dataKey="netWorth" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ r: 1 }}
                  activeDot={{ r: 6 }}
                  name="Net Worth"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Projected Net Worth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">$100,000</span>
              <span className="text-sm text-muted-foreground">By June next year</span>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <span className="mr-1">↑</span>
                <span>+81.8% from current</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Monthly Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">3.8%</span>
              <span className="text-sm text-muted-foreground">Average monthly increase</span>
              <div className="flex items-center mt-2 text-blue-500 text-sm">
                <span className="mr-1">↑</span>
                <span>Above 3% target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Debt Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">-75%</span>
              <span className="text-sm text-muted-foreground">Projected liability decrease</span>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <span className="mr-1">↑</span>
                <span>Ahead of schedule</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NetWorthProjection;
