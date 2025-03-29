
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock category spending trends
const mockCategoryData = [
  { name: "Housing", current: 1200, previous: 1150 },
  { name: "Food", current: 580, previous: 620 },
  { name: "Transport", current: 250, previous: 230 },
  { name: "Entertainment", current: 180, previous: 210 },
  { name: "Shopping", current: 320, previous: 350 },
  { name: "Health", current: 140, previous: 120 },
  { name: "Utilities", current: 230, previous: 220 },
];

// Mock monthly trend data
const monthlyTrendData = [
  { month: "Jan", amount: 2750 },
  { month: "Feb", amount: 2900 },
  { month: "Mar", amount: 2800 },
  { month: "Apr", amount: 3100 },
  { month: "May", amount: 2950 },
  { month: "Jun", amount: 2900 },
];

// Distribution data for pie chart
const pieData = [
  { name: "Housing", value: 1200, color: "#9b87f5" },
  { name: "Food", value: 580, color: "#F97316" },
  { name: "Transport", value: 250, color: "#0EA5E9" },
  { name: "Entertainment", value: 180, color: "#D946EF" },
  { name: "Shopping", value: 320, color: "#ea384c" },
  { name: "Health", value: 140, color: "#16A34A" },
  { name: "Utilities", value: 230, color: "#6E59A5" },
];

// Weekly spending data
const weeklySpendingData = [
  { day: "Mon", amount: 45 },
  { day: "Tue", amount: 67 },
  { day: "Wed", amount: 32 },
  { day: "Thu", amount: 120 },
  { day: "Fri", amount: 156 },
  { day: "Sat", amount: 180 },
  { day: "Sun", amount: 110 },
];

const SpendingTrends = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
            <CardDescription>Total spending over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value}`, 'Spending']} />
                  <Bar dataKey="amount" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spending Distribution</CardTitle>
            <CardDescription>Current month breakdown by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    labelLine
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value}`, null]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Category Comparison</CardTitle>
          <CardDescription>Current month vs previous month spending by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockCategoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, null]} />
                <Legend />
                <Bar dataKey="current" name="Current Month" fill="#3b82f6" />
                <Bar dataKey="previous" name="Previous Month" fill="#93c5fd" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>This Week's Spending</CardTitle>
          <CardDescription>Daily spending amounts for the current week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklySpendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value}`, 'Spending']} />
                <Bar dataKey="amount" fill="#16A34A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpendingTrends;
