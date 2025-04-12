import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Home, 
  PieChart, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Briefcase, 
  DollarSign,
  Flag,
  PiggyBank,
  TrendingUp,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

interface NavItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

interface SidebarProps {
  isCollapsed: boolean;
  onCollapseChange: (collapsed: boolean) => void;
}

const navItems: NavItem[] = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Transactions", icon: CreditCard, path: "/transactions" },
  { title: "Budget", icon: BarChart3, path: "/budget" },
  { title: "Debt", icon: DollarSign, path: "/debt" },
  { title: "Investments", icon: Briefcase, path: "/investments" },
  { title: "Goals", icon: Flag, path: "/goals" },
  { title: "Funds", icon: PiggyBank, path: "/funds" },
  { title: "Insights", icon: TrendingUp, path: "/insights" },
  { title: "Advisor", icon: MessageCircle, path: "/advisor" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const Sidebar = ({ isCollapsed, onCollapseChange }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleLogout = async () => {
    try {
      logout();
      // Wait a moment for the state to update
      await new Promise(resolve => setTimeout(resolve, 100));
      // Navigate to login page
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
      // Even if there's an error, we still want to navigate to login
      navigate('/login', { replace: true });
    }
  };
  
  return (
    <aside 
      className={cn(
        "h-screen fixed left-0 top-0 z-50 flex flex-col bg-background border-r transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b">
        <span className={cn(
          "text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 transition-all duration-300",
          isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
        )}>
          FinancePro
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          className="ml-auto" 
          onClick={() => onCollapseChange(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  isActive(item.path) 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className={cn(
                  "transition-all duration-300", 
                  isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                )}>
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t p-4">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={cn(
            "flex items-center gap-3 px-3 py-2 w-full rounded-md transition-colors text-gray-600 hover:text-red-600 hover:bg-red-50",
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          <span className={cn(
            "transition-all duration-300",
            isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
          )}>
            Logout
          </span>
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
