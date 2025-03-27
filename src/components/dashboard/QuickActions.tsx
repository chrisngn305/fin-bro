
import { Plus, FilePlus, Target, PiggyBank } from "lucide-react";
import MotionCard from "../ui/MotionCard";

const QuickActions = () => {
  const actions = [
    {
      name: "Add Transaction",
      icon: Plus,
      color: "bg-blue-500"
    },
    {
      name: "Create Goal",
      icon: Target,
      color: "bg-green-500"
    },
    {
      name: "New Fund",
      icon: PiggyBank,
      color: "bg-purple-500"
    },
    {
      name: "Add Receipt",
      icon: FilePlus,
      color: "bg-amber-500"
    }
  ];

  return (
    <MotionCard delay={200}>
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          
          return (
            <button 
              key={index}
              className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex flex-col items-center gap-2"
            >
              <div className={`${action.color} text-white p-2 rounded-full`}>
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium">{action.name}</span>
            </button>
          );
        })}
      </div>
    </MotionCard>
  );
};

export default QuickActions;
