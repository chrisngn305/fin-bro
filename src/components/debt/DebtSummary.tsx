
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Mock data for debt summary
const debtData = [
  { name: "Mortgage", value: 250000, color: "#9b87f5" },
  { name: "Car Loan", value: 18000, color: "#F97316" },
  { name: "Student Loans", value: 35000, color: "#0EA5E9" },
  { name: "Credit Cards", value: 7500, color: "#D946EF" },
  { name: "Personal Loan", value: 5000, color: "#16A34A" },
];

const DebtSummary = () => {
  const totalDebt = debtData.reduce((sum, item) => sum + item.value, 0);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Total Debt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary">{formatCurrency(totalDebt)}</span>
              <p className="text-sm text-muted-foreground">Total outstanding balance</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {debtData.map((debt) => (
                <div key={debt.name} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div 
                      className="h-3 w-3 rounded-full" 
                      style={{ backgroundColor: debt.color }}
                    />
                    <span className="text-sm font-medium">{debt.name}</span>
                  </div>
                  <p className="text-lg font-semibold">{formatCurrency(debt.value)}</p>
                  <p className="text-xs text-muted-foreground">{Math.round((debt.value / totalDebt) * 100)}% of total</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Debt Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                ...Object.fromEntries(
                  debtData.map((item) => [
                    item.name,
                    { color: item.color, label: item.name },
                  ])
                ),
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={debtData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {debtData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DebtSummary;
