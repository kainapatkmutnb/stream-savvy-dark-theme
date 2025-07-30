import { Calendar, DollarSign, Zap, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Subscription {
  id: string;
  name: string;
  logo: string;
  cost: number;
  billingDate: string;
  category: "video" | "music" | "gaming" | "productivity";
  priority: "high" | "medium" | "low";
  status: "active" | "expiring" | "unused";
  daysLeft: number;
  lastUsed?: string;
}

interface SubscriptionCardProps {
  subscription: Subscription;
  onClick: () => void;
  isSelected?: boolean;
}

const priorityConfig = {
  high: { color: "bg-priority-high text-white", label: "High Priority" },
  medium: { color: "bg-priority-medium text-warning-foreground", label: "Medium Priority" },
  low: { color: "bg-priority-low text-success-foreground", label: "Low Priority" },
};

const statusConfig = {
  active: { icon: Zap, color: "text-success" },
  expiring: { icon: AlertTriangle, color: "text-warning" },
  unused: { icon: AlertTriangle, color: "text-destructive" },
};

export function SubscriptionCard({ subscription, onClick, isSelected }: SubscriptionCardProps) {
  const priority = priorityConfig[subscription.priority];
  const status = statusConfig[subscription.status];
  const StatusIcon = status.icon;

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-card hover:bg-card-hover",
        isSelected && "ring-2 ring-primary shadow-glow"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-card flex items-center justify-center text-lg font-bold">
              {subscription.logo}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{subscription.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <StatusIcon className={cn("w-3 h-3", status.color)} />
                <span className="capitalize">{subscription.status}</span>
              </div>
            </div>
          </div>
          <Badge className={cn("text-xs px-2 py-1", priority.color)}>
            {priority.label}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span className="font-medium text-foreground">${subscription.cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{subscription.daysLeft} days left</span>
          </div>
        </div>

        {subscription.lastUsed && (
          <div className="mt-3 pt-3 border-t border-border">
            <span className="text-xs text-muted-foreground">
              Last used: {subscription.lastUsed}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}