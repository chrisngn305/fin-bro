
import { Fund } from "@/types/fund";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

interface TransactionLogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fund: Fund | null;
}

const TransactionLogDialog = ({ open, onOpenChange, fund }: TransactionLogDialogProps) => {
  if (!fund) return null;

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{fund.name} - Transaction History</DialogTitle>
          <DialogDescription>
            View all transactions for this fund.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {fund.transactions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...fund.transactions]
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{formatDate(transaction.date)}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className="text-right">
                        <span className="flex items-center justify-end gap-1">
                          {transaction.amount > 0 ? (
                            <>
                              <ArrowUpCircle className="h-4 w-4 text-green-500" />
                              <span className="text-green-600">
                                {formatCurrency(transaction.amount)}
                              </span>
                            </>
                          ) : (
                            <>
                              <ArrowDownCircle className="h-4 w-4 text-red-500" />
                              <span className="text-red-600">
                                {formatCurrency(Math.abs(transaction.amount))}
                              </span>
                            </>
                          )}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground my-8">No transactions yet</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionLogDialog;
