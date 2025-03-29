
import { Fund } from "@/types/fund";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Edit, 
  Trash2, 
  Calendar, 
  PiggyBank, 
  ArrowUpCircle, 
  ClipboardList 
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface FundListProps {
  funds: Fund[];
  onEditFund: (fund: Fund) => void;
  onDeleteFund: (id: string) => void;
  onViewTransactions: (fund: Fund) => void;
  onAddTransaction: (fund: Fund) => void;
}

const FundList = ({ 
  funds, 
  onEditFund, 
  onDeleteFund, 
  onViewTransactions,
  onAddTransaction
}: FundListProps) => {
  const [fundToDelete, setFundToDelete] = useState<string | null>(null);

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

  const getFundTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <PiggyBank className="h-5 w-5 text-red-500" />;
      case 'sinking':
        return <PiggyBank className="h-5 w-5 text-blue-500" />;
      case 'custom':
        return <PiggyBank className="h-5 w-5 text-purple-500" />;
      default:
        return <PiggyBank className="h-5 w-5" />;
    }
  };

  const getFundTypeLabel = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'Emergency';
      case 'sinking':
        return 'Sinking';
      case 'custom':
        return 'Custom';
      default:
        return type;
    }
  };

  const getFundTypeColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-500/10 text-red-500';
      case 'sinking':
        return 'bg-blue-500/10 text-blue-500';
      case 'custom':
        return 'bg-purple-500/10 text-purple-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funds.map((fund) => {
          const progress = Math.round((fund.balance / fund.target) * 100);
          
          return (
            <Card key={fund.id} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{fund.name}</h3>
                        <span className={`inline-flex items-center px-2 py-1 mt-2 rounded-full text-xs font-medium ${getFundTypeColor(fund.type)}`}>
                          {getFundTypeIcon(fund.type)}
                          <span className="ml-1">{getFundTypeLabel(fund.type)}</span>
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7"
                          onClick={() => onEditFund(fund)}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 text-destructive"
                          onClick={() => setFundToDelete(fund.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-2xl font-bold">{formatCurrency(fund.balance)}</span>
                      <span className="text-muted-foreground">of {formatCurrency(fund.target)}</span>
                    </div>
                    <div className="space-y-1">
                      <Progress value={progress} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>Target date: {formatDate(fund.dueDate)}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => onViewTransactions(fund)}
                    >
                      <ClipboardList className="h-3.5 w-3.5 mr-1" />
                      Transactions
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => onAddTransaction(fund)}
                    >
                      <ArrowUpCircle className="h-3.5 w-3.5 mr-1" />
                      Add Funds
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!fundToDelete} onOpenChange={(open) => !open && setFundToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the fund and all its transaction history.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => {
                if (fundToDelete) {
                  onDeleteFund(fundToDelete);
                  setFundToDelete(null);
                }
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default FundList;
