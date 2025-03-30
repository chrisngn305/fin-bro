
import { useState } from "react";
import TransactionList from "@/components/transactions/TransactionList";
import TransactionFilters from "@/components/transactions/TransactionFilters";
import AddTransactionDialog from "@/components/transactions/AddTransactionDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const TransactionsPage = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    dateRange: "all",
    categories: [],
    type: "all",
    amountRange: [0, 5000],
    tags: []
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Transactions</h1>
            <p className="text-muted-foreground mt-1">
              Manage and track your financial transactions
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button 
              onClick={() => setIsAddDialogOpen(true)} 
              className="gap-2"
            >
              <Plus size={16} /> Add Transaction
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <TransactionFilters 
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          </div>
          
          <div className="lg:col-span-3">
            <TransactionList filters={activeFilters} />
          </div>
        </div>
      </main>
      
      <AddTransactionDialog 
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
      />
    </div>
  );
};

export default TransactionsPage;
