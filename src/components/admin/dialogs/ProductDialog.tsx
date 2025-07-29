"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/lib/types";
import { useAdminDataStore } from "@/store/adminDataStore";
import { storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Partial<Product>;
  onSave: (product: Partial<Product>) => void;
}

export function ProductDialog({
  open,
  onOpenChange,
  product,
  onSave,
}: ProductDialogProps) {
  const { toast } = useToast();
  const { addProduct, updateProduct, fetchProducts } = useAdminDataStore();

  const [formData, setFormData] = useState<Partial<Product>>({
    ...product,
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    image: product?.image || [],
    featured: product?.featured || false,
    discount: product?.discount || 0,
    sizes: product?.sizes || [],
    colors: product?.colors || [],
    stock: product?.stock || 0,
    category: product?.category || "accessory",
  });

  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSave = async () => {
    if (!formData.name || !formData.price || formData.stock === undefined) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      let uploadedImageUrls: string[] = formData.image || [];

      if (imageFiles.length > 0) {
        const uploadPromises = imageFiles.map((file) => {
          const fileRef = ref(
            storage,
            `product_images/${formData.name}-${Date.now()}-${file.name}`
          );
          return uploadBytes(fileRef, file).then(() => getDownloadURL(fileRef));
        });

        uploadedImageUrls = await Promise.all(uploadPromises);
      }

      const finalData: Partial<Product> = {
        ...formData,
        image: uploadedImageUrls,
      };

      const message = product?.id
        ? await updateProduct(product.id, finalData)
        : await addProduct(finalData);

      onSave({ ...finalData, id: product?.id });
      onOpenChange(false);

      toast({
        title: "Success",
        description: "Product saved successfully.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong while saving the product.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {product ? "Edit Product" : "Add New Product"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <Label htmlFor="price">Price ($)*</Label>
            <Input
              id="price"
              type="number"
              min={0}
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: parseFloat(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="stock">Stock *</Label>
            <Input
              id="stock"
              type="number"
              min={0}
              value={formData.stock}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stock: parseInt(e.target.value, 10),
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="discount">Discount (%)</Label>
            <Input
              id="discount"
              type="number"
              min={0}
              value={formData.discount || 0}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  discount: parseFloat(e.target.value),
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  category: value as Product["category"],
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="boots">Boots</SelectItem>
                <SelectItem value="gloves">Gloves</SelectItem>
                <SelectItem value="kits">Kits</SelectItem>
                <SelectItem value="ball">Ball</SelectItem>
                <SelectItem value="accessory">Accessory</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="imageUpload">Upload Product Images</Label>
            <Input
              id="imageUpload"
              type="file"
              accept="image/*"
              multiple
              onChange={(e) =>
                setImageFiles(e.target.files ? Array.from(e.target.files) : [])
              }
            />
            {Array.isArray(formData.image) && formData.image.length > 0 && (
              <div className="text-sm text-muted-foreground mt-2 space-y-1">
                {formData.image.map((url, idx) => (
                  <p key={idx}>
                    Image {idx + 1}:{" "}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      {url}
                    </a>
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="sizes">Sizes (comma separated)</Label>
            <Input
              id="sizes"
              placeholder="e.g. S, M, L"
              value={formData.sizes?.join(", ") || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sizes: e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean),
                })
              }
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="colors">Colors (comma separated)</Label>
            <Input
              id="colors"
              placeholder="e.g. Red, Blue"
              value={formData.colors?.join(", ") || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  colors: e.target.value
                    .split(",")
                    .map((c) => c.trim())
                    .filter(Boolean),
                })
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {product ? "Update Product" : "Add Product"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
