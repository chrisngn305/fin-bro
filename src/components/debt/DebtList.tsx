
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, DollarSign, Calendar, TrendingUp } from "lucide-react";

// Mock data for debts
const mockDebtItems: DebtItem[] = [
  {
    id: "1",
    name: "Mortgage",
    type: "Mortgage",
    amount: 250000,
    remainingBalance: 225000,
    interestRate: 3.5,
    monthlyPayment: 1250,
    dueDate: "1st of month",
    nextPaymentDate: "2023-05-01",
    startDate: "2019-08-15",
    endDate: "2049-08-15",
    payoffProgress: 10
  },
  {
    id: "2",
    name: "Car Loan",
    type: "Auto Loan",
    amount: 18000,
    remainingBalance: 12000,
    interestRate: 4.2,
    monthlyPayment: 350,
    dueDate: "15th of month",
    nextPaymentDate: "2023-05-15",
    startDate: "2021-02-10",
    endDate: "2026-02-10",
    payoffProgress: 33
  },
  {
    id: "3",
    name: "Student Loan",
    type: "Student Loan",
    amount: 35000,
    remainingBalance: 28000,
    interestRate: 5.8,
    monthlyPayment: 450,
    dueDate: "20th of month",
    nextPaymentDate: "2023-05-20",
    startDate: "2019-06-01",
    endDate: "2029-06-01",
    payoffProgress: 20
  },
  {
    id: "4",
    name: "Credit Card",
    type: "Credit Card",
    amount: 7500,
    remainingBalance: 7500,
    interestRate: 18.99,
    monthlyPayment: 300,
    dueDate: "5th of month",
    nextPaymentDate: "2023-05-05",
    startDate: "2022-12-01",
    endDate: "2024-12-01",
    payoffProgress: 0
  },
  {
    id: "5",
    name: "Personal Loan",
    type: "Personal Loan",
    amount: 5000,
    remainingBalance: 2500,
    interestRate: 8.5,
    monthlyPayment: 220,
    dueDate: "10th of month",
    nextPaymentDate: "2023-05-10",
    startDate: "2022-03-15",
    endDate: "2024-03-15",
    payoffProgress: 50
  }
];

interface DebtListProps {
  onEditDebt: (debt: DebtItem) => void;
}

const DebtList = ({ onEditDebt }: DebtListProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Debts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Interest Rate</TableHead>
              <TableHead>Monthly Payment</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDebtItems.map((debt) => (
              <TableRow key={debt.id}>
                <TableCell className="font-medium">{debt.name}</TableCell>
                <TableCell>{debt.type}</TableCell>
                <TableCell>{formatCurrency(debt.remainingBalance)}</TableCell>
                <TableCell>{debt.interestRate}%</TableCell>
                <TableCell>{formatCurrency(debt.monthlyPayment)}</TableCell>
                <TableCell>{debt.dueDate}</TableCell>
                <TableCell>
                  <div className="w-full max-w-[100px]">
                    <Progress 
                      value={debt.payoffProgress} 
                      className="h-2" 
                    />
                    <span className="text-xs text-muted-foreground">{debt.payoffProgress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEditDebt(debt)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DebtList;
