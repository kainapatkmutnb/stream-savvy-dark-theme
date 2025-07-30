import { Calendar, CreditCard, BarChart3, Settings, Bell, Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: Home },
  { id: "subscriptions", name: "Subscriptions", icon: CreditCard },
  { id: "analytics", name: "Analytics", icon: BarChart3 },
  { id: "calendar", name: "Calendar", icon: Calendar },
  { id: "notifications", name: "Notifications", icon: Bell },
  { id: "settings", name: "Settings", icon: Settings },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="h-screen w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-bold text-foreground">StreamSavvy</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12",
                  activeTab === item.id 
                    ? "bg-secondary text-secondary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Button>
            );
          })}
        </div>

        {/* Add Subscription Button */}
        <div className="mt-8">
          <Button className="w-full gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" />
            Add Subscription
          </Button>
        </div>
      </nav>

      {/* Monthly Summary */}
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-card rounded-lg p-4">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">This Month</h3>
          <div className="text-2xl font-bold text-foreground">$127.45</div>
          <div className="text-sm text-success">-$12.99 vs last month</div>
        </div>
      </div>
    </div>
  );
}