
import { useState } from "react";
import { Goal } from "@/types/goal";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, TrendingUp, Calendar, Flag, BarChart3 } from "lucide-react";
import GoalDetailsDrawer from "./GoalDetailsDrawer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface GoalListProps {
  goals: Goal[];
  onEditGoal: (goal: Goal) => void;
  onDeleteGoal: (id: string) => void;
}

const GoalList = ({ goals, onEditGoal, onDeleteGoal }: GoalListProps) => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [showDetailsDrawer, setShowDetailsDrawer] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState<string | null>(null);

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

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'saving': return 'Saving';
      case 'debt-payoff': return 'Debt Payoff';
      case 'major-purchase': return 'Major Purchase';
      default: return 'Other';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'saving':
        return <TrendingUp className="h-4 w-4" />;
      case 'debt-payoff':
        return <BarChart3 className="h-4 w-4" />;
      case 'major-purchase':
        return <Flag className="h-4 w-4" />;
      default:
        return <Flag className="h-4 w-4" />;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {goals.map((goal) => {
          const progress = Math.round((goal.current / goal.target) * 100);
          
          return (
            <Card key={goal.id} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-lg line-clamp-1">{goal.name}</h3>
                      <div className="flex space-x-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => onEditGoal(goal)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 text-destructive"
                          onClick={() => setGoalToDelete(goal.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {getCategoryIcon(goal.category)}
                        <span className="ml-1">{getCategoryLabel(goal.category)}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between text-sm pt-1">
                      <span className="font-medium">{formatCurrency(goal.current)}</span>
                      <span className="font-medium">{formatCurrency(goal.target)}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-between text-sm gap-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Due {formatDate(goal.deadline)}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedGoal(goal);
                        setShowDetailsDrawer(true);
                      }}
                      className="text-xs"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Goal Details Drawer */}
      <GoalDetailsDrawer
        open={showDetailsDrawer}
        onOpenChange={setShowDetailsDrawer}
        goal={selectedGoal}
      />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!goalToDelete} onOpenChange={(open) => !open && setGoalToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the goal and remove it from your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (goalToDelete) {
                  onDeleteGoal(goalToDelete);
                  setGoalToDelete(null);
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default GoalList;
