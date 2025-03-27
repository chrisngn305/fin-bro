
import { useState } from "react";
import { Calendar, Tag, ArrowDownUp, Filter } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Mock categories data
const categories = [
  "Groceries",
  "Housing",
  "Transport",
  "Dining",
  "Entertainment",
  "Shopping",
  "Health",
  "Education",
  "Income",
  "Other"
];

// Mock tags data
const availableTags = [
  "Essentials",
  "Luxury",
  "Car",
  "Salary",
  "Side Income",
  "Monthly",
  "Emergency",
  "Subscription",
  "Healthcare",
  "Travel"
];

interface TransactionFiltersProps {
  activeFilters: {
    dateRange: string;
    categories: string[];
    type: string;
    amountRange: number[];
    tags: string[];
  };
  setActiveFilters: React.Dispatch<React.SetStateAction<{
    dateRange: string;
    categories: string[];
    type: string;
    amountRange: number[];
    tags: string[];
  }>>;
}

const TransactionFilters = ({ activeFilters, setActiveFilters }: TransactionFiltersProps) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  
  const toggleCategory = (category: string) => {
    setActiveFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };
  
  const toggleTag = (tag: string) => {
    setActiveFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };
  
  const setType = (type: string) => {
    setActiveFilters(prev => ({
      ...prev,
      type
    }));
  };
  
  const setAmountRange = (value: number[]) => {
    setActiveFilters(prev => ({
      ...prev,
      amountRange: value
    }));
  };
  
  const clearAllFilters = () => {
    setActiveFilters({
      dateRange: "all",
      categories: [],
      type: "all",
      amountRange: [0, 5000],
      tags: []
    });
  };
  
  // Calculate total active filters
  const activeFilterCount = 
    (activeFilters.dateRange !== "all" ? 1 : 0) +
    activeFilters.categories.length +
    (activeFilters.type !== "all" ? 1 : 0) +
    activeFilters.tags.length;

  return (
    <div className="bg-white rounded-lg border shadow-sm h-fit">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold flex items-center gap-2">
          <Filter size={16} /> Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </h2>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          {isFiltersOpen ? "Hide" : "Show"}
        </Button>
      </div>
      
      <Collapsible open={isFiltersOpen} onOpenChange={setIsFiltersOpen}>
        <CollapsibleContent>
          <div className="p-4 space-y-6">
            {/* Date filter */}
            <div>
              <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
                <Calendar size={16} /> Date Range
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant={activeFilters.dateRange === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilters(prev => ({ ...prev, dateRange: "all" }))}
                >
                  All Time
                </Button>
                <Button 
                  variant={activeFilters.dateRange === "this-month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilters(prev => ({ ...prev, dateRange: "this-month" }))}
                >
                  This Month
                </Button>
                <Button 
                  variant={activeFilters.dateRange === "last-month" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilters(prev => ({ ...prev, dateRange: "last-month" }))}
                >
                  Last Month
                </Button>
                <Button 
                  variant={activeFilters.dateRange === "last-3-months" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilters(prev => ({ ...prev, dateRange: "last-3-months" }))}
                >
                  Last 3 Months
                </Button>
              </div>
            </div>
            
            <Separator />
            
            {/* Transaction type filter */}
            <div>
              <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
                <ArrowDownUp size={16} /> Transaction Type
              </h3>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant={activeFilters.type === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setType("all")}
                >
                  All
                </Button>
                <Button 
                  variant={activeFilters.type === "income" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setType("income")}
                >
                  Income
                </Button>
                <Button 
                  variant={activeFilters.type === "expense" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setType("expense")}
                >
                  Expense
                </Button>
              </div>
            </div>
            
            <Separator />
            
            {/* Amount range filter */}
            <div>
              <div className="flex justify-between mb-3">
                <h3 className="text-sm font-medium">Amount Range</h3>
                <span className="text-sm text-muted-foreground">
                  ${activeFilters.amountRange[0]} - ${activeFilters.amountRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 5000]}
                value={activeFilters.amountRange}
                min={0}
                max={5000}
                step={100}
                onValueChange={setAmountRange}
              />
            </div>
            
            <Separator />
            
            {/* Categories filter */}
            <div>
              <h3 className="text-sm font-medium mb-3">Categories</h3>
              <div className="grid grid-cols-1 gap-2 max-h-[150px] overflow-y-auto pr-1">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category}`} 
                      checked={activeFilters.categories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            {/* Tags filter */}
            <div>
              <h3 className="text-sm font-medium flex items-center gap-2 mb-3">
                <Tag size={16} /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={activeFilters.tags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            {/* Clear all filters */}
            <Button
              variant="outline"
              className="w-full"
              onClick={clearAllFilters}
              disabled={activeFilterCount === 0}
            >
              Clear All Filters
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TransactionFilters;
