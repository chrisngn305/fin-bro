
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { cn } from "@/lib/utils";
import MotionCard from "../ui/MotionCard";

const ExpenseChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Demo data
  const expenseData = [
    { name: "Housing", value: 35, color: "#3b82f6" },
    { name: "Food", value: 20, color: "#10b981" },
    { name: "Transportation", value: 15, color: "#f59e0b" },
    { name: "Entertainment", value: 10, color: "#8b5cf6" },
    { name: "Utilities", value: 10, color: "#f43f5e" },
    { name: "Others", value: 10, color: "#6b7280" },
  ];

  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="font-medium">{payload[0].name}</p>
          <p className="font-semibold text-primary">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <MotionCard className="dashboard-grid-medium h-[380px]" delay={150}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Expense Breakdown</h3>
        <div className="text-sm text-muted-foreground">April 2023</div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expenseData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animationBegin={300}
              animationDuration={1000}
            >
              {expenseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="none"
                  className={cn(
                    "transition-opacity duration-200", 
                    activeIndex !== null && activeIndex !== index ? "opacity-60" : "opacity-100"
                  )}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span className="text-xs font-medium ml-1">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </MotionCard>
  );
};

export default ExpenseChart;
