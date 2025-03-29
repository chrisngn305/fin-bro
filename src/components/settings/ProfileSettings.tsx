
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Globe2, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  timezone: z.string().min(1, { message: "Please select a timezone." }),
  currency: z.string().min(1, { message: "Please select a currency." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: ProfileFormValues = {
  name: "John Doe",
  email: "john.doe@example.com",
  timezone: "America/New_York",
  currency: "USD",
};

const ProfileSettings = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
      console.log(data);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your personal information and preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="flex border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background">
                      <div className="flex items-center px-3 border-r bg-muted/50">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="flex border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background">
                      <div className="flex items-center px-3 border-r bg-muted/50">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>
                    This is the email used for account notifications.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="timezone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timezone</FormLabel>
                    <FormControl>
                      <div className="flex border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background">
                        <div className="flex items-center px-3 border-r bg-muted/50">
                          <Globe2 className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="border-0 focus:ring-0 w-full">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                            <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                            <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                            <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                            <SelectItem value="Europe/London">London (GMT)</SelectItem>
                            <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                            <SelectItem value="Asia/Tokyo">Tokyo (JST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <FormControl>
                      <div className="flex border rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ring-offset-background">
                        <div className="flex items-center px-3 border-r bg-muted/50">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="border-0 focus:ring-0 w-full">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="GBP">GBP (£)</SelectItem>
                            <SelectItem value="JPY">JPY (¥)</SelectItem>
                            <SelectItem value="CAD">CAD (C$)</SelectItem>
                            <SelectItem value="AUD">AUD (A$)</SelectItem>
                            <SelectItem value="CNY">CNY (¥)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
