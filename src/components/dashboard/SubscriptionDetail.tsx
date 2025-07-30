import { Calendar, DollarSign, TrendingUp, Download, Eye, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Subscription } from "./SubscriptionCard";
import { cn } from "@/lib/utils";

interface SubscriptionDetailProps {
  subscription: Subscription | null;
}

const priorityConfig = {
  high: { color: "bg-priority-high text-white", label: "High Priority" },
  medium: { color: "bg-priority-medium text-warning-foreground", label: "Medium Priority" },
  low: { color: "bg-priority-low text-success-foreground", label: "Low Priority" },
};

export function SubscriptionDetail({ subscription }: SubscriptionDetailProps) {
  if (!subscription) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Select a subscription to view details</p>
        </div>
      </div>
    );
  }

  const priority = priorityConfig[subscription.priority];

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground">Subscriptions</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Manage {subscription.name} Subscription
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Expand
            </Button>
            <Button variant="ghost" size="sm">
              •••
            </Button>
          </div>
        </div>
        
        <Badge className={cn("text-xs px-3 py-1", priority.color)}>
          {priority.label}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Cost and Time Tracking */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Monthly cost: ${subscription.cost}</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {subscription.category === "video" && "Premium video streaming service with unlimited access to movies, TV shows, and original content. Auto-renews monthly unless cancelled."}
            {subscription.category === "music" && "Music streaming platform with millions of songs, podcasts, and playlists. Includes offline downloads and high-quality audio."}
            {subscription.category === "gaming" && "Gaming subscription service providing access to a library of games and exclusive content."}
            {subscription.category === "productivity" && "Productivity suite with advanced features for professional use and collaboration tools."}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mt-2">
            Next billing date: {subscription.billingDate}. You have {subscription.daysLeft} days remaining in this billing cycle.
          </p>
        </div>

        {/* Attachments */}
        <div>
          <h3 className="font-semibold mb-3">Attachments</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-destructive/20 rounded flex items-center justify-center">
                  <span className="text-destructive text-sm">📄</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Billing_Statement.pdf</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date().toLocaleDateString()} PM, {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  <span className="text-primary text-sm">⭐</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Usage_Analytics.csv</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date().toLocaleDateString()} PM, {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <h3 className="font-semibold">Comments</h3>
            <span className="text-sm text-muted-foreground">Updates</span>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">JS</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">John Smith</span>
                  <span className="text-xs text-muted-foreground">17th Feb 2024</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Consider canceling if usage drops below 5 hours this month.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs">JS</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">John Smith</span>
                  <span className="text-xs text-muted-foreground">Just Now</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Usage has increased this month, keeping subscription active.
                </p>
              </div>
            </div>

            <Textarea 
              placeholder="Add a comment..." 
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}