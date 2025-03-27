
import { CalendarClock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BudgetTimeframeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const BudgetTimeframeSelector = ({ value, onChange }: BudgetTimeframeSelectorProps) => {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-md px-2 shadow-sm">
      <CalendarClock size={18} className="text-muted-foreground" />
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[140px] border-0 pr-1 focus:ring-0">
          <SelectValue placeholder="Select timeframe" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="monthly">Monthly View</SelectItem>
          <SelectItem value="weekly">Weekly View</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BudgetTimeframeSelector;
