
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ChatInterface from "./ChatInterface";
import SuggestedPrompts from "./SuggestedPrompts";
import FinancialContext from "./FinancialContext";

const FinancialAdvisor = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI Financial Advisor. How can I help with your financial questions today?"
    }
  ]);

  const handleSendMessage = (message: string) => {
    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: message }]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let response = "";
      
      // Simple mock responses based on keywords
      if (message.toLowerCase().includes("save") || message.toLowerCase().includes("saving")) {
        response = "To improve your savings, consider the 50/30/20 rule: allocate 50% of your income to needs, 30% to wants, and 20% to savings. Based on your current spending patterns, you could increase your savings rate by reducing restaurant expenses (currently $420/month) and subscription services ($85/month).";
      } else if (message.toLowerCase().includes("invest") || message.toLowerCase().includes("investment")) {
        response = "Based on your financial profile, a diversified investment approach would be suitable. Consider allocating 60% to low-cost index funds, 20% to bonds, and 20% to individual stocks if you're comfortable with research. Your current investment allocation is heavily weighted toward tech stocks (65%), which presents higher risk.";
      } else if (message.toLowerCase().includes("debt") || message.toLowerCase().includes("loan")) {
        response = "Looking at your debt profile, I recommend prioritizing your credit card debt ($3,500 at 18% APR) using the avalanche method. By redirecting $200 from your entertainment budget, you could be debt-free in approximately 20 months and save $450 in interest.";
      } else if (message.toLowerCase().includes("budget") || message.toLowerCase().includes("spending")) {
        response = "Analyzing your recent transactions, your top spending categories are housing (35%), food (15%), and transportation (12%). Your restaurant spending has increased by 20% in the last 3 months. Setting a weekly dining budget of $75 would help align with your financial goals while still enjoying meals out.";
      } else if (message.toLowerCase().includes("goal")) {
        response = "Based on your current savings rate and financial goals, you're on track to reach your house down payment goal in 3.2 years. To accelerate this timeline, consider automating an additional $150/month to your dedicated 'Home Fund' and reducing your discretionary spending by 10%.";
      } else {
        response = "I'd be happy to help with that. Based on your financial profile, I can provide personalized recommendations about saving strategies, investment options, debt management, budgeting techniques, or goal planning. What specific aspect of your finances would you like to focus on?";
      }
      
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    }, 1500);
  };

  const handleUsePrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 space-y-6">
        <Card className="border-none shadow-md">
          <CardContent className="p-0">
            <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1 space-y-6">
        <SuggestedPrompts onUsePrompt={handleUsePrompt} />
        <FinancialContext />
      </div>
    </div>
  );
};

export default FinancialAdvisor;
