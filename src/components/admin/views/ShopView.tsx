import { Plus, Edit, Trash2, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ShopView() {
  const products = [
    {
      id: 1,
      name: "Official Team Jersey",
      price: "$89.99",
      stock: 45,
      category: "Clothing",
      status: "Active",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Football Boots Pro",
      price: "$199.99",
      stock: 23,
      category: "Equipment",
      status: "Active",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Training Kit",
      price: "$129.99",
      stock: 0,
      category: "Clothing",
      status: "Out of Stock",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">In Stock</p>
                <p className="text-2xl font-bold">134</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
                <p className="text-2xl font-bold">22</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Package className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Products</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Product</th>
                  <th className="text-left p-4 font-medium">Category</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="text-left p-4 font-medium">Stock</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-border hover:bg-muted/50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{product.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4 font-medium">{product.price}</td>
                    <td className="p-4">
                      <span className={product.stock === 0 ? 'text-red-500' : product.stock < 10 ? 'text-yellow-500' : ''}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge 
                        variant={product.status === 'Active' ? 'default' : 'secondary'}
                        className={product.status === 'Active' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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