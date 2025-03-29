
import { useState } from "react";
import { Goal } from "@/types/goal";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, BarChart3, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface GoalDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  goal: Goal | null;
}

const GoalDetailsDrawer = ({ open, onOpenChange, goal }: GoalDetailsDrawerProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!goal) return null;

  const progress = Math.round((goal.current / goal.target) * 100);
  const remaining = goal.target - goal.current;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const today = new Date();
    const deadlineDate = new Date(goal.deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysRemaining();

  // Monthly needed to reach goal
  const calculateMonthlyRequired = () => {
    const today = new Date();
    const deadlineDate = new Date(goal.deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30.44); // Average month length
    
    return diffMonths > 0 ? remaining / diffMonths : remaining;
  };

  const monthlyRequired = calculateMonthlyRequired();

  // Generate timeline data
  const getTimelineData = () => {
    // Sort contributions by date
    const sortedContributions = [...goal.contributions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    const data = [];
    let runningTotal = 0;
    
    // Start with initial date
    data.push({
      date: formatDate(goal.startDate),
      amount: runningTotal,
    });
    
    // Add each contribution
    sortedContributions.forEach(contribution => {
      runningTotal += contribution.amount;
      data.push({
        date: formatDate(contribution.date),
        amount: runningTotal,
      });
    });
    
    // Add projection to target
    if (runningTotal < goal.target) {
      data.push({
        date: formatDate(goal.deadline),
        amount: goal.target,
        projected: true,
      });
    }
    
    return data;
  };

  const timelineData = getTimelineData();
  
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <div className="max-w-md mx-auto">
          <DrawerHeader className="text-left">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 absolute left-4 top-4"
              onClick={() => onOpenChange(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <DrawerTitle className="text-xl font-bold">{goal.name}</DrawerTitle>
            <DrawerDescription>
              {formatCurrency(goal.current)} of {formatCurrency(goal.target)} • {progress}% complete
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <Progress value={progress} className="h-2 mb-6" />

            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Due Date</span>
                      </div>
                      <p className="text-lg font-semibold mt-1">{formatDate(goal.deadline)}</p>
                      <p className="text-sm text-muted-foreground">{daysRemaining} days remaining</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Remaining</span>
                      </div>
                      <p className="text-lg font-semibold mt-1">{formatCurrency(remaining)}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatCurrency(monthlyRequired)}/month needed
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h4 className="font-medium">Goal Details</h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Start Date</p>
                        <p className="font-medium">{formatDate(goal.startDate)}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Category</p>
                        <p className="font-medium capitalize">{goal.category.replace('-', ' ')}</p>
                      </div>
                    </div>

                    {goal.linkedFund && (
                      <div className="text-sm">
                        <p className="text-muted-foreground">Linked Fund</p>
                        <p className="font-medium">
                          {goal.linkedFund === 'emergency-fund' && 'Emergency Fund'}
                          {goal.linkedFund === 'house-fund' && 'House Fund'}
                          {goal.linkedFund === 'travel-fund' && 'Travel Fund'}
                          {goal.linkedFund === 'car-fund' && 'Car Fund'}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-4 py-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4">Progress Timeline</h4>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={timelineData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                          <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis
                            dataKey="date"
                            tickMargin={10}
                            angle={-45}
                            textAnchor="end"
                            height={60}
                            tick={{ fontSize: 12 }}
                          />
                          <YAxis
                            tickFormatter={(value) => `$${value}`}
                            tick={{ fontSize: 12 }}
                          />
                          <Tooltip
                            formatter={(value) => [`$${value}`, 'Amount']}
                            labelFormatter={(label) => `Date: ${label}`}
                          />
                          <Area
                            type="monotone"
                            dataKey="amount"
                            stroke="#9b87f5"
                            fillOpacity={1}
                            fill="url(#colorAmount)"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contributions" className="py-4">
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-medium mb-4">Contribution History</h4>
                    {goal.contributions.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {[...goal.contributions]
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((contribution) => (
                              <TableRow key={contribution.id}>
                                <TableCell>{formatDate(contribution.date)}</TableCell>
                                <TableCell>{formatCurrency(contribution.amount)}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-center text-muted-foreground my-4">No contributions yet</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GoalDetailsDrawer;
