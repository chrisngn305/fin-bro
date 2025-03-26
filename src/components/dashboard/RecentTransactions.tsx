
import { 
  ShoppingBag, Coffee, Utensils, Truck, Tag, 
  ShoppingCart, Package, Search
} from "lucide-react";
import MotionCard from "../ui/MotionCard";

const RecentTransactions = () => {
  // Demo data with transactions
  const transactions = [
    {
      id: "tx1",
      merchant: "Amazon",
      category: "Shopping",
      date: "Apr 12, 2023",
      amount: "-$84.29",
      icon: ShoppingCart,
      iconColor: "bg-orange-500"
    },
    {
      id: "tx2",
      merchant: "Starbucks",
      category: "Food & Drink",
      date: "Apr 11, 2023",
      amount: "-$5.75",
      icon: Coffee,
      iconColor: "bg-green-500"
    },
    {
      id: "tx3",
      merchant: "Uber",
      category: "Transportation",
      date: "Apr 10, 2023",
      amount: "-$22.15",
      icon: Truck,
      iconColor: "bg-gray-500"
    },
    {
      id: "tx4",
      merchant: "Target",
      category: "Shopping",
      date: "Apr 9, 2023",
      amount: "-$156.32",
      icon: ShoppingBag,
      iconColor: "bg-red-500"
    },
    {
      id: "tx5",
      merchant: "The Cheesecake Factory",
      category: "Restaurant",
      date: "Apr 8, 2023",
      amount: "-$64.95",
      icon: Utensils,
      iconColor: "bg-amber-500"
    },
    {
      id: "tx6",
      merchant: "Nike",
      category: "Shopping",
      date: "Apr 7, 2023",
      amount: "-$129.50",
      icon: Tag,
      iconColor: "bg-blue-500"
    },
    {
      id: "tx7",
      merchant: "Apple",
      category: "Technology",
      date: "Apr 6, 2023",
      amount: "-$9.99",
      icon: Package,
      iconColor: "bg-gray-800"
    }
  ];

  return (
    <MotionCard className="col-span-1 md:col-span-1 xl:col-span-2 h-[350px]" delay={450}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-[7px] h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-1.5 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-36"
            />
          </div>
          <button className="text-sm text-primary font-medium hover:underline">
            View All
          </button>
        </div>
      </div>
      
      <div className="space-y-2 overflow-auto pr-2 max-h-[275px]">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id}
            className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${transaction.iconColor} text-white`}>
                <transaction.icon size={16} />
              </div>
              <div>
                <h4 className="font-medium">{transaction.merchant}</h4>
                <p className="text-xs text-muted-foreground">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">{transaction.amount}</p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </MotionCard>
  );
};

export default RecentTransactions;
