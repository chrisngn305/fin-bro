
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NetWorthProjection from "./NetWorthProjection";
import SpendingTrends from "./SpendingTrends";
import CashflowForecasting from "./CashflowForecasting";
import FinancialAlerts from "./FinancialAlerts";
import CustomInsights from "./CustomInsights";

const InsightsDashboard = () => {
  const [activeTab, setActiveTab] = useState("networth");

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6">
          <TabsTrigger value="networth">Net Worth</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
          <TabsTrigger value="cashflow">Cashflow</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="insights">Custom Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="networth" className="pt-4">
          <NetWorthProjection />
        </TabsContent>
        
        <TabsContent value="spending" className="pt-4">
          <SpendingTrends />
        </TabsContent>
        
        <TabsContent value="cashflow" className="pt-4">
          <CashflowForecasting />
        </TabsContent>
        
        <TabsContent value="alerts" className="pt-4">
          <FinancialAlerts />
        </TabsContent>
        
        <TabsContent value="insights" className="pt-4">
          <CustomInsights />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InsightsDashboard;
