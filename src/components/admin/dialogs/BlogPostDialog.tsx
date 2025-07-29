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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useAdminDataStore } from "@/store/adminDataStore";
import { Post } from "@/lib/types";

interface BlogPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post?: Partial<Post>;
  onSave: (post: Post) => void;
}

export function BlogPostDialog({
  open,
  onOpenChange,
  post,
  onSave,
}: BlogPostDialogProps) {
  const { toast } = useToast();
  const { addPost, updatePost, fetchPosts } = useAdminDataStore();

  const [formData, setFormData] = useState<Partial<Post>>({
    ...post,
    title: post?.title || "",
    author: post?.author || "Admin",
    status: post?.status || "Draft",
    summary: post?.summary || "",
    content: post?.content || "",
    imageUrl: post?.imageUrl || "",
    tags: post?.tags || [],
    featured: post?.featured || false,
    views: post?.views || 0,
  });

  const [tagsInput, setTagsInput] = useState(
    post?.tags?.join(", ") || ""
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSave = async () => {
    if (!formData.title || !formData.summary || !formData.content || !tagsInput || !formData.status || !formData.author || !formData.imageUrl) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    

    try {
      
      if (post?.id) {
       await updatePost(post.id, formData as Partial<Post>);
      } else {
         await addPost(formData as Post);
      }

      onSave({ ...formData, id: post?.id } as Post);
      toast({
        title: "Success",
        description: post?.id
          ? "Post updated successfully."
          : "New post created.",
      });

      onOpenChange(false);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to save blog post.",
        variant: "default",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {post ? "Edit Blog Post" : "Create New Blog Post"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="author">Author</Label>
              <Select
                value={formData.author}
                onValueChange={(value) =>
                  setFormData({ ...formData, author: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Author" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Guest Writer">Guest Writer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData({ ...formData, status: value as "Draft" | "Published" | "Archived" })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                  <SelectItem value="Archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="image">Featured Image</Label>
              <Input
                id="image"
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <Label htmlFor="summary">Summary *</Label>
            <Textarea
              id="summary"
              rows={3}
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
            />
          </div>

          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              rows={10}
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              placeholder="Write your blog post here..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {post ? "Update Post" : "Create Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
