
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Briefcase, DollarSign } from "lucide-react";

// Mock data for investment overview
const investmentData = [
  { name: "Stocks", value: 120000, color: "#9b87f5" },
  { name: "Bonds", value: 45000, color: "#F97316" },
  { name: "Real Estate", value: 75000, color: "#0EA5E9" },
  { name: "Crypto", value: 12000, color: "#D946EF" },
  { name: "Cash", value: 28000, color: "#16A34A" },
];

const InvestmentOverview = () => {
  const totalValue = investmentData.reduce((sum, item) => sum + item.value, 0);
  const monthlyChange = 3250;
  const monthlyChangePercent = 1.15;
  const yearlyReturn = 24850;
  const yearlyReturnPercent = 9.8;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-[250px]">
                <ChartContainer
                  config={{
                    ...Object.fromEntries(
                      investmentData.map((item) => [
                        item.name,
                        { color: item.color, label: item.name },
                      ])
                    ),
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={investmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        paddingAngle={2}
                      >
                        {investmentData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            stroke="transparent"
                          />
                        ))}
                      </Pie>
                      <ChartTooltip>
                        <ChartTooltipContent />
                      </ChartTooltip>
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              <div className="space-y-4 flex flex-col justify-center">
                <div>
                  <span className="text-sm text-muted-foreground">Total Portfolio Value</span>
                  <div className="text-3xl font-bold">{formatCurrency(totalValue)}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4">
                  {investmentData.map((asset) => (
                    <div key={asset.name} className="flex items-center gap-2">
                      <div 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: asset.color }}
                      />
                      <div className="text-sm">
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-muted-foreground">
                          {Math.round((asset.value / totalValue) * 100)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Monthly Change</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    {formatCurrency(monthlyChange)}
                  </span>
                  <span className={`ml-2 text-sm ${monthlyChangePercent >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {monthlyChangePercent >= 0 ? (
                      <TrendingUp className="inline h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="inline h-4 w-4 mr-1" />
                    )}
                    {monthlyChangePercent}%
                  </span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-sm text-muted-foreground">Yearly Return</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">
                    {formatCurrency(yearlyReturn)}
                  </span>
                  <span className={`ml-2 text-sm ${yearlyReturnPercent >= 0 ? "text-green-500" : "text-red-500"}`}>
                    {yearlyReturnPercent >= 0 ? (
                      <TrendingUp className="inline h-4 w-4 mr-1" />
                    ) : (
                      <TrendingDown className="inline h-4 w-4 mr-1" />
                    )}
                    {yearlyReturnPercent}%
                  </span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentOverview;
