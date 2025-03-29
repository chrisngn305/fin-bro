
import { useEffect } from "react";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 ml-[70px] lg:ml-[250px] transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
