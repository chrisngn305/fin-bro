
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
import { ArrowUp, ArrowDown, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface AssetDetailsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  asset: InvestmentAsset | null;
}

const AssetDetailsDrawer = ({ open, onOpenChange, asset }: AssetDetailsDrawerProps) => {
  if (!asset) return null;

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

  const isPositiveReturn = asset.returnPercentage >= 0;

  // Format history data for chart
  const chartData = asset.history.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
    value: item.value
  }));

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          <DrawerHeader>
            <div className="flex items-start justify-between">
              <div>
                <DrawerTitle className="text-2xl">{asset.name}</DrawerTitle>
                <DrawerDescription className="text-base font-medium">{asset.symbol}</DrawerDescription>
              </div>
              <Badge className={getTypeColorClass(asset.type)}>{asset.type}</Badge>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-muted-foreground">Current Price</span>
                <div className="text-2xl font-semibold">{formatPrice(asset.price)}</div>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Total Value</span>
                <div className="text-2xl font-semibold">{formatCurrency(asset.value)}</div>
              </div>
            </div>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Return</div>
                    <div className="text-xl font-semibold">{formatCurrency(asset.return)}</div>
                  </div>
                  <div className={`flex items-center gap-1 ${isPositiveReturn ? 'text-green-500' : 'text-red-500'}`}>
                    {isPositiveReturn ? (
                      <TrendingUp className="h-5 w-5" />
                    ) : (
                      <TrendingDown className="h-5 w-5" />
                    )}
                    <span className="text-lg font-semibold">{asset.returnPercentage.toFixed(2)}%</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Shares</div>
                    <div className="font-medium">{asset.shares.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost Basis</div>
                    <div className="font-medium">{formatPrice(asset.costBasis)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-lg font-semibold mb-3">Performance</h3>
              <div className="h-[200px]">
                <ChartContainer
                  config={{
                    value: { color: "#9b87f5" },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="date" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `$${(value / 1000)}k`}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent 
                            formatter={(value) => formatCurrency(Number(value))}
                          />
                        }
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#9b87f5" 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Asset Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Type</span>
                  <span>{asset.type}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span>{new Date(asset.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Total Cost</span>
                  <span>{formatCurrency(asset.costBasis * asset.shares)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Total Return</span>
                  <span className={isPositiveReturn ? 'text-green-500' : 'text-red-500'}>
                    {formatCurrency(asset.return)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button>Update Price</Button>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AssetDetailsDrawer;
