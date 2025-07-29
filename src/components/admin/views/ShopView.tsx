"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Product } from "@/lib/types";
import { useAdminDataStore } from "@/store/adminDataStore";
import { ProductDialog } from "@/components/admin/dialogs/ProductDialog";
import { SearchBar } from "../SearchBar";

const ITEMS_PER_PAGE = 5;

export default function ProductsView() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { toast } = useToast();
  const { products, fetchProducts, updateProduct, deleteProduct } =
    useAdminDataStore();

  const [productDialogOpen, setProductDialogOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProduct = useMemo(() => {
    return products.filter((product) => {
      const search = searchQuery.toLowerCase();
      return (
        (product.name.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)) 
      );
    });
  }, [products, searchQuery]);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProduct.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProduct, currentPage]);

  const totalPages = Math.ceil(filteredProduct.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id);
      toast({
        title: "Product Deleted",
        description: "The product has been removed successfully.",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete product.",
        variant: "destructive",
      });
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductDialogOpen(true);
  };

  const handleAddOrUpdateProduct = async (data: Partial<Product>) => {
    if (!data.id) {
      toast({
        title: "Error",
        description: "New product creation is not implemented yet.",
        variant: "destructive",
      });
      return;
    }

    await updateProduct(data.id, data);
    toast({
      title: "Success",
      description: "Product updated successfully.",
    });
  };

  const countStock = (threshold = 10) => {
    const inStock = products.filter((p) => p.stock > 0).length;
    const lowStock = products.filter(
      (p) => p.stock > 0 && p.stock < threshold
    ).length;
    const outOfStock = products.filter((p) => p.stock === 0).length;
    return { total: products.length, inStock, lowStock, outOfStock };
  };

  const { total, inStock, lowStock, outOfStock } = countStock();

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <p className="text-blue-500 text-2xl">📦</p>
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <p className="text-2xl font-bold">{total}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <p className="text-green-500 text-2xl">✅</p>
              <div>
                <p className="text-sm text-muted-foreground">In Stock</p>
                <p className="text-2xl font-bold">{inStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <p className="text-red-500 text-2xl">❌</p>
              <div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
                <p className="text-2xl font-bold">{outOfStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <p className="text-yellow-500 text-2xl">⚠️</p>
              <div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">{lowStock}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">Products</h2>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search products..."
          className="w-80"
        />
        </div>
        
        <Button onClick={() => setProductDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Products Table */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
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
                {paginatedProducts.map((product: Product) => (
                  <tr key={product.id} className="border-t hover:bg-muted/40">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={product.image[0]}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <p className="font-medium">{product.name}</p>
                      </div>
                    </td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4 font-medium">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span
                        className={
                          product.stock === 0
                            ? "text-red-500"
                            : product.stock < 10
                              ? "text-yellow-500"
                              : ""
                        }
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="default"
                        className={
                          product.stock > 0
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }
                      >
                        {product.stock > 0 ? "Active" : "Out of Stock"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEditProduct(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
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

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Product Dialog */}
      <ProductDialog
        open={productDialogOpen}
        onOpenChange={(open) => {
          setProductDialogOpen(open);
          if (!open) setEditingProduct(null);
        }}
        product={editingProduct || undefined}
        onSave={handleAddOrUpdateProduct}
      />
    </div>
  );
}
