import { Users, Inbox, DollarSign, Trophy, UserPlus, ShoppingCart, FileText, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DashboardView() {
  const metrics = [
    {
      title: "Total Players",
      value: "2,847",
      icon: Users,
      change: "+12% from last month",
      positive: true,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20"
    },
    {
      title: "Pending Submissions",
      value: "127",
      icon: Inbox,
      change: "+24% this week",
      positive: false,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/20"
    },
    {
      title: "Monthly Revenue",
      value: "$24,890",
      icon: DollarSign,
      change: "+8% from last month",
      positive: true,
      color: "text-green-500",
      bgColor: "bg-green-500/20"
    },
    {
      title: "Live Matches Today",
      value: "8",
      icon: Trophy,
      change: "3 LIVE, 5 upcoming",
      positive: true,
      color: "text-red-500",
      bgColor: "bg-red-500/20"
    }
  ];

  const recentActivity = [
    {
      icon: UserPlus,
      iconColor: "text-green-500",
      iconBg: "bg-green-500/20",
      title: "New player submission",
      description: "Marcus Silva from Brazil - Midfielder",
      time: "2 min ago"
    },
    {
      icon: ShoppingCart,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/20",
      title: "New order placed",
      description: "Order #FB-2024-0891 - $89.99",
      time: "5 min ago"
    },
    {
      icon: FileText,
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-500/20",
      title: "Blog post published",
      description: '"Top 10 Strikers to Watch in 2024"',
      time: "1 hour ago"
    }
  ];

  const systemHealth = [
    { service: "API Status", status: "ONLINE", color: "bg-green-500" },
    { service: "Payment Gateway", status: "ONLINE", color: "bg-green-500" },
    { service: "Score Feed", status: "ERROR", color: "bg-red-500" },
    { service: "Email Service", status: "ONLINE", color: "bg-green-500" }
  ];

  return (
    <div className="space-y-8">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-3xl font-bold">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className={`h-4 w-4 ${metric.positive ? 'text-green-500' : 'text-red-500'}`} />
                  <p className={`text-sm ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-accent rounded-lg">
                    <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                      <Icon className={`h-4 w-4 ${activity.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((system, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{system.service}</span>
                  <Badge className={`${system.color} text-white`}>
                    {system.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}