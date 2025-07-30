import { TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const spendingByCategory = [
  { category: "Video Streaming", amount: 35.97, percentage: 35, color: "bg-primary" },
  { category: "Software", amount: 56.99, percentage: 55, color: "bg-secondary" },
  { category: "Music", amount: 9.99, percentage: 10, color: "bg-accent" }
];

const monthlyTrends = [
  { month: "Jan", amount: 89.50 },
  { month: "Feb", amount: 102.95 },
  { month: "Mar", amount: 98.75 },
  { month: "Apr", amount: 102.95 },
  { month: "May", amount: 115.50 },
  { month: "Jun", amount: 102.95 }
];

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Track your subscription spending patterns and trends</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$102.95</div>
            <p className="text-xs text-success flex items-center">
              <TrendingDown className="h-3 w-3 mr-1" />
              -12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Projection</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,235.40</div>
            <p className="text-xs text-muted-foreground">
              Based on current subscriptions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Expensive</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$52.99</div>
            <p className="text-xs text-muted-foreground">
              Adobe Creative Cloud
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Per Service</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17.16</div>
            <p className="text-xs text-muted-foreground">
              Across 6 subscriptions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Spending by Category */}
      <Card>
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>Breakdown of your subscription costs by service type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {spendingByCategory.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{item.category}</span>
                <span className="text-sm text-muted-foreground">${item.amount}</span>
              </div>
              <Progress value={item.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
          <CardDescription>Your subscription spending over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyTrends.map((month, index) => (
              <div key={month.month} className="flex items-center justify-between">
                <span className="text-sm font-medium">{month.month}</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${(month.amount / 120) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-16 text-right">
                    ${month.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Insights</CardTitle>
          <CardDescription>AI-powered recommendations for your subscriptions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
            <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium">YouTube Premium hasn't been used in 3 months</p>
              <p className="text-xs text-muted-foreground">Consider canceling to save $11.99/month</p>
            </div>
            <Badge variant="destructive" className="ml-auto">Save $143.88/year</Badge>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium">Adobe Creative Cloud price increased</p>
              <p className="text-xs text-muted-foreground">Your plan went up by $5/month in April</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Price Alert</Badge>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
            <div className="w-2 h-2 bg-success rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium">Great job managing subscriptions!</p>
              <p className="text-xs text-muted-foreground">You're spending 15% less than the average user</p>
            </div>
            <Badge variant="secondary" className="ml-auto">Well Done</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}