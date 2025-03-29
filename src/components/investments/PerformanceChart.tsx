
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Mock data for the performance chart
const performanceData = [
  { month: 'Jan', value: 240000 },
  { month: 'Feb', value: 238500 },
  { month: 'Mar', value: 252000 },
  { month: 'Apr', value: 260000 },
  { month: 'May', value: 265500 },
  { month: 'Jun', value: 262000 },
  { month: 'Jul', value: 268000 },
  { month: 'Aug', value: 273000 },
  { month: 'Sep', value: 270000 },
  { month: 'Oct', value: 272000 },
  { month: 'Nov', value: 280000 },
  { month: 'Dec', value: 286000 },
];

const timeRanges = ["1M", "3M", "6M", "YTD", "1Y", "5Y", "ALL"];

const PerformanceChart = () => {
  const [selectedRange, setSelectedRange] = useState("1Y");
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Portfolio Performance</CardTitle>
        <div className="flex gap-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              className={`px-2 py-1 text-xs rounded-md ${
                selectedRange === range
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            config={{
              value: { color: "#9b87f5" },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                  tickFormatter={(value) => `$${(value / 1000)}k`}
                  domain={['dataMin - 10000', 'dataMax + 10000']}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent 
                      formatter={(value) => formatCurrency(Number(value))}
                    />
                  }
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#9b87f5" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
