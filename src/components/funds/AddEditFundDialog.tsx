
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fund, FundTransaction } from "@/types/fund";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const fundSchema = z.object({
  name: z.string().min(1, "Name is required"),
  type: z.string().min(1, "Type is required"),
  target: z.coerce.number().positive("Target amount must be positive"),
  balance: z.coerce.number().min(0, "Balance cannot be negative"),
  dueDate: z.string().min(1, "Due date is required"),
});

type FundFormValues = z.infer<typeof fundSchema>;

const transactionSchema = z.object({
  amount: z.coerce.number().positive("Amount must be positive"),
  description: z.string().min(1, "Description is required"),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

interface AddEditFundDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fund: Fund | null;
  onSave: (fund: Fund) => void;
  onAddTransaction: (fundId: string, transaction: FundTransaction) => void;
}

const AddEditFundDialog = ({ 
  open, 
  onOpenChange, 
  fund, 
  onSave,
  onAddTransaction 
}: AddEditFundDialogProps) => {
  const isEditing = !!fund;
  const [activeTab, setActiveTab] = useState<"details" | "transaction">(
    isEditing ? "details" : "details"
  );

  const form = useForm<FundFormValues>({
    resolver: zodResolver(fundSchema),
    defaultValues: isEditing
      ? {
          name: fund.name,
          type: fund.type,
          target: fund.target,
          balance: fund.balance,
          dueDate: fund.dueDate,
        }
      : {
          name: "",
          type: "sinking",
          target: undefined,
          balance: 0,
          dueDate: new Date().toISOString().split('T')[0],
        }
  });

  const transactionForm = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      amount: undefined,
      description: "",
    }
  });

  const onSubmit = (values: FundFormValues) => {
    const newFund: Fund = {
      id: isEditing ? fund.id : `fund-${Date.now()}`,
      name: values.name,
      type: values.type,
      target: values.target,
      balance: values.balance,
      dueDate: values.dueDate,
      transactions: isEditing
        ? fund.transactions
        : values.balance > 0
        ? [
            {
              id: `t-${Date.now()}`,
              amount: values.balance,
              date: new Date().toISOString().split('T')[0],
              description: "Initial deposit",
            },
          ]
        : [],
    };

    onSave(newFund);
  };

  const onSubmitTransaction = (values: TransactionFormValues) => {
    if (!fund) return;
    
    const newTransaction: FundTransaction = {
      id: `t-${Date.now()}`,
      amount: values.amount,
      date: new Date().toISOString().split('T')[0],
      description: values.description,
    };

    onAddTransaction(fund.id, newTransaction);
    transactionForm.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing 
              ? (activeTab === "details" ? "Edit Fund" : "Add Transaction") 
              : "Add New Fund"}
          </DialogTitle>
          <DialogDescription>
            {isEditing && activeTab === "details"
              ? "Update your fund details below."
              : isEditing && activeTab === "transaction"
              ? "Add a new transaction to this fund."
              : "Create a new fund to track your savings."}
          </DialogDescription>
        </DialogHeader>

        {isEditing && (
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "details" | "transaction")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Fund Details</TabsTrigger>
              <TabsTrigger value="transaction">Add Transaction</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fund Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Emergency Fund, Home Repair, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fund Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a fund type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency Fund</SelectItem>
                            <SelectItem value="sinking">Sinking Fund</SelectItem>
                            <SelectItem value="custom">Custom Fund</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          {field.value === "emergency"
                            ? "For unexpected expenses and financial emergencies."
                            : field.value === "sinking"
                            ? "For planned future expenses that occur irregularly."
                            : "A custom fund for specific financial goals."}
                        </FormDescription>
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
                              placeholder="5000"
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
                      name="balance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Balance</FormLabel>
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

                  <FormField
                    control={form.control}
                    name="dueDate"
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

                  <DialogFooter>
                    <Button type="submit">
                      {isEditing ? "Update Fund" : "Create Fund"}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="transaction">
              <Form {...transactionForm}>
                <form onSubmit={transactionForm.handleSubmit(onSubmitTransaction)} className="space-y-4 py-2">
                  <FormField
                    control={transactionForm.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Transaction Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="100"
                            min={1}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={transactionForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Monthly contribution, bonus deposit, etc."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter>
                    <Button type="submit">Add Transaction</Button>
                  </DialogFooter>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        )}

        {!isEditing && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fund Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Emergency Fund, Home Repair, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fund Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a fund type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Fund</SelectItem>
                        <SelectItem value="sinking">Sinking Fund</SelectItem>
                        <SelectItem value="custom">Custom Fund</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {field.value === "emergency"
                        ? "For unexpected expenses and financial emergencies."
                        : field.value === "sinking"
                        ? "For planned future expenses that occur irregularly."
                        : "A custom fund for specific financial goals."}
                    </FormDescription>
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
                          placeholder="5000"
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
                  name="balance"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Balance</FormLabel>
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

              <FormField
                control={form.control}
                name="dueDate"
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

              <DialogFooter>
                <Button type="submit">Create Fund</Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddEditFundDialog;
