
import { Lightbulb, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock AI suggestions
const mockSuggestions = [
  {
    id: '1',
    title: 'Reduce subscription services',
    description: 'You're spending $65/month on streaming services you rarely use. Consider consolidating to save ~$30/month.',
    impact: 'Save $360/year',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: '2',
    title: 'Grocery shopping optimization',
    description: 'Shopping at discount stores for staples could reduce your grocery bill by 15%.',
    impact: 'Save $540/year',
    color: 'bg-green-50 border-green-200'
  },
  {
    id: '3',
    title: 'Coffee budget adjustment',
    description: 'Making coffee at home on weekdays could save you significant money on daily purchases.',
    impact: 'Save $720/year',
    color: 'bg-purple-50 border-purple-200'
  }
];

const AiBudgetSuggestions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          AI Budget Advisor
        </CardTitle>
        <CardDescription>
          Smart suggestions to improve your finances
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {mockSuggestions.map((suggestion) => (
            <AccordionItem key={suggestion.id} value={suggestion.id}>
              <AccordionTrigger className="text-sm hover:no-underline">
                {suggestion.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className={`p-3 rounded-lg border ${suggestion.color} mt-2 mb-3`}>
                  <p className="text-sm mb-3">{suggestion.description}</p>
                  <div className="flex items-center gap-1 text-green-700 font-medium text-sm">
                    <Check size={14} />
                    <span>{suggestion.impact}</span>
                  </div>
                </div>
                <button className="text-xs text-primary hover:underline">
                  Apply this suggestion to my budget
                </button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-4 pt-4 border-t">
          <button className="w-full py-2 px-4 border border-primary/30 text-sm text-primary rounded-md hover:bg-primary/5 transition-colors">
            Get Custom Budget Analysis
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AiBudgetSuggestions;
