
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InvestmentOverview from "./InvestmentOverview";
import AssetList from "./AssetList";
import AddAssetDrawer from "./AddAssetDrawer";
import AssetDetailsDrawer from "./AssetDetailsDrawer";
import PerformanceChart from "./PerformanceChart";
import { Plus } from "lucide-react";

const InvestmentDashboard = () => {
  const [isAddAssetOpen, setIsAddAssetOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<InvestmentAsset | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const handleAddAsset = () => {
    setSelectedAsset(null);
    setIsAddAssetOpen(true);
  };

  const handleEditAsset = (asset: InvestmentAsset) => {
    setSelectedAsset(asset);
    setIsAddAssetOpen(true);
  };

  const handleViewAssetDetails = (asset: InvestmentAsset) => {
    setSelectedAsset(asset);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Portfolio Summary</h2>
        <Button onClick={handleAddAsset}>
          <Plus className="mr-2 h-4 w-4" />
          Add Investment
        </Button>
      </div>

      <InvestmentOverview />
      
      <PerformanceChart />
      
      <AssetList 
        onEditAsset={handleEditAsset} 
        onViewAsset={handleViewAssetDetails}
      />
      
      <AddAssetDrawer 
        open={isAddAssetOpen} 
        onOpenChange={setIsAddAssetOpen} 
        editingAsset={selectedAsset}
      />
      
      <AssetDetailsDrawer 
        open={isDetailsOpen} 
        onOpenChange={setIsDetailsOpen} 
        asset={selectedAsset}
      />
    </div>
  );
};

export default InvestmentDashboard;
