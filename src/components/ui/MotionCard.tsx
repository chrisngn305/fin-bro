
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface MotionCardProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  premium?: boolean;
}

const MotionCard: React.FC<MotionCardProps> = ({ 
  className, 
  children, 
  delay = 0,
  premium = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={cn(
        premium ? "glass-card-premium" : "glass-card",
        "rounded-lg p-4 transition-all duration-500 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MotionCard;
