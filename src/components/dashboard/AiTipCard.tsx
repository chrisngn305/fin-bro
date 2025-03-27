
import { Lightbulb } from "lucide-react";
import MotionCard from "../ui/MotionCard";

const AiTipCard = () => {
  // Demo tip data
  const tip = {
    title: "Saving Opportunity",
    message: "Based on your spending patterns, you could save $150/month by reducing your subscription services."
  };

  return (
    <MotionCard className="h-full bg-gradient-to-br from-indigo-50 to-purple-50" delay={400}>
      <div className="flex items-start gap-3">
        <div className="bg-indigo-500 text-white p-2 rounded-lg">
          <Lightbulb size={20} />
        </div>
        
        <div>
          <h3 className="font-semibold text-base mb-1">AI Tip of the Day</h3>
          <h4 className="font-medium text-sm text-indigo-700 mb-2">{tip.title}</h4>
          <p className="text-sm text-gray-700">{tip.message}</p>
          
          <div className="mt-4">
            <button className="text-xs font-medium text-indigo-600 hover:underline">
              See Detailed Analysis →
            </button>
          </div>
        </div>
      </div>
    </MotionCard>
  );
};

export default AiTipCard;
