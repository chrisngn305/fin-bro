
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import FundList from "./FundList";
import FundSummary from "./FundSummary";
import AddEditFundDialog from "./AddEditFundDialog";
import TransactionLogDialog from "./TransactionLogDialog";
import ReallocateFundsDialog from "./ReallocateFundsDialog";
import { Fund, FundTransaction } from "@/types/fund";

// Mock data for funds
const mockFunds: Fund[] = [
  {
    id: "1",
    name: "Emergency Fund",
    type: "emergency",
    balance: 10000,
    target: 15000,
    transactions: [
      { id: "t1", amount: 5000, date: "2023-01-15", description: "Initial deposit" },
      { id: "t2", amount: 2500, date: "2023-02-20", description: "Monthly contribution" },
      { id: "t3", amount: 2500, date: "2023-03-15", description: "Monthly contribution" }
    ],
    dueDate: "2023-12-31"
  },
  {
    id: "2",
    name: "Travel Fund",
    type: "sinking",
    balance: 3000,
    target: 5000,
    transactions: [
      { id: "t4", amount: 1000, date: "2023-01-30", description: "Initial deposit" },
      { id: "t5", amount: 1000, date: "2023-02-28", description: "Monthly contribution" },
      { id: "t6", amount: 1000, date: "2023-03-30", description: "Monthly contribution" }
    ],
    dueDate: "2023-07-15"
  },
  {
    id: "3",
    name: "Car Maintenance",
    type: "sinking",
    balance: 1200,
    target: 2000,
    transactions: [
      { id: "t7", amount: 600, date: "2023-01-10", description: "Initial deposit" },
      { id: "t8", amount: 300, date: "2023-02-10", description: "Monthly contribution" },
      { id: "t9", amount: 300, date: "2023-03-10", description: "Monthly contribution" }
    ],
    dueDate: "2023-06-30"
  },
  {
    id: "4",
    name: "House Down Payment",
    type: "custom",
    balance: 25000,
    target: 60000,
    transactions: [
      { id: "t10", amount: 10000, date: "2022-12-01", description: "Initial deposit" },
      { id: "t11", amount: 5000, date: "2023-01-15", description: "Bonus contribution" },
      { id: "t12", amount: 10000, date: "2023-02-15", description: "Tax refund contribution" }
    ],
    dueDate: "2025-01-01"
  }
];

const FundDashboard = () => {
  const [funds, setFunds] = useState<Fund[]>(mockFunds);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isReallocateDialogOpen, setIsReallocateDialogOpen] = useState(false);
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);
  const [showTransactions, setShowTransactions] = useState(false);

  const handleAddFund = (newFund: Fund) => {
    setFunds([...funds, newFund]);
    setIsAddDialogOpen(false);
  };

  const handleEditFund = (editedFund: Fund) => {
    setFunds(funds.map(fund => fund.id === editedFund.id ? editedFund : fund));
    setSelectedFund(null);
  };

  const handleDeleteFund = (fundId: string) => {
    setFunds(funds.filter(fund => fund.id !== fundId));
  };

  const handleAddTransaction = (fundId: string, transaction: FundTransaction) => {
    setFunds(
      funds.map(fund => {
        if (fund.id === fundId) {
          const newBalance = fund.balance + transaction.amount;
          return {
            ...fund,
            balance: newBalance,
            transactions: [...fund.transactions, transaction]
          };
        }
        return fund;
      })
    );
  };

  const handleReallocateFunds = (fromFundId: string, toFundId: string, amount: number) => {
    setFunds(
      funds.map(fund => {
        if (fund.id === fromFundId) {
          const newTransaction: FundTransaction = {
            id: `t-${Date.now()}-1`,
            amount: -amount,
            date: new Date().toISOString().split('T')[0],
            description: `Transfer to ${funds.find(f => f.id === toFundId)?.name}`
          };
          
          return {
            ...fund,
            balance: fund.balance - amount,
            transactions: [...fund.transactions, newTransaction]
          };
        }
        
        if (fund.id === toFundId) {
          const newTransaction: FundTransaction = {
            id: `t-${Date.now()}-2`,
            amount: amount,
            date: new Date().toISOString().split('T')[0],
            description: `Transfer from ${funds.find(f => f.id === fromFundId)?.name}`
          };
          
          return {
            ...fund,
            balance: fund.balance + amount,
            transactions: [...fund.transactions, newTransaction]
          };
        }
        
        return fund;
      })
    );
    
    setIsReallocateDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-3">
          <Button 
            onClick={() => {
              setSelectedFund(null);
              setIsAddDialogOpen(true);
            }}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Fund
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setIsReallocateDialogOpen(true)}
          >
            Reallocate Funds
          </Button>
        </div>
      </div>

      <FundSummary funds={funds} />
      
      <FundList 
        funds={funds} 
        onEditFund={(fund) => setSelectedFund(fund)}
        onDeleteFund={handleDeleteFund}
        onViewTransactions={(fund) => {
          setSelectedFund(fund);
          setShowTransactions(true);
        }}
        onAddTransaction={(fund) => {
          setSelectedFund(fund);
          setIsAddDialogOpen(true);
        }}
      />

      <AddEditFundDialog
        open={isAddDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsAddDialogOpen(false);
            setSelectedFund(null);
          }
        }}
        fund={selectedFund}
        onSave={selectedFund ? handleEditFund : handleAddFund}
        onAddTransaction={handleAddTransaction}
      />

      <TransactionLogDialog
        open={showTransactions}
        onOpenChange={(open) => {
          if (!open) {
            setShowTransactions(false);
            setSelectedFund(null);
          }
        }}
        fund={selectedFund}
      />

      <ReallocateFundsDialog
        open={isReallocateDialogOpen}
        onOpenChange={setIsReallocateDialogOpen}
        funds={funds}
        onReallocate={handleReallocateFunds}
      />
    </div>
  );
};

export default FundDashboard;
