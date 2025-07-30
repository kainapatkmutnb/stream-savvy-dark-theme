import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, DollarSign, Bell } from "lucide-react";
import { useState } from "react";

const upcomingPayments = [
  {
    id: "1",
    service: "Adobe Creative Cloud",
    amount: 52.99,
    date: "2025-08-01",
    logo: "🎨",
    priority: "high" as const
  },
  {
    id: "2",
    service: "Netflix",
    amount: 15.99,
    date: "2025-08-05",
    logo: "🎬",
    priority: "medium" as const
  },
  {
    id: "3",
    service: "YouTube Premium",
    amount: 11.99,
    date: "2025-08-08",
    logo: "📺",
    priority: "low" as const
  },
  {
    id: "4",
    service: "Spotify Premium",
    amount: 9.99,
    date: "2025-08-12",
    logo: "🎵",
    priority: "medium" as const
  },
  {
    id: "5",
    service: "Disney+",
    amount: 7.99,
    date: "2025-08-15",
    logo: "🏰",
    priority: "low" as const
  },
  {
    id: "6",
    service: "GitHub Pro",
    amount: 4.00,
    date: "2025-08-20",
    logo: "💻",
    priority: "medium" as const
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "destructive";
    case "medium": return "secondary";
    case "low": return "outline";
    default: return "outline";
  }
};

export function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDaysUntil = (dateString: string) => {
    const today = new Date();
    const paymentDate = new Date(dateString);
    const diffTime = paymentDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
        <p className="text-muted-foreground">Track upcoming payments and billing dates</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Payment Calendar
            </CardTitle>
            <CardDescription>Click on dates to see scheduled payments</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Quick Overview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Payments</span>
                <span className="font-semibold">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Amount</span>
                <span className="font-semibold">$102.95</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Next Payment</span>
                <span className="font-semibold text-destructive">2 days</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Set Reminders
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="h-4 w-4 mr-2" />
                View All Costs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Upcoming Payments
          </CardTitle>
          <CardDescription>Your scheduled subscription payments for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingPayments.map((payment) => {
              const daysUntil = getDaysUntil(payment.date);
              return (
                <div key={payment.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{payment.logo}</div>
                    <div>
                      <p className="font-medium">{payment.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(payment.date)} • {daysUntil > 0 ? `${daysUntil} days` : 'Today'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={getPriorityColor(payment.priority)}>
                      {payment.priority}
                    </Badge>
                    <span className="font-semibold">${payment.amount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}