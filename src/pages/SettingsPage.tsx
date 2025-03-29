
import NavBar from "@/components/dashboard/NavBar";
import SettingsDashboard from "@/components/settings/SettingsDashboard";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 pt-20 pb-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Settings & Profile</h1>
          <p className="text-muted-foreground">Manage your account preferences and personal information</p>
        </div>
        <SettingsDashboard />
      </main>
    </div>
  );
};

export default SettingsPage;
