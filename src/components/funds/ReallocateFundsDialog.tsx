
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fund } from "@/types/fund";
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
import { ArrowRightIcon } from "lucide-react";

const reallocateSchema = z.object({
  fromFundId: z.string().min(1, "Source fund is required"),
  toFundId: z.string().min(1, "Destination fund is required"),
  amount: z.coerce.number().positive("Amount must be positive"),
}).refine(data => data.fromFundId !== data.toFundId, {
  message: "Source and destination funds cannot be the same",
  path: ["toFundId"],
});

type ReallocateFormValues = z.infer<typeof reallocateSchema>;

interface ReallocateFundsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  funds: Fund[];
  onReallocate: (fromFundId: string, toFundId: string, amount: number) => void;
}

const ReallocateFundsDialog = ({ 
  open, 
  onOpenChange, 
  funds, 
  onReallocate 
}: ReallocateFundsDialogProps) => {
  const [selectedFromFund, setSelectedFromFund] = useState<Fund | null>(null);

  const form = useForm<ReallocateFormValues>({
    resolver: zodResolver(reallocateSchema),
    defaultValues: {
      fromFundId: "",
      toFundId: "",
      amount: undefined,
    }
  });

  const onSubmit = (values: ReallocateFormValues) => {
    onReallocate(values.fromFundId, values.toFundId, values.amount);
    form.reset();
  };

  const handleFromFundChange = (fundId: string) => {
    form.setValue("fromFundId", fundId);
    setSelectedFromFund(funds.find(fund => fund.id === fundId) || null);
    form.setValue("amount", undefined);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Reallocate Funds</DialogTitle>
          <DialogDescription>
            Transfer money between your funds to adjust your financial priorities.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
            <FormField
              control={form.control}
              name="fromFundId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From Fund</FormLabel>
                  <Select
                    onValueChange={(value) => handleFromFundChange(value)}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select source fund" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {funds.map(fund => (
                        <SelectItem key={fund.id} value={fund.id}>
                          {fund.name} ({formatCurrency(fund.balance)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedFromFund && (
                    <FormDescription>
                      Available balance: {formatCurrency(selectedFromFund.balance)}
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
              <ArrowRightIcon className="text-muted-foreground my-1" />
            </div>

            <FormField
              control={form.control}
              name="toFundId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To Fund</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={!selectedFromFund}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination fund" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {funds
                        .filter(fund => fund.id !== form.getValues().fromFundId)
                        .map(fund => (
                          <SelectItem key={fund.id} value={fund.id}>
                            {fund.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount to Transfer</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0"
                      min={1}
                      max={selectedFromFund?.balance || 0}
                      disabled={!selectedFromFund}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button 
                type="submit"
                disabled={!selectedFromFund || !form.getValues().toFundId || !form.getValues().amount}
              >
                Transfer Funds
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReallocateFundsDialog;
