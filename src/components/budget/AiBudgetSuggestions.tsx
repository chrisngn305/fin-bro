
import { Sparkles, BrainCircuit, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AiBudgetSuggestions = () => {
  // This would normally come from an API in a real application
  const suggestions = [
    {
      id: "1",
      category: "Groceries",
      currentSpend: 450,
      suggestedBudget: 400,
      savings: 50,
      tip: "Consider meal planning to reduce food waste and grocery expenses"
    },
    {
      id: "2",
      category: "Entertainment",
      currentSpend: 200,
      suggestedBudget: 150,
      savings: 50,
      tip: "Look for free local events and activities instead of paid entertainment"
    },
    {
      id: "3",
      category: "Dining Out",
      currentSpend: 300,
      suggestedBudget: 200,
      savings: 100,
      tip: "Try limiting restaurant visits to once a week to save on dining expenses"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <CardTitle>AI Budget Suggestions</CardTitle>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            Refresh <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
        <CardDescription>
          Intelligent suggestions to optimize your budget
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="rounded-lg border p-3 bg-muted/50">
            <div className="flex justify-between mb-2">
              <div className="font-medium">{suggestion.category}</div>
              <div className="text-sm text-green-600 font-medium">
                Save ${suggestion.savings}/mo
              </div>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <div>Current: ${suggestion.currentSpend}/mo</div>
              <div>Suggested: ${suggestion.suggestedBudget}/mo</div>
            </div>
            <div className="flex items-start gap-2 mt-3 bg-background rounded-md p-2">
              <BrainCircuit className="h-4 w-4 text-purple-500 mt-0.5" />
              <div className="text-xs">{suggestion.tip}</div>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full text-sm">View all suggestions</Button>
      </CardContent>
    </Card>
  );
};

export default AiBudgetSuggestions;
