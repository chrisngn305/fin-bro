
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

interface AddDebtModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingDebt: DebtItem | null;
}

const debtTypes = ["Mortgage", "Auto Loan", "Student Loan", "Credit Card", "Personal Loan", "Medical Debt", "Other"];

const AddDebtModal = ({ open, onOpenChange, editingDebt }: AddDebtModalProps) => {
  const [debt, setDebt] = useState<Partial<DebtItem>>({
    name: "",
    type: "Personal Loan",
    amount: 0,
    remainingBalance: 0,
    interestRate: 0,
    monthlyPayment: 0,
    dueDate: "1st of month",
    nextPaymentDate: format(new Date(), "yyyy-MM-dd"),
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(new Date(new Date().setFullYear(new Date().getFullYear() + 5)), "yyyy-MM-dd"),
  });

  const [nextPaymentDate, setNextPaymentDate] = useState<Date | undefined>(new Date());
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date(new Date().setFullYear(new Date().getFullYear() + 5)));

  useEffect(() => {
    if (editingDebt) {
      setDebt(editingDebt);
      setNextPaymentDate(editingDebt.nextPaymentDate ? new Date(editingDebt.nextPaymentDate) : undefined);
      setStartDate(editingDebt.startDate ? new Date(editingDebt.startDate) : undefined);
      setEndDate(editingDebt.endDate ? new Date(editingDebt.endDate) : undefined);
    } else {
      setDebt({
        name: "",
        type: "Personal Loan",
        amount: 0,
        remainingBalance: 0,
        interestRate: 0,
        monthlyPayment: 0,
        dueDate: "1st of month",
        nextPaymentDate: format(new Date(), "yyyy-MM-dd"),
        startDate: format(new Date(), "yyyy-MM-dd"),
        endDate: format(new Date(new Date().setFullYear(new Date().getFullYear() + 5)), "yyyy-MM-dd"),
      });
      setNextPaymentDate(new Date());
      setStartDate(new Date());
      setEndDate(new Date(new Date().setFullYear(new Date().getFullYear() + 5)));
    }
  }, [editingDebt, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "amount" || name === "remainingBalance" || name === "interestRate" || name === "monthlyPayment") {
      setDebt({ ...debt, [name]: parseFloat(value) || 0 });
    } else {
      setDebt({ ...debt, [name]: value });
    }

    // Auto-fill remaining balance if it's a new debt
    if (name === "amount" && !editingDebt) {
      setDebt((prev) => ({ ...prev, remainingBalance: parseFloat(value) || 0 }));
    }
  };

  const handleSave = () => {
    // Save logic would go here
    console.log('Saving debt:', debt);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{editingDebt ? "Edit Debt" : "Add New Debt"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={debt.name}
                onChange={handleChange}
                placeholder="e.g., Home Mortgage"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <select
                id="type"
                name="type"
                value={debt.type}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {debtTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Original Amount</Label>
              <Input
                id="amount"
                name="amount"
                type="number"
                value={debt.amount}
                onChange={handleChange}
                placeholder="10000"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="remainingBalance">Remaining Balance</Label>
              <Input
                id="remainingBalance"
                name="remainingBalance"
                type="number"
                value={debt.remainingBalance}
                onChange={handleChange}
                placeholder="8500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input
                id="interestRate"
                name="interestRate"
                type="number"
                step="0.01"
                value={debt.interestRate}
                onChange={handleChange}
                placeholder="5.25"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="monthlyPayment">Monthly Payment</Label>
              <Input
                id="monthlyPayment"
                name="monthlyPayment"
                type="number"
                value={debt.monthlyPayment}
                onChange={handleChange}
                placeholder="250"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                name="dueDate"
                value={debt.dueDate}
                onChange={handleChange}
                placeholder="e.g., 1st of month"
              />
            </div>
            <div className="grid gap-2">
              <Label>Next Payment Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {nextPaymentDate ? format(nextPaymentDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={nextPaymentDate}
                    onSelect={(date) => {
                      setNextPaymentDate(date);
                      setDebt({ ...debt, nextPaymentDate: date ? format(date, "yyyy-MM-dd") : "" });
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      setStartDate(date);
                      setDebt({ ...debt, startDate: date ? format(date, "yyyy-MM-dd") : "" });
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => {
                      setEndDate(date);
                      setDebt({ ...debt, endDate: date ? format(date, "yyyy-MM-dd") : "" });
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDebtModal;
