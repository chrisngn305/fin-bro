
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  PieChart, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Menu, 
  X, 
  Briefcase, 
  DollarSign,
  Flag,
  PiggyBank,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Dashboard", icon: Home, path: "/" },
    { title: "Transactions", icon: CreditCard, path: "/transactions" },
    { title: "Budget", icon: BarChart3, path: "/budget" },
    { title: "Debt", icon: DollarSign, path: "/debt" },
    { title: "Investments", icon: Briefcase, path: "/investments" },
    { title: "Goals", icon: Flag, path: "/goals" },
    { title: "Funds", icon: PiggyBank, path: "/funds" },
    { title: "Insights", icon: TrendingUp, path: "/insights" },
    { title: "Advisor", icon: MessageCircle, path: "/advisor" },
    { title: "Settings", icon: Settings, path: "/" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            FinancePro
          </span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`flex items-center gap-1.5 py-1 px-2 rounded-md transition-colors ${
                  isActive(link.path) 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-gray-600 hover:text-primary hover:bg-primary/5"
                }`}
              >
                <link.icon className="h-4 w-4" />
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-primary/10 text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}

        {/* Mobile Menu */}
        {isMobile && isOpen && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in pt-16">
            <nav className="container px-4 flex flex-col space-y-6 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`flex items-center gap-3 p-2 text-lg ${
                    isActive(link.path) ? "font-medium text-primary" : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="h-5 w-5 text-primary" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
