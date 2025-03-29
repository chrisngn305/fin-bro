
import { useState } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

interface BudgetCategory {
  id: string;
  name: string;
  isActive: boolean;
  isIncome: boolean;
}

const defaultBudgetCategories: BudgetCategory[] = [
  { id: "1", name: "Housing", isActive: true, isIncome: false },
  { id: "2", name: "Food & Dining", isActive: true, isIncome: false },
  { id: "3", name: "Transportation", isActive: true, isIncome: false },
  { id: "4", name: "Entertainment", isActive: true, isIncome: false },
  { id: "5", name: "Shopping", isActive: true, isIncome: false },
  { id: "6", name: "Healthcare", isActive: true, isIncome: false },
  { id: "7", name: "Personal Care", isActive: true, isIncome: false },
  { id: "8", name: "Utilities", isActive: true, isIncome: false },
];

const defaultIncomeCategories: BudgetCategory[] = [
  { id: "i1", name: "Salary", isActive: true, isIncome: true },
  { id: "i2", name: "Freelance", isActive: true, isIncome: true },
  { id: "i3", name: "Investments", isActive: true, isIncome: true },
  { id: "i4", name: "Other Income", isActive: true, isIncome: true },
];

const BudgetSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'expense' | 'income'>('expense');
  const [categories, setCategories] = useState<BudgetCategory[]>([
    ...defaultBudgetCategories,
    ...defaultIncomeCategories,
  ]);
  const [newCategoryName, setNewCategoryName] = useState("");

  const filteredCategories = categories.filter(
    category => category.isIncome === (activeTab === 'income')
  );

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    
    const newCategory: BudgetCategory = {
      id: Date.now().toString(),
      name: newCategoryName.trim(),
      isActive: true,
      isIncome: activeTab === 'income',
    };
    
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    
    toast({
      title: "Category added",
      description: `Added "${newCategoryName}" to your ${activeTab} categories.`,
    });
  };

  const handleRemoveCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
    
    toast({
      title: "Category removed",
      description: "The category has been removed from your list.",
    });
  };

  const handleToggleCategory = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, isActive: !category.isActive } 
        : category
    ));
  };

  const saveSettings = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Budget categories updated",
        description: "Your budget category preferences have been saved successfully.",
      });
      console.log(categories);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Categories</CardTitle>
        <CardDescription>
          Customize your budget categories and income sources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex space-x-2">
            <Toggle 
              pressed={activeTab === 'expense'} 
              onPressedChange={() => setActiveTab('expense')} 
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Expense Categories
            </Toggle>
            <Toggle 
              pressed={activeTab === 'income'} 
              onPressedChange={() => setActiveTab('income')} 
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Income Sources
            </Toggle>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">
              {activeTab === 'expense' ? 'Expense Categories' : 'Income Sources'}
            </h3>
            
            <div className="space-y-2">
              {filteredCategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between gap-2 p-2 border rounded-md bg-card">
                  <div className="flex items-center gap-2">
                    <Toggle 
                      pressed={category.isActive} 
                      onPressedChange={() => handleToggleCategory(category.id)}
                      size="sm"
                      variant="outline"
                      aria-label={`Toggle ${category.name}`}
                    >
                      {category.isActive ? "Active" : "Inactive"}
                    </Toggle>
                    <span className={category.isActive ? "font-medium" : "text-muted-foreground"}>
                      {category.name}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleRemoveCategory(category.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Input
                placeholder={activeTab === 'expense' ? "Add new expense category..." : "Add new income source..."}
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
              />
              <Button 
                onClick={handleAddCategory} 
                disabled={!newCategoryName.trim()}
                variant="outline"
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button onClick={saveSettings} disabled={isLoading} className="w-full md:w-auto">
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save Category Settings"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BudgetSettings;
