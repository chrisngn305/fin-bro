import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

const SIDEBAR_STATE_KEY = "sidebar:state";

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem(SIDEBAR_STATE_KEY, JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isCollapsed={isCollapsed} onCollapseChange={setIsCollapsed} />
      <main className={cn(
        "flex-1 transition-all duration-300",
        isCollapsed ? "ml-[70px]" : "ml-[250px]"
      )}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
