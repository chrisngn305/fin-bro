
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock income history data
const mockIncomeData = [
  { month: 'Jan', salary: 3200, freelance: 600, investments: 150 },
  { month: 'Feb', salary: 3200, freelance: 800, investments: 160 },
  { month: 'Mar', salary: 3200, freelance: 500, investments: 155 },
  { month: 'Apr', salary: 3400, freelance: 700, investments: 170 },
  { month: 'May', salary: 3400, freelance: 950, investments: 175 },
  { month: 'Jun', salary: 3400, freelance: 500, investments: 180 },
];

// Mock income transactions
const mockIncomeTransactions = [
  { id: '1', date: '2023-06-01', source: 'Salary', category: 'Income', amount: 3400, description: 'Monthly salary' },
  { id: '2', date: '2023-05-28', source: 'Freelance', category: 'Income', amount: 350, description: 'Web design project' },
  { id: '3', date: '2023-05-15', source: 'Freelance', category: 'Income', amount: 600, description: 'Logo design' },
  { id: '4', date: '2023-05-10', source: 'Investments', category: 'Income', amount: 175, description: 'Dividend payment' },
  { id: '5', date: '2023-05-01', source: 'Salary', category: 'Income', amount: 3400, description: 'Monthly salary' },
];

const IncomeHistory = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Income History</CardTitle>
        <CardDescription>
          Track your income sources over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart">
          <TabsList className="mb-4">
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chart" className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockIncomeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSalary" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFreelance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInvestments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <Tooltip 
                  formatter={(value) => [`$${value}`, '']}
                  labelFormatter={(label) => `${label} 2023`}
                />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="salary" 
                  name="Salary"
                  stroke="#8884d8" 
                  fillOpacity={1} 
                  fill="url(#colorSalary)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="freelance" 
                  name="Freelance"
                  stroke="#82ca9d" 
                  fillOpacity={1} 
                  fill="url(#colorFreelance)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="investments" 
                  name="Investments"
                  stroke="#ffc658" 
                  fillOpacity={1} 
                  fill="url(#colorInvestments)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="transactions">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockIncomeTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.source}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${transaction.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default IncomeHistory;
