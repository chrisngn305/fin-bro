
import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BudgetAlertsList = () => {
  const [currentTab, setCurrentTab] = useState("current");
  
  // Mock data for budget alerts
  const currentAlerts = [
    {
      id: "1",
      category: "Dining Out",
      budget: 300,
      spent: 275,
      percentSpent: 92,
      remaining: 25,
      severity: "warning"
    },
    {
      id: "2",
      category: "Entertainment",
      budget: 150,
      spent: 165,
      percentSpent: 110,
      remaining: -15,
      severity: "danger"
    },
    {
      id: "3",
      category: "Shopping",
      budget: 250,
      spent: 220,
      percentSpent: 88,
      remaining: 30,
      severity: "warning"
    }
  ];
  
  const pastAlerts = [
    {
      id: "4",
      category: "Dining Out",
      budget: 300,
      spent: 345,
      percentSpent: 115,
      remaining: -45,
      severity: "danger",
      month: "March"
    },
    {
      id: "5",
      category: "Groceries",
      budget: 400,
      spent: 430,
      percentSpent: 108,
      remaining: -30,
      severity: "danger",
      month: "March"
    },
    {
      id: "6",
      category: "Transportation",
      budget: 200,
      spent: 185,
      percentSpent: 93,
      remaining: 15,
      severity: "warning",
      month: "February"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle>Budget Alerts</CardTitle>
          </div>
          <Badge variant="outline" className="text-xs">
            {currentAlerts.length} alerts
          </Badge>
        </div>
        <CardDescription>
          Categories that are near or over budget
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0">
        <Tabs defaultValue="current" value={currentTab} onValueChange={setCurrentTab}>
          <div className="px-4">
            <TabsList className="w-full">
              <TabsTrigger value="current" className="flex-1">Current Month</TabsTrigger>
              <TabsTrigger value="past" className="flex-1">Past Alerts</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="current" className="pt-2">
            <div className="space-y-1">
              {currentAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`border-l-4 ${
                    alert.severity === "danger" ? "border-red-500" : "border-amber-500"
                  } bg-muted/50 p-3`}
                >
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">{alert.category}</div>
                    <div 
                      className={`text-sm font-medium ${
                        alert.severity === "danger" ? "text-red-500" : "text-amber-500"
                      }`}
                    >
                      {alert.percentSpent}% spent
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>Budget: ${alert.budget}</div>
                    <div>
                      {alert.remaining < 0 
                        ? `$${Math.abs(alert.remaining)} over budget` 
                        : `$${alert.remaining} remaining`}
                    </div>
                  </div>
                </div>
              ))}
              
              {currentAlerts.length === 0 && (
                <div className="text-center py-6 text-muted-foreground">
                  No budget alerts this month
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="pt-2">
            <div className="space-y-1">
              {pastAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`border-l-4 ${
                    alert.severity === "danger" ? "border-red-500" : "border-amber-500"
                  } bg-muted/50 p-3`}
                >
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">
                      {alert.category}
                      <span className="text-xs text-muted-foreground ml-2">
                        {alert.month}
                      </span>
                    </div>
                    <div 
                      className={`text-sm font-medium ${
                        alert.severity === "danger" ? "text-red-500" : "text-amber-500"
                      }`}
                    >
                      {alert.percentSpent}% spent
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>Budget: ${alert.budget}</div>
                    <div>
                      {alert.remaining < 0 
                        ? `$${Math.abs(alert.remaining)} over budget` 
                        : `$${alert.remaining} remaining`}
                    </div>
                  </div>
                </div>
              ))}
              
              {pastAlerts.length === 0 && (
                <div className="text-center py-6 text-muted-foreground">
                  No past budget alerts
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="p-4 pt-2">
          <Button variant="outline" size="sm" className="w-full">
            View all budget details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetAlertsList;
