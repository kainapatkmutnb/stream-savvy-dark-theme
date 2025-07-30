import { useState } from "react";
import { SubscriptionCard, type Subscription } from "./SubscriptionCard";
import { SubscriptionDetail } from "./SubscriptionDetail";
import { SubscriptionsPage } from "./SubscriptionsPage";
import { AnalyticsPage } from "./AnalyticsPage";
import { CalendarPage } from "./CalendarPage";
import { NotificationsPage } from "./NotificationsPage";
import { SettingsPage } from "./SettingsPage";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockSubscriptions: Subscription[] = [
  {
    id: "1",
    name: "Schedule a Netflix review",
    logo: "🎬",
    cost: 15.99,
    billingDate: "Jul 10 - 14",
    category: "video",
    priority: "high",
    status: "active",
    daysLeft: 5,
    lastUsed: "2 hours ago"
  },
  {
    id: "2",
    name: "Spotify Premium renewal",
    logo: "🎵",
    cost: 9.99,
    billingDate: "Jul 15",
    category: "music",
    priority: "medium",
    status: "active",
    daysLeft: 12,
    lastUsed: "1 day ago"
  },
  {
    id: "3",
    name: "Disney+ yearly plan",
    logo: "🏰",
    cost: 79.99,
    billingDate: "Aug 20",
    category: "video",
    priority: "high",
    status: "expiring",
    daysLeft: 30
  },
  {
    id: "4",
    name: "Adobe Creative Suite",
    logo: "🎨",
    cost: 52.99,
    billingDate: "Aug 1",
    category: "productivity",
    priority: "medium",
    status: "active",
    daysLeft: 8,
    lastUsed: "5 hours ago"
  },
  {
    id: "5",
    name: "Unused gaming service",
    logo: "🎮",
    cost: 14.99,
    billingDate: "Jul 25",
    category: "gaming",
    priority: "low",
    status: "unused",
    daysLeft: 20,
    lastUsed: "2 months ago"
  }
];

interface DashboardProps {
  activeTab: string;
}

export function Dashboard({ activeTab }: DashboardProps) {
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  const todoCount = mockSubscriptions.filter(s => s.status === "expiring" || s.priority === "high").length;
  const inProgressCount = mockSubscriptions.filter(s => s.status === "active" && s.priority === "medium").length;
  const completedCount = mockSubscriptions.filter(s => s.status === "unused" || s.priority === "low").length;

  const renderContent = () => {
    switch (activeTab) {
      case "subscriptions":
        return <SubscriptionsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "calendar":
        return <CalendarPage />;
      case "notifications":
        return <NotificationsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return renderDashboard();
    }
  };

  const renderDashboard = () => (

    <div className="flex-1 flex">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">My Subscriptions</h1>
          <div className="flex gap-4">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="expiring">Expiring</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {/* TODO Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold text-foreground">REVIEW NEEDED</h2>
              <Badge variant="secondary" className="text-xs">{todoCount}</Badge>
            </div>
            <div className="grid gap-4">
              {mockSubscriptions
                .filter(s => s.status === "expiring" || s.priority === "high")
                .map((subscription) => (
                  <SubscriptionCard
                    key={subscription.id}
                    subscription={subscription}
                    onClick={() => setSelectedSubscription(subscription)}
                    isSelected={selectedSubscription?.id === subscription.id}
                  />
                ))}
            </div>
          </div>

          {/* IN PROGRESS Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold text-foreground">ACTIVE</h2>
              <Badge variant="secondary" className="text-xs">{inProgressCount}</Badge>
            </div>
            <div className="grid gap-4">
              {mockSubscriptions
                .filter(s => s.status === "active" && s.priority === "medium")
                .map((subscription) => (
                  <SubscriptionCard
                    key={subscription.id}
                    subscription={subscription}
                    onClick={() => setSelectedSubscription(subscription)}
                    isSelected={selectedSubscription?.id === subscription.id}
                  />
                ))}
            </div>
          </div>

          {/* COMPLETED Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold text-foreground">CONSIDER CANCELING</h2>
              <Badge variant="secondary" className="text-xs">{completedCount}</Badge>
            </div>
            <div className="grid gap-4">
              {mockSubscriptions
                .filter(s => s.status === "unused" || s.priority === "low")
                .map((subscription) => (
                  <SubscriptionCard
                    key={subscription.id}
                    subscription={subscription}
                    onClick={() => setSelectedSubscription(subscription)}
                    isSelected={selectedSubscription?.id === subscription.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Subscription Detail */}
      <div className="w-1/2 border-l border-border bg-card">
        <SubscriptionDetail subscription={selectedSubscription} />
      </div>
    </div>
  );

  return (
    <div className="flex-1">
      {renderContent()}
    </div>
  );
}