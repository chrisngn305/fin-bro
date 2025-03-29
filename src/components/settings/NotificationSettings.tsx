
import { useState } from "react";
import { Bell, Mail, PieChart, CreditCard, Flag, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const notificationTypes = [
  {
    id: "budget_alerts",
    title: "Budget Alerts",
    description: "Receive alerts when you're approaching or exceeding budget limits",
    icon: <PieChart className="h-5 w-5 text-primary" />,
    defaultEnabled: true,
  },
  {
    id: "transaction_alerts",
    title: "Transaction Notifications",
    description: "Get notified about large or unusual transactions",
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    defaultEnabled: true,
  },
  {
    id: "goal_reminders",
    title: "Goal Reminders",
    description: "Reminders about upcoming goal deadlines and progress",
    icon: <Flag className="h-5 w-5 text-primary" />,
    defaultEnabled: true,
  },
  {
    id: "security_alerts",
    title: "Security Alerts",
    description: "Important security notifications about your account",
    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
    defaultEnabled: true,
  },
  {
    id: "promotional",
    title: "Promotional Emails",
    description: "Receive emails about new features and offers",
    icon: <Bell className="h-5 w-5 text-primary" />,
    defaultEnabled: false,
  },
];

const NotificationSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState(
    notificationTypes.map(type => ({
      id: type.id,
      enabled: type.defaultEnabled,
      email: type.defaultEnabled,
      push: type.defaultEnabled,
    }))
  );

  const handleToggleChannel = (id: string, channel: 'enabled' | 'email' | 'push') => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id
          ? { ...notification, [channel]: !notification[channel] }
          : notification
      )
    );
  };

  const saveNotificationSettings = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Notification settings updated",
        description: "Your notification preferences have been saved successfully.",
      });
      console.log(notifications);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-sm font-medium border-b pb-2">
            <div>Notification Type</div>
            <div className="text-center">Email</div>
            <div className="text-center">Push</div>
          </div>
          
          {notificationTypes.map((type) => {
            const notification = notifications.find(n => n.id === type.id);
            
            return (
              <div key={type.id} className="grid grid-cols-3 gap-4 items-center py-3 border-b last:border-0">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {type.icon}
                    <span className="font-medium">{type.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                
                <div className="flex justify-center">
                  <Switch 
                    checked={notification?.email} 
                    onCheckedChange={() => handleToggleChannel(type.id, 'email')}
                    aria-label={`Email notifications for ${type.title}`}
                  />
                </div>
                
                <div className="flex justify-center">
                  <Switch 
                    checked={notification?.push} 
                    onCheckedChange={() => handleToggleChannel(type.id, 'push')}
                    aria-label={`Push notifications for ${type.title}`}
                  />
                </div>
              </div>
            );
          })}
          
          <Button onClick={saveNotificationSettings} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Notification Settings"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
