
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DebtSummary from "./DebtSummary";
import DebtList from "./DebtList";
import AddDebtModal from "./AddDebtModal";
import { Plus } from "lucide-react";

const DebtDashboard = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingDebt, setEditingDebt] = useState<DebtItem | null>(null);

  const handleAddDebt = () => {
    setEditingDebt(null);
    setIsAddModalOpen(true);
  };

  const handleEditDebt = (debt: DebtItem) => {
    setEditingDebt(debt);
    setIsAddModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Debt Overview</h2>
        <Button onClick={handleAddDebt}>
          <Plus className="mr-2 h-4 w-4" />
          Add Debt
        </Button>
      </div>

      <DebtSummary />

      <DebtList onEditDebt={handleEditDebt} />

      <AddDebtModal 
        open={isAddModalOpen} 
        onOpenChange={setIsAddModalOpen} 
        editingDebt={editingDebt}
      />
    </div>
  );
};

export default DebtDashboard;
