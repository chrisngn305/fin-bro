
import { Button } from "@/components/ui/button";
import { PiggyBank, TrendingUp, CreditCard, Dollar, Wallet, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SuggestedPromptsProps {
  onUsePrompt: (prompt: string) => void;
}

const SuggestedPrompts = ({ onUsePrompt }: SuggestedPromptsProps) => {
  const prompts = [
    {
      text: "How can I save more money each month?",
      icon: <PiggyBank className="h-4 w-4" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      text: "What investments would suit my risk profile?",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "bg-green-100 text-green-700"
    },
    {
      text: "How can I pay off my debt faster?",
      icon: <CreditCard className="h-4 w-4" />,
      color: "bg-red-100 text-red-700"
    },
    {
      text: "How should I structure my budget?",
      icon: <Dollar className="h-4 w-4" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      text: "Am I overspending in any categories?",
      icon: <Wallet className="h-4 w-4" />,
      color: "bg-amber-100 text-amber-700"
    },
    {
      text: "How can I reach my financial goals faster?",
      icon: <Target className="h-4 w-4" />,
      color: "bg-indigo-100 text-indigo-700"
    }
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Suggested Questions</CardTitle>
        <CardDescription>Quick prompts to get started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {prompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-sm h-auto py-2 px-3 font-normal"
            onClick={() => onUsePrompt(prompt.text)}
          >
            <span className={`${prompt.color} p-1 rounded-full mr-2`}>{prompt.icon}</span>
            {prompt.text}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default SuggestedPrompts;
