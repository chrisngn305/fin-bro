
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface AddAssetDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingAsset: InvestmentAsset | null;
}

const assetTypes = ["Stock", "Bond", "Real Estate", "Cryptocurrency", "Cash", "Other"];

const AddAssetDrawer = ({ open, onOpenChange, editingAsset }: AddAssetDrawerProps) => {
  const [asset, setAsset] = useState<Partial<InvestmentAsset>>({
    name: "",
    symbol: "",
    type: "Stock",
    shares: 0,
    price: 0,
    costBasis: 0,
  });

  useEffect(() => {
    if (editingAsset) {
      setAsset(editingAsset);
    } else {
      setAsset({
        name: "",
        symbol: "",
        type: "Stock",
        shares: 0,
        price: 0,
        costBasis: 0,
      });
    }
  }, [editingAsset, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "shares" || name === "price" || name === "costBasis") {
      setAsset({ ...asset, [name]: parseFloat(value) || 0 });
    } else {
      setAsset({ ...asset, [name]: value });
    }
  };

  const handleTypeChange = (value: string) => {
    setAsset({ ...asset, type: value });
  };

  const handleSave = () => {
    // Calculate total value based on shares and price
    const value = (asset.shares || 0) * (asset.price || 0);
    const updatedAsset = {
      ...asset,
      value,
    };
    
    console.log('Saving asset:', updatedAsset);
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <DrawerTitle>{editingAsset ? "Edit Investment" : "Add New Investment"}</DrawerTitle>
            <DrawerDescription>
              {editingAsset 
                ? "Update the details of your investment asset" 
                : "Enter details about your investment asset"}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={asset.name}
                    onChange={handleChange}
                    placeholder="e.g., Apple Inc."
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="symbol">Symbol</Label>
                  <Input
                    id="symbol"
                    name="symbol"
                    value={asset.symbol}
                    onChange={handleChange}
                    placeholder="e.g., AAPL"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Asset Type</Label>
                <RadioGroup 
                  value={asset.type} 
                  onValueChange={handleTypeChange}
                  className="flex flex-wrap gap-4"
                >
                  {assetTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <RadioGroupItem value={type} id={`type-${type}`} />
                      <Label htmlFor={`type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="shares">Shares / Units</Label>
                  <Input
                    id="shares"
                    name="shares"
                    type="number"
                    step="0.0001"
                    value={asset.shares}
                    onChange={handleChange}
                    placeholder="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Current Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={asset.price}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="costBasis">Cost Basis (per share/unit)</Label>
                <Input
                  id="costBasis"
                  name="costBasis"
                  type="number"
                  step="0.01"
                  value={asset.costBasis}
                  onChange={handleChange}
                  placeholder="0.00"
                />
              </div>

              <div className="mt-4 p-2 bg-muted/50 rounded-md">
                <div className="flex justify-between text-sm">
                  <span>Total Value:</span>
                  <span className="font-medium">
                    ${((asset.shares || 0) * (asset.price || 0)).toLocaleString()}
                  </span>
                </div>
                {asset.costBasis && asset.shares ? (
                  <div className="flex justify-between text-sm mt-1">
                    <span>Total Cost:</span>
                    <span className="font-medium">
                      ${((asset.costBasis || 0) * (asset.shares || 0)).toLocaleString()}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button onClick={handleSave}>Save Investment</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddAssetDrawer;
