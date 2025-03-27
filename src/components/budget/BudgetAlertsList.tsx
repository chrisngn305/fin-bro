
import { AlertCircle, AlertTriangle, TrendingDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Mock alerts data
const mockAlerts = [
  {
    id: '1',
    type: 'warning',
    title: 'Shopping Over Budget',
    description: 'You've spent $40 over your Shopping budget this month',
    date: '2023-06-18',
    icon: <AlertTriangle className="h-5 w-5 text-amber-500" />
  },
  {
    id: '2',
    type: 'danger',
    title: 'Entertainment Over Budget',
    description: 'You've spent $15 over your Entertainment budget this month',
    date: '2023-06-15',
    icon: <AlertCircle className="h-5 w-5 text-red-500" />
  },
  {
    id: '3',
    type: 'info',
    title: 'Utilities Trending Higher',
    description: 'Your utility spending is 15% higher than last month',
    date: '2023-06-12',
    icon: <TrendingDown className="h-5 w-5 text-blue-500" />
  }
];

const BudgetAlertsList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Alerts</CardTitle>
        <CardDescription>
          Recent notifications about your budget
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 rounded-lg border ${
                alert.type === 'warning' 
                  ? 'bg-amber-50 border-amber-200' 
                  : alert.type === 'danger'
                    ? 'bg-red-50 border-red-200'
                    : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex gap-3">
                <div className="mt-0.5">
                  {alert.icon}
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                  <p className="text-sm opacity-90">{alert.description}</p>
                  <p className="text-xs mt-2 opacity-70">{alert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetAlertsList;
