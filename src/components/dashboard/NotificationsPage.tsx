import { Bell, Check, X, Settings, Clock, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const notifications = [
  {
    id: "1",
    type: "payment_reminder",
    title: "Payment Due Tomorrow",
    message: "Adobe Creative Cloud payment of $52.99 is due tomorrow",
    time: "2 hours ago",
    read: false,
    icon: DollarSign,
    color: "text-destructive"
  },
  {
    id: "2",
    type: "price_increase",
    title: "Price Increase Alert",
    message: "Netflix has increased their premium plan by $2/month",
    time: "1 day ago",
    read: false,
    icon: TrendingUp,
    color: "text-amber-500"
  },
  {
    id: "3",
    type: "usage_alert",
    title: "Low Usage Detected",
    message: "You haven't used Disney+ in 30 days. Consider canceling?",
    time: "2 days ago",
    read: true,
    icon: AlertTriangle,
    color: "text-orange-500"
  },
  {
    id: "4",
    type: "payment_success",
    title: "Payment Processed",
    message: "Spotify Premium payment of $9.99 was successful",
    time: "3 days ago",
    read: true,
    icon: Check,
    color: "text-success"
  },
  {
    id: "5",
    type: "cancellation_suggestion",
    title: "Cancellation Suggestion",
    message: "YouTube Premium shows low activity. Save $143.88/year by canceling",
    time: "1 week ago",
    read: true,
    icon: AlertTriangle,
    color: "text-destructive"
  }
];

const notificationSettings = [
  {
    id: "payment_reminders",
    label: "Payment Reminders",
    description: "Get notified 1-3 days before payments are due",
    enabled: true
  },
  {
    id: "price_changes",
    label: "Price Changes",
    description: "Alert when subscription prices increase or decrease",
    enabled: true
  },
  {
    id: "usage_alerts",
    label: "Usage Alerts",
    description: "Notifications about low usage services",
    enabled: false
  },
  {
    id: "cancellation_suggestions",
    label: "Cancellation Suggestions",
    description: "Smart recommendations to cancel unused subscriptions",
    enabled: true
  },
  {
    id: "monthly_summary",
    label: "Monthly Summary",
    description: "Monthly spending report and analytics",
    enabled: true
  }
];

export function NotificationsPage() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground">
            Manage your alerts and notification preferences
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount} new
              </Badge>
            )}
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Check className="h-4 w-4 mr-2" />
          Mark All Read
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Notifications List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Recent Notifications
            </CardTitle>
            <CardDescription>Your latest alerts and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border transition-colors ${
                      notification.read 
                        ? 'border-border bg-background' 
                        : 'border-primary/20 bg-primary/5'
                    }`}
                  >
                    <div className={`p-2 rounded-full bg-background border ${notification.color}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className={`font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h4>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                    </div>
                    {!notification.read && (
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </CardTitle>
            <CardDescription>Configure your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {notificationSettings.map((setting) => (
              <div key={setting.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor={setting.id} className="font-medium">
                    {setting.label}
                  </Label>
                  <Switch id={setting.id} defaultChecked={setting.enabled} />
                </div>
                <p className="text-xs text-muted-foreground">
                  {setting.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">3</p>
                <p className="text-sm text-muted-foreground">Upcoming Payments</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-amber-500/10">
                <TrendingUp className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <p className="font-semibold">1</p>
                <p className="text-sm text-muted-foreground">Price Increases</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <p className="font-semibold">2</p>
                <p className="text-sm text-muted-foreground">Action Required</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}