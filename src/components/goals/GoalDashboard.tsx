
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import GoalList from "./GoalList";
import GoalCategorySummary from "./GoalCategorySummary";
import AddEditGoalDialog from "./AddEditGoalDialog";
import { Goal } from "@/types/goal";

// Mock data for goals
const mockGoals: Goal[] = [
  {
    id: "1",
    name: "Down Payment for House",
    target: 50000,
    current: 25000,
    deadline: "2024-12-31",
    category: "saving",
    startDate: "2022-01-15",
    linkedFund: "house-fund",
    contributions: [
      { id: "c1", amount: 5000, date: "2022-01-15" },
      { id: "c2", amount: 10000, date: "2022-06-20" },
      { id: "c3", amount: 10000, date: "2023-01-10" },
    ]
  },
  {
    id: "2",
    name: "Pay off Student Loans",
    target: 35000,
    current: 15000,
    deadline: "2025-06-30",
    category: "debt-payoff",
    startDate: "2022-03-01",
    linkedFund: null,
    contributions: [
      { id: "c4", amount: 8000, date: "2022-03-01" },
      { id: "c5", amount: 7000, date: "2022-09-15" },
    ]
  },
  {
    id: "3",
    name: "New Car",
    target: 25000,
    current: 8000,
    deadline: "2025-08-15",
    category: "major-purchase",
    startDate: "2022-11-01",
    linkedFund: "car-fund",
    contributions: [
      { id: "c6", amount: 5000, date: "2022-11-01" },
      { id: "c7", amount: 3000, date: "2023-02-22" },
    ]
  },
  {
    id: "4",
    name: "European Vacation",
    target: 10000,
    current: 6000,
    deadline: "2024-07-01",
    category: "major-purchase",
    startDate: "2023-01-05",
    linkedFund: "travel-fund",
    contributions: [
      { id: "c8", amount: 2000, date: "2023-01-05" },
      { id: "c9", amount: 2000, date: "2023-04-10" },
      { id: "c10", amount: 2000, date: "2023-07-22" },
    ]
  }
];

const GoalDashboard = () => {
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  const handleAddGoal = (newGoal: Goal) => {
    setGoals([...goals, newGoal]);
    setIsAddDialogOpen(false);
  };

  const handleEditGoal = (editedGoal: Goal) => {
    setGoals(goals.map(goal => goal.id === editedGoal.id ? editedGoal : goal));
    setSelectedGoal(null);
  };

  const handleDeleteGoal = (goalId: string) => {
    setGoals(goals.filter(goal => goal.id !== goalId));
    setSelectedGoal(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Button 
          onClick={() => {
            setSelectedGoal(null);
            setIsAddDialogOpen(true);
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      <GoalCategorySummary goals={goals} />
      
      <GoalList 
        goals={goals} 
        onEditGoal={(goal) => setSelectedGoal(goal)}
        onDeleteGoal={handleDeleteGoal}
      />

      <AddEditGoalDialog
        open={isAddDialogOpen || !!selectedGoal}
        onOpenChange={(open) => {
          if (!open) {
            setIsAddDialogOpen(false);
            setSelectedGoal(null);
          }
        }}
        goal={selectedGoal}
        onSave={selectedGoal ? handleEditGoal : handleAddGoal}
      />
    </div>
  );
};

export default GoalDashboard;
