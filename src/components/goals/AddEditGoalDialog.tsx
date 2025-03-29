
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Goal } from "@/types/goal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const goalSchema = z.object({
  name: z.string().min(1, "Name is required"),
  target: z.coerce.number().positive("Target amount must be positive"),
  current: z.coerce.number().min(0, "Current amount cannot be negative"),
  deadline: z.string().min(1, "Deadline is required"),
  category: z.string().min(1, "Category is required"),
  linkedFund: z.string().optional()
});

type GoalFormValues = z.infer<typeof goalSchema>;

interface AddEditGoalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  goal: Goal | null;
  onSave: (goal: Goal) => void;
}

const AddEditGoalDialog = ({ open, onOpenChange, goal, onSave }: AddEditGoalDialogProps) => {
  const isEditing = !!goal;

  const form = useForm<GoalFormValues>({
    resolver: zodResolver(goalSchema),
    defaultValues: isEditing
      ? {
          name: goal.name,
          target: goal.target,
          current: goal.current,
          deadline: goal.deadline,
          category: goal.category,
          linkedFund: goal.linkedFund || undefined
        }
      : {
          name: "",
          target: undefined,
          current: 0,
          deadline: new Date().toISOString().split('T')[0],
          category: "saving",
          linkedFund: undefined
        }
  });

  const onSubmit = (values: GoalFormValues) => {
    const newGoal: Goal = {
      id: isEditing ? goal.id : `goal-${Date.now()}`,
      name: values.name,
      target: values.target,
      current: values.current,
      deadline: values.deadline,
      category: values.category,
      startDate: isEditing ? goal.startDate : new Date().toISOString().split('T')[0],
      linkedFund: values.linkedFund || null,
      contributions: isEditing
        ? goal.contributions
        : values.current > 0
        ? [{ id: `contrib-${Date.now()}`, amount: values.current, date: new Date().toISOString().split('T')[0] }]
        : []
    };

    onSave(newGoal);
  };

  // Mock fund options (in a real app, these would come from your funds state)
  const fundOptions = [
    { id: "emergency-fund", name: "Emergency Fund" },
    { id: "house-fund", name: "House Fund" },
    { id: "travel-fund", name: "Travel Fund" },
    { id: "car-fund", name: "Car Fund" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Goal" : "Add New Goal"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Update your financial goal details below."
              : "Create a new financial goal to track your progress."}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goal Name</FormLabel>
                  <FormControl>
                    <Input placeholder="New Car, House Down Payment, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="target"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="10000"
                        min={1}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="current"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="saving">Saving</SelectItem>
                        <SelectItem value="debt-payoff">Debt Payoff</SelectItem>
                        <SelectItem value="major-purchase">Major Purchase</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            <FormField
              control={form.control}
              name="linkedFund"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Linked Fund (Optional)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a fund (optional)" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fundOptions.map(fund => (
                        <SelectItem key={fund.id} value={fund.id}>
                          {fund.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Linking a fund allows automatic tracking with your saved funds.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">{isEditing ? "Update Goal" : "Create Goal"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditGoalDialog;
