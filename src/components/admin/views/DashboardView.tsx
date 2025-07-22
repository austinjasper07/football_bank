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
      variant: "blue"
    },
    {
      title: "Pending Submissions",
      value: "127",
      icon: Inbox,
      change: "+24% this week",
      positive: false,
      variant: "amber"
    },
    {
      title: "Monthly Revenue",
      value: "$24,890",
      icon: DollarSign,
      change: "+8% from last month",
      positive: true,
      variant: "green"
    },
    {
      title: "Live Matches Today",
      value: "8",
      icon: Trophy,
      change: "3 LIVE, 5 upcoming",
      positive: true,
      variant: "red"
    }
  ];

  const recentActivity = [
    {
      icon: UserPlus,
      variant: "green",
      title: "New player submission",
      description: "Marcus Silva from Brazil - Midfielder",
      time: "2 min ago"
    },
    {
      icon: ShoppingCart,
      variant: "blue",
      title: "New order placed",
      description: "Order #FB-2024-0891 - $89.99",
      time: "5 min ago"
    },
    {
      icon: FileText,
      variant: "amber",
      title: "Blog post published",
      description: '"Top 10 Strikers to Watch in 2024"',
      time: "1 hour ago"
    }
  ];

  const systemHealth = [
    { service: "API Status", status: "ONLINE", variant: "green" },
    { service: "Payment Gateway", status: "ONLINE", variant: "green" },
    { service: "Score Feed", status: "ERROR", variant: "red" },
    { service: "Email Service", status: "ONLINE", variant: "green" }
  ];

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case 'blue':
        return { 
          iconColor: 'text-white', 
          iconBg: 'bg-accent-blue',
          textColor: 'text-accent-blue'
        };
      case 'green':
        return { 
          iconColor: 'text-white', 
          iconBg: 'bg-accent-green',
          textColor: 'text-accent-green'
        };
      case 'amber':
        return { 
          iconColor: 'text-white', 
          iconBg: 'bg-accent-amber',
          textColor: 'text-accent-amber'
        };
      case 'red':
        return { 
          iconColor: 'text-white', 
          iconBg: 'bg-accent-red',
          textColor: 'text-accent-red'
        };
      default:
        return { 
          iconColor: 'text-white', 
          iconBg: 'bg-primary',
          textColor: 'text-primary'
        };
    }
  };

  return (
    <div className="space-y-8 font-body">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const variantClasses = getVariantClasses(metric.variant);
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] font-medium">{metric.title}</p>
                    <p className="text-3xl  font-[var(--heading)]">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${variantClasses.iconBg}`}>
                    <Icon className={`h-6 w-6 ${variantClasses.iconColor}`} />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className={`h-4 w-4 ${metric.positive ? 'text-accent-green' : 'text-accent-red'}`} />
                  <p className={`text-sm font-medium ${metric.positive ? 'text-accent-green' : 'text-accent-red'}`}>
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
        <Card className="lg:col-span-2 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-[var(--heading)]">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                const variantClasses = getVariantClasses(activity.variant);
                return (
                  <div key={index} className="flex items-center gap-4 p-3 hover:bg-[hsl(var(--muted))]/50 rounded-lg transition-colors">
                    <div className={`p-2 rounded-lg ${variantClasses.iconBg}`}>
                      <Icon className={`h-4 w-4 ${variantClasses.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">{activity.description}</p>
                    </div>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-[var(--heading)]">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((system, index) => {
                const statusClasses = system.variant === 'green' ? 'bg-accent-green' : 'bg-accent-red';
                return (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{system.service}</span>
                    <Badge className={`${statusClasses} text-white border-0`}>
                      {system.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}