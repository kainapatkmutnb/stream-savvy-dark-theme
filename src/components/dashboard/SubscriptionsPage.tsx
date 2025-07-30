import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubscriptionCard } from "./SubscriptionCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockSubscriptions = [
  {
    id: "1",
    name: "Netflix",
    cost: 15.99,
    billingDate: "2025-08-05",
    category: "video" as const,
    status: "active" as const,
    logo: "🎬",
    priority: "high" as const,
    daysLeft: 5
  },
  {
    id: "2",
    name: "Spotify Premium",
    cost: 9.99,
    billingDate: "2025-08-12",
    category: "music" as const,
    status: "active" as const,
    logo: "🎵",
    priority: "medium" as const,
    daysLeft: 12
  },
  {
    id: "3",
    name: "Adobe Creative Cloud",
    cost: 52.99,
    billingDate: "2025-08-01",
    category: "productivity" as const,
    status: "expiring" as const,
    logo: "🎨",
    priority: "high" as const,
    daysLeft: 1
  },
  {
    id: "4",
    name: "Disney+",
    cost: 7.99,
    billingDate: "2025-08-15",
    category: "video" as const,
    status: "unused" as const,
    logo: "🏰",
    priority: "low" as const,
    daysLeft: 15
  },
  {
    id: "5",
    name: "GitHub Pro",
    cost: 4.00,
    billingDate: "2025-08-20",
    category: "productivity" as const,
    status: "active" as const,
    logo: "💻",
    priority: "medium" as const,
    daysLeft: 20
  },
  {
    id: "6",
    name: "YouTube Premium",
    cost: 11.99,
    billingDate: "2025-08-08",
    category: "video" as const,
    status: "unused" as const,
    logo: "📺",
    priority: "low" as const,
    daysLeft: 8
  }
];

export function SubscriptionsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Subscriptions</h1>
          <p className="text-muted-foreground">Manage all your streaming and software subscriptions</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          <Plus className="h-4 w-4 mr-2" />
          Add Subscription
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search subscriptions..." 
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="video">Video</SelectItem>
            <SelectItem value="music">Music</SelectItem>
            <SelectItem value="software">Software</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Subscription Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockSubscriptions.map((subscription) => (
          <SubscriptionCard 
            key={subscription.id} 
            subscription={subscription}
            onClick={() => {}}
          />
        ))}
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-card rounded-lg p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">Total Subscriptions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">$102.95</div>
            <div className="text-sm text-muted-foreground">Monthly Cost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">4</div>
            <div className="text-sm text-muted-foreground">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-destructive">2</div>
            <div className="text-sm text-muted-foreground">Need Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}