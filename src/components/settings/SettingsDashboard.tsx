
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileSettings from "./ProfileSettings";
import NotificationSettings from "./NotificationSettings";
import BudgetSettings from "./BudgetSettings";
import LinkedAccounts from "./LinkedAccounts";

const SettingsDashboard = () => {
  return (
    <Tabs defaultValue="profile" className="space-y-4">
      <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-4 gap-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="budget">Budget Categories</TabsTrigger>
        <TabsTrigger value="accounts">Linked Accounts</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="space-y-4">
        <ProfileSettings />
      </TabsContent>
      
      <TabsContent value="notifications" className="space-y-4">
        <NotificationSettings />
      </TabsContent>
      
      <TabsContent value="budget" className="space-y-4">
        <BudgetSettings />
      </TabsContent>
      
      <TabsContent value="accounts" className="space-y-4">
        <LinkedAccounts />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsDashboard;
