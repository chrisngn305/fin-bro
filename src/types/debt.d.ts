
interface DebtItem {
  id: string;
  name: string;
  type: string;
  amount: number;
  remainingBalance: number;
  interestRate: number;
  monthlyPayment: number;
  dueDate: string;
  nextPaymentDate: string;
  startDate: string;
  endDate: string;
  payoffProgress: number;
}
