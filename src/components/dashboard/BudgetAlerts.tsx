
import { CircleX, Flag } from "lucide-react";
import MotionCard from "../ui/MotionCard";

const BudgetAlerts = () => {
  // Demo data
  const alerts = [
    {
      category: "Dining Out",
      message: "You've spent 120% of your monthly budget",
      severity: "high",
      date: "3 days ago"
    },
    {
      category: "Shopping",
      message: "Approaching 90% of monthly budget",
      severity: "medium",
      date: "Today"
    }
  ];

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          icon: CircleX,
          color: "text-red-500",
          bg: "bg-red-50"
        };
      case "medium":
        return {
          icon: Flag,
          color: "text-amber-500",
          bg: "bg-amber-50"
        };
      default:
        return {
          icon: Flag,
          color: "text-blue-500",
          bg: "bg-blue-50"
        };
    }
  };

  return (
    <MotionCard className="h-full" delay={250}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Budget Alerts</h3>
        <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-600 rounded-full">
          {alerts.length} Alerts
        </span>
      </div>

      <div className="space-y-3">
        {alerts.length > 0 ? (
          alerts.map((alert, index) => {
            const styles = getSeverityStyles(alert.severity);
            const Icon = styles.icon;
            
            return (
              <div
                key={index}
                className={`p-3 rounded-lg border ${styles.bg} flex items-start gap-3`}
              >
                <div className={`${styles.color} mt-0.5`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{alert.category}</h4>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.date}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            No budget alerts at this time
          </div>
        )}
      </div>
    </MotionCard>
  );
};

export default BudgetAlerts;
