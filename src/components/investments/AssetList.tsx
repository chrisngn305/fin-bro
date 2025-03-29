
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye, TrendingUp, TrendingDown } from "lucide-react";

// Mock data for investment assets
const mockAssets: InvestmentAsset[] = [
  {
    id: "1",
    name: "Apple Inc.",
    symbol: "AAPL",
    type: "Stock",
    value: 32500,
    shares: 150,
    price: 216.67,
    costBasis: 185.2,
    return: 4720.5,
    returnPercentage: 16.98,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 28000 },
      { date: "2023-02-01", value: 29200 },
      { date: "2023-03-01", value: 28500 },
      { date: "2023-04-01", value: 32500 }
    ]
  },
  {
    id: "2",
    name: "Microsoft Corporation",
    symbol: "MSFT",
    type: "Stock",
    value: 45000,
    shares: 120,
    price: 375,
    costBasis: 320.5,
    return: 6540,
    returnPercentage: 17.02,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 39000 },
      { date: "2023-02-01", value: 41000 },
      { date: "2023-03-01", value: 43500 },
      { date: "2023-04-01", value: 45000 }
    ]
  },
  {
    id: "3",
    name: "U.S. Treasury Bond",
    symbol: "USTB",
    type: "Bond",
    value: 25000,
    shares: 1,
    price: 25000,
    costBasis: 25000,
    return: 875,
    returnPercentage: 3.5,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 25000 },
      { date: "2023-02-01", value: 25218.75 },
      { date: "2023-03-01", value: 25437.5 },
      { date: "2023-04-01", value: 25656.25 }
    ]
  },
  {
    id: "4",
    name: "Vanguard Real Estate ETF",
    symbol: "VNQ",
    type: "Real Estate",
    value: 18500,
    shares: 225,
    price: 82.22,
    costBasis: 86.5,
    return: -961,
    returnPercentage: -4.94,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 19461 },
      { date: "2023-02-01", value: 18800 },
      { date: "2023-03-01", value: 18200 },
      { date: "2023-04-01", value: 18500 }
    ]
  },
  {
    id: "5",
    name: "Bitcoin",
    symbol: "BTC",
    type: "Cryptocurrency",
    value: 12000,
    shares: 0.2,
    price: 60000,
    costBasis: 48000,
    return: 2400,
    returnPercentage: 25,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 9600 },
      { date: "2023-02-01", value: 10800 },
      { date: "2023-03-01", value: 11500 },
      { date: "2023-04-01", value: 12000 }
    ]
  },
  {
    id: "6",
    name: "Cash Reserves",
    symbol: "CASH",
    type: "Cash",
    value: 28000,
    shares: 28000,
    price: 1,
    costBasis: 1,
    return: 336,
    returnPercentage: 1.2,
    lastUpdated: "2023-04-28",
    history: [
      { date: "2023-01-01", value: 30000 },
      { date: "2023-02-01", value: 28000 },
      { date: "2023-03-01", value: 28000 },
      { date: "2023-04-01", value: 28000 }
    ]
  }
];

interface AssetListProps {
  onEditAsset: (asset: InvestmentAsset) => void;
  onViewAsset: (asset: InvestmentAsset) => void;
}

const AssetList = ({ onEditAsset, onViewAsset }: AssetListProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const getTypeColorClass = (type: string) => {
    switch(type) {
      case 'Stock': return 'bg-primary text-primary-foreground';
      case 'Bond': return 'bg-amber-500 text-white';
      case 'Real Estate': return 'bg-blue-500 text-white';
      case 'Cryptocurrency': return 'bg-purple-500 text-white';
      case 'Cash': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Assets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockAssets.map((asset) => (
            <Card key={asset.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{asset.name}</h3>
                      <div className="text-sm text-muted-foreground">{asset.symbol}</div>
                    </div>
                    <Badge className={getTypeColorClass(asset.type)}>{asset.type}</Badge>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Value</span>
                      <span className="font-medium">{formatCurrency(asset.value)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Price</span>
                      <span>{formatPrice(asset.price)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Return</span>
                      <span className={`flex items-center ${asset.returnPercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {asset.returnPercentage >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {asset.returnPercentage.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t flex">
                  <Button
                    variant="ghost"
                    className="flex-1 rounded-none py-2 h-auto"
                    onClick={() => onViewAsset(asset)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <div className="border-r h-10"></div>
                  <Button
                    variant="ghost"
                    className="flex-1 rounded-none py-2 h-auto"
                    onClick={() => onEditAsset(asset)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetList;
