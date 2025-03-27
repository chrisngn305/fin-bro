
import { useState } from "react";
import {
  CreditCard,
  ShoppingCart,
  Home,
  Coffee,
  Car,
  Utensils,
  Briefcase,
  Tag,
  RefreshCw,
  FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import EditTransactionDialog from "./EditTransactionDialog";

// Mock transaction data
const mockTransactions = [
  {
    id: "1",
    date: "2023-04-15",
    description: "Grocery Shopping",
    category: "Groceries",
    type: "expense",
    amount: 85.42,
    tags: ["Essentials"],
    isRecurring: false,
    notes: "Weekly grocery run",
  },
  {
    id: "2",
    date: "2023-04-14",
    description: "Salary",
    category: "Income",
    type: "income",
    amount: 3200.00,
    tags: ["Salary"],
    isRecurring: true,
    notes: "Monthly salary",
  },
  {
    id: "3",
    date: "2023-04-13",
    description: "Gas Station",
    category: "Transport",
    type: "expense",
    amount: 45.50,
    tags: ["Car"],
    isRecurring: false,
    notes: "",
  },
  {
    id: "4",
    date: "2023-04-12",
    description: "Coffee Shop",
    category: "Food & Drink",
    type: "expense",
    amount: 4.75,
    tags: [],
    isRecurring: true,
    notes: "Morning coffee",
  },
  {
    id: "5",
    date: "2023-04-10",
    description: "Rent Payment",
    category: "Housing",
    type: "expense",
    amount: 1200.00,
    tags: ["Housing", "Monthly"],
    isRecurring: true,
    notes: "Monthly rent",
  }
];

// Icon mapping for categories
const categoryIcons: Record<string, React.ReactNode> = {
  "Groceries": <ShoppingCart size={18} className="text-green-500" />,
  "Income": <Briefcase size={18} className="text-blue-500" />,
  "Transport": <Car size={18} className="text-orange-500" />,
  "Food & Drink": <Coffee size={18} className="text-amber-500" />,
  "Housing": <Home size={18} className="text-purple-500" />,
  "Dining": <Utensils size={18} className="text-red-500" />,
  "Other": <CreditCard size={18} className="text-gray-500" />,
};

interface TransactionListProps {
  filters: {
    dateRange: string;
    categories: string[];
    type: string;
    amountRange: number[];
    tags: string[];
  };
}

const TransactionList = ({ filters }: TransactionListProps) => {
  const [editingTransaction, setEditingTransaction] = useState<string | null>(null);
  
  // Filter transactions based on active filters
  // This is a simple implementation - in a real app, you'd likely filter on the server
  const filteredTransactions = mockTransactions.filter(transaction => {
    // Filter by type
    if (filters.type !== "all" && transaction.type !== filters.type) {
      return false;
    }
    
    // Filter by categories
    if (filters.categories.length > 0 && !filters.categories.includes(transaction.category)) {
      return false;
    }
    
    // Filter by amount range
    if (transaction.amount < filters.amountRange[0] || transaction.amount > filters.amountRange[1]) {
      return false;
    }
    
    // Filter by tags
    if (filters.tags.length > 0 && !transaction.tags.some(tag => filters.tags.includes(tag))) {
      return false;
    }
    
    return true;
  });
  
  const getTransactionToEdit = () => {
    return mockTransactions.find(t => t.id === editingTransaction) || null;
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Your Transactions</h2>
        <p className="text-sm text-muted-foreground">
          {filteredTransactions.length} transactions found
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {transaction.description}
                    {transaction.isRecurring && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex">
                              <RefreshCw size={14} className="text-blue-500" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Recurring transaction</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    {transaction.notes && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex">
                              <FileText size={14} className="text-gray-400" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{transaction.notes}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {categoryIcons[transaction.category] || categoryIcons["Other"]}
                    {transaction.category}
                  </div>
                </TableCell>
                <TableCell className={`text-right font-medium ${
                  transaction.type === "income" ? "text-green-600" : "text-gray-900"
                }`}>
                  {transaction.type === "income" ? "+" : "-"}
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {transaction.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="flex gap-1 items-center">
                        <Tag size={10} />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setEditingTransaction(transaction.id)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {filteredTransactions.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No transactions found matching your filters
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {editingTransaction && (
        <EditTransactionDialog
          transaction={getTransactionToEdit()}
          open={!!editingTransaction}
          onOpenChange={(open) => {
            if (!open) setEditingTransaction(null);
          }}
        />
      )}
    </div>
  );
};

export default TransactionList;
