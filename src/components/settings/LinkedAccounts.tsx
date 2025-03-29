
import { useState } from "react";
import { Link2, Plus, Trash2, RefreshCw, Check, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface LinkedAccount {
  id: string;
  name: string;
  type: string;
  status: "active" | "pending" | "error";
  lastSync: string;
}

const mockAccounts: LinkedAccount[] = [
  {
    id: "1",
    name: "Main Checking Account",
    type: "Checking",
    status: "active",
    lastSync: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Savings Account",
    type: "Savings",
    status: "active",
    lastSync: "2023-05-15T10:30:00Z",
  },
  {
    id: "3",
    name: "Credit Card",
    type: "Credit",
    status: "error",
    lastSync: "2023-05-10T08:15:00Z",
  },
];

const LinkedAccounts = () => {
  const { toast } = useToast();
  const [accounts, setAccounts] = useState<LinkedAccount[]>(mockAccounts);
  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAccount, setNewAccount] = useState({
    name: "",
    type: "Checking",
  });

  const handleSync = (id: string) => {
    setSyncingId(id);
    
    // Simulate syncing process
    setTimeout(() => {
      setSyncingId(null);
      
      setAccounts(accounts.map(account => 
        account.id === id
          ? { ...account, status: "active", lastSync: new Date().toISOString() }
          : account
      ));
      
      toast({
        title: "Account synced",
        description: "Your account has been synced successfully.",
      });
    }, 2000);
  };

  const handleRemove = (id: string) => {
    setAccounts(accounts.filter(account => account.id !== id));
    
    toast({
      title: "Account removed",
      description: "The linked account has been removed successfully.",
    });
  };

  const handleAddAccount = () => {
    if (!newAccount.name.trim()) return;
    
    const account: LinkedAccount = {
      id: Date.now().toString(),
      name: newAccount.name,
      type: newAccount.type,
      status: "active",
      lastSync: new Date().toISOString(),
    };
    
    setAccounts([...accounts, account]);
    setNewAccount({ name: "", type: "Checking" });
    setIsDialogOpen(false);
    
    toast({
      title: "Account linked",
      description: "Your account has been linked successfully.",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Linked Accounts</CardTitle>
        <CardDescription>
          Manage external financial accounts connected to your profile
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {accounts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No accounts linked yet</p>
            </div>
          ) : (
            accounts.map((account) => (
              <div key={account.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 border rounded-md bg-card">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Link2 className="h-4 w-4 text-primary" />
                    <span className="font-medium">{account.name}</span>
                    {account.status === "active" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                        <Check className="h-3 w-3" /> Active
                      </span>
                    )}
                    {account.status === "error" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                        <AlertCircle className="h-3 w-3" /> Error
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span>{account.type}</span>
                    <span className="mx-2">•</span>
                    <span>Last synced: {formatDate(account.lastSync)}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSync(account.id)}
                    disabled={syncingId === account.id}
                  >
                    {syncingId === account.id ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Syncing...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Sync
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemove(account.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Link New Account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Link a New Account</DialogTitle>
              <DialogDescription>
                Connect an external financial account to your profile.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="account-name" className="text-sm font-medium">
                  Account Name
                </label>
                <Input
                  id="account-name"
                  placeholder="e.g., Main Checking Account"
                  value={newAccount.name}
                  onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="account-type" className="text-sm font-medium">
                  Account Type
                </label>
                <select
                  id="account-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={newAccount.type}
                  onChange={(e) => setNewAccount({ ...newAccount, type: e.target.value })}
                >
                  <option value="Checking">Checking</option>
                  <option value="Savings">Savings</option>
                  <option value="Credit">Credit Card</option>
                  <option value="Investment">Investment</option>
                  <option value="Loan">Loan</option>
                </select>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddAccount} disabled={!newAccount.name.trim()}>
                Link Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <p className="text-sm text-muted-foreground">
          Account data is read-only and securely encrypted
        </p>
      </CardFooter>
    </Card>
  );
};

export default LinkedAccounts;
