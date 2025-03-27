
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  ComposedChart, 
  Bar, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for monthly cash flow
const data = [
  { month: 'Jan', income: 4200, expenses: 3800, savings: 400 },
  { month: 'Feb', income: 4500, expenses: 3900, savings: 600 },
  { month: 'Mar', income: 4300, expenses: 4100, savings: 200 },
  { month: 'Apr', income: 5000, expenses: 4200, savings: 800 },
  { month: 'May', income: 4800, expenses: 4300, savings: 500 },
  { month: 'Jun', income: 5200, expenses: 4400, savings: 800 },
];

const MonthlyFlowChart = () => {
  return (
    <Card className="dashboard-grid-medium">
      <CardHeader>
        <CardTitle>Monthly Cash Flow</CardTitle>
        <CardDescription>
          Income vs. expenses month by month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ChartContainer
            config={{
              income: {
                label: "Income",
                theme: {
                  light: "#4ade80",
                  dark: "#4ade80"
                }
              },
              expenses: {
                label: "Expenses",
                theme: {
                  light: "#f43f5e",
                  dark: "#f43f5e"
                }
              },
              savings: {
                label: "Savings",
                theme: {
                  light: "#3b82f6",
                  dark: "#3b82f6"
                }
              }
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({active, payload, label}) => {
                    if (active && payload && payload.length) {
                      return (
                        <ChartTooltipContent 
                          className="bg-white dark:bg-gray-800"
                          indicator="line"
                          formatter={(value) => [`$${value}`, '']}
                          label={`${label} 2023`}
                          payload={payload}
                        />
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar dataKey="income" name="Income" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="savings"
                  name="Savings"
                  stroke="var(--color-savings)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyFlowChart;
