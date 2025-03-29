
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Info } from "lucide-react";

// Mock cashflow projection data - income vs expenses
const cashflowData = [
  { month: "Jul", income: 4500, expenses: 3900, balance: 600 },
  { month: "Aug", income: 4500, expenses: 4100, balance: 400 },
  { month: "Sep", income: 4700, expenses: 4000, balance: 700 },
  { month: "Oct", income: 4500, expenses: 4200, balance: 300 },
  { month: "Nov", income: 5000, expenses: 4300, balance: 700 },
  { month: "Dec", income: 5500, expenses: 5000, balance: 500 }, // holiday spending
  { month: "Jan", income: 4500, expenses: 4200, balance: 300 },
  { month: "Feb", income: 4500, expenses: 3800, balance: 700 },
  { month: "Mar", income: 4800, expenses: 4100, balance: 700 },
];

// Mock projection data
const projectionData = [
  { month: "Apr", optimistic: 800, expected: 600, conservative: 400 },
  { month: "May", optimistic: 900, expected: 650, conservative: 350 },
  { month: "Jun", optimistic: 950, expected: 700, conservative: 300 },
  { month: "Jul", optimistic: 1000, expected: 650, conservative: 250 },
  { month: "Aug", optimistic: 1100, expected: 750, conservative: 350 },
  { month: "Sep", optimistic: 1200, expected: 800, conservative: 400 },
];

const CashflowForecasting = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Average Monthly Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">$4,722</span>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <span className="mr-1">↑</span>
                <span>+4.9% from last quarter</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Average Monthly Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">$4,178</span>
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <span className="mr-1">↑</span>
                <span>+3.2% from last quarter</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Average Monthly Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">$544</span>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <span className="mr-1">↑</span>
                <span>+2.1% from last quarter</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cashflow Forecast (9 Months)</CardTitle>
          <CardDescription>Historical and projected monthly income vs expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stackId="1"
                  stroke="#4ade80" 
                  fill="#4ade80"
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  stackId="2"
                  stroke="#f43f5e" 
                  fill="#f43f5e"
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>December Spending Alert</AlertTitle>
            <AlertDescription>
              Based on historical data, your December expenses are typically 20% higher due to holiday spending.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Balance Projection (Next 6 Months)</CardTitle>
          <CardDescription>Optimistic, expected, and conservative scenarios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, undefined]} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="optimistic" 
                  stroke="#4ade80" 
                  strokeWidth={2}
                  dot={{ fill: '#4ade80', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expected" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="conservative" 
                  stroke="#f97316" 
                  strokeWidth={2}
                  dot={{ fill: '#f97316', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <Alert className="mt-4 bg-amber-50 text-amber-800 border-amber-200">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Cash Buffer Warning</AlertTitle>
            <AlertDescription>
              Your conservative projection shows limited cash buffer. Consider reducing discretionary spending to increase your emergency fund.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default CashflowForecasting;
