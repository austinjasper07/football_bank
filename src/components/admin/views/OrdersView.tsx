import { Eye, Package, Truck, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function OrdersView() {
  const orders = [
    {
      id: "FB-2024-0891",
      customer: "John Smith",
      email: "john@example.com",
      total: "$89.99",
      status: "Pending",
      items: 2,
      date: "2024-01-20",
      shippingAddress: "123 Main St, New York, NY"
    },
    {
      id: "FB-2024-0890",
      customer: "Maria Garcia",
      email: "maria@example.com",
      total: "$199.99",
      status: "Shipped",
      items: 1,
      date: "2024-01-19",
      shippingAddress: "456 Oak Ave, Los Angeles, CA"
    },
    {
      id: "FB-2024-0889",
      customer: "David Brown",
      email: "david@example.com",
      total: "$329.98",
      status: "Delivered",
      items: 3,
      date: "2024-01-18",
      shippingAddress: "789 Pine St, Chicago, IL"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Package className="h-4 w-4" />;
      case 'Shipped':
        return <Truck className="h-4 w-4" />;
      case 'Delivered':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Shipped':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'Delivered':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Pending Orders</p>
                <p className="text-2xl font-bold">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Truck className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Shipped</p>
                <p className="text-2xl font-bold">56</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Delivered</p>
                <p className="text-2xl font-bold">142</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-[hsl(var(--primary))]" />
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Total Orders</p>
                <p className="text-2xl font-bold">221</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[hsl(var(--muted))]/50">
                <tr>
                  <th className="text-left p-4 font-medium">Order ID</th>
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Items</th>
                  <th className="text-left p-4 font-medium">Total</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-border hover:bg-[hsl(var(--muted))]/50">
                    <td className="p-4">
                      <span className="font-mono text-sm">{order.id}</span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-[hsl(var(--muted-foreground))]">{order.email}</p>
                      </div>
                    </td>
                    <td className="p-4">{order.items} items</td>
                    <td className="p-4 font-medium">{order.total}</td>
                    <td className="p-4">
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-[hsl(var(--muted-foreground))]">{order.date}</td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}