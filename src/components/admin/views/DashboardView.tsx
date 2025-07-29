"use client";

import {
  Users,
  Inbox,
  DollarSign,
  Trophy,
  UserPlus,
  ShoppingCart,
  FileText,
  TrendingUp,
  LucideIcon
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useMemo } from "react";
import { useAdminDataStore } from "@/store/adminDataStore";
import { formatDistanceToNow, isSameMonth, parseISO} from "date-fns";


export function DashboardView(){
  const {
    fetchPlayers,
    fetchUsers,
    fetchPosts,
    fetchOrders,
    players,
    users,
    posts,
    orders,
    loading
  } = useAdminDataStore();

  useEffect(() => {
    fetchPlayers();
    fetchUsers();
    fetchPosts();
    fetchOrders();
  }, [fetchPlayers, fetchUsers, fetchPosts, fetchOrders]);

  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "blue":
        return {
          iconColor: "text-white",
          iconBg: "bg-accent-blue"
        };
      case "green":
        return {
          iconColor: "text-white",
          iconBg: "bg-accent-green"
        };
      case "amber":
        return {
          iconColor: "text-white",
          iconBg: "bg-accent-amber"
        };
      case "red":
        return {
          iconColor: "text-white",
          iconBg: "bg-accent-red"
        };
      default:
        return {
          iconColor: "text-white",
          iconBg: "bg-primary"
        };
    }
  };

  const totalRevenue = useMemo(() => {
    if (!Array.isArray(orders)) return 0;
    return orders.reduce((total, order) => {
      return total + order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, 0);
  }, [orders]);

  // Helper: Get item count created in a specific month
const getMonthlyCount = (items: { createdAt: string }[], monthOffset = 0) => {
  const now = new Date();
  const targetMonth = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1);
  return items.filter(item => isSameMonth(parseISO(item.createdAt), targetMonth)).length;
};

// Helper: Get revenue for a given month
const getMonthlyRevenue = (ordersList: typeof orders, monthOffset = 0) => {
  if (!Array.isArray(ordersList)) return 0;
  const now = new Date();
  const targetMonth = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1);
  return ordersList.reduce((total, order) => {
    if (!isSameMonth(parseISO(order.createdAt), targetMonth)) return total;
    const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return total + orderTotal;
  }, 0);
};

// Revenue growth % this month vs last
const currentRevenue = getMonthlyRevenue(orders, 0);
const lastMonthRevenue = getMonthlyRevenue(orders, 1);
const revenueGrowth = lastMonthRevenue === 0 ? 0 : ((currentRevenue - lastMonthRevenue) / lastMonthRevenue) * 100;

// Posts growth
const currentPostCount = getMonthlyCount(posts, 0);
const lastPostCount = getMonthlyCount(posts, 1);
const postGrowth = lastPostCount === 0 ? 0 : ((currentPostCount - lastPostCount) / lastPostCount) * 100;

// Players growth
const currentPlayerCount = getMonthlyCount(players, 0);
const lastPlayerCount = getMonthlyCount(players, 1);
const playerGrowth = lastPlayerCount === 0 ? 0 : ((currentPlayerCount - lastPlayerCount) / lastPlayerCount) * 100;

const dynamicMetrics = [
  {
    title: "Total Players",
    value: players.length.toLocaleString(),
    icon: Users,
    change: `${playerGrowth >= 0 ? "+" : ""}${playerGrowth.toFixed(1)}% from last month`,
    positive: playerGrowth >= 0,
    variant: "blue"
  },
  {
    title: "Pending Submissions",
    value: users.filter(u => !u.subscribed).length.toString(),
    icon: Inbox,
    change: "Live count only",
    positive: true,
    variant: "amber"
  },
  {
    title: "Monthly Revenue",
    value: `$${currentRevenue.toLocaleString()}`,
    icon: DollarSign,
    change: `${revenueGrowth >= 0 ? "+" : ""}${revenueGrowth.toFixed(1)}% from last month`,
    positive: revenueGrowth >= 0,
    variant: "green"
  },
  {
    title: "Total Posts",
    value: posts.length.toString(),
    icon: Trophy,
    change: `${postGrowth >= 0 ? "+" : ""}${postGrowth.toFixed(1)}% from last month`,
    positive: postGrowth >= 0,
    variant: "red"
  }
];

  type Activity = {
    icon: LucideIcon;
    variant: "blue" | "green" | "amber";
    title: string;
    description: string;
    time: string;
  };

  const recentActivity: Activity[] = useMemo(() => {
  const playerActivity: Activity[] = Array.isArray(players)
    ? players.map((player) => ({
        icon: UserPlus,
        variant: "green",
        title: "New player submission",
        description: `${player.firstName} ${player.lastName} – ${player.position}`,
        time: formatDistanceToNow(new Date(player.createdAt), { addSuffix: true })
      }))
    : [];

  const orderActivity: Activity[] = Array.isArray(orders)
    ? orders.map((order) => ({
        icon: ShoppingCart,
        variant: "blue",
        title: "New order placed",
        description: `Order #${order.id} – $${order.items.reduce((sum, i) => sum + i.price * i.quantity, 0)}`,
        time: formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })
      }))
    : [];

  const postActivity: Activity[] = Array.isArray(posts)
    ? posts.map((post) => ({
        icon: FileText,
        variant: "amber",
        title: "New blog post",
        description: post.title,
        time: formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
      }))
    : [];

  return [...playerActivity, ...orderActivity, ...postActivity]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .slice(0, 5);
}, [orders, players, posts]);


  return (
    <div className="space-y-8 font-body">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dynamicMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const variantClasses = getVariantClasses(metric.variant);
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] font-medium">{metric.title}</p>
                    <p className="text-3xl font-[var(--heading)]">
                      {loading ? "..." : metric.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${variantClasses.iconBg}`}>
                    <Icon className={`h-6 w-6 ${variantClasses.iconColor}`} />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className={`h-4 w-4 ${metric.positive ? "text-accent-green" : "text-accent-red"}`} />
                  <p className={`text-sm font-medium ${metric.positive ? "text-accent-green" : "text-accent-red"}`}>
                    {metric.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity + System Health */}
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
                    <span className="text-sm text-[hsl(var(--muted-foreground))] whitespace-nowrap">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Optional Static System Health */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="font-[var(--heading)]">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">API Status</span>
                <Badge className="bg-accent-green text-white border-0">ONLINE</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Payment Gateway</span>
                <Badge className="bg-accent-green text-white border-0">ONLINE</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Score Feed</span>
                <Badge className="bg-accent-red text-white border-0">ERROR</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
