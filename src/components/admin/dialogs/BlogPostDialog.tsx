import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id?: number;
  title: string;
  author: string;
  status: string;
  publishedAt?: string | null;
  excerpt: string;
  content?: string;
  image?: string;
  tags?: string[];
  views?: number;
}

interface BlogPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
}

export function BlogPostDialog({ open, onOpenChange, post, onSave }: BlogPostDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BlogPost>({
    title: post?.title || "",
    author: post?.author || "Admin",
    status: post?.status || "Draft",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    image: post?.image || "",
    tags: post?.tags || [],
    views: post?.views || 0,
  });

  const [tagsInput, setTagsInput] = useState(post?.tags?.join(", ") || "");

  const handleSave = () => {
    if (!formData.title || !formData.excerpt) {
      toast({
        title: "Error",
        description: "Please fill in the title and excerpt",
        variant: "destructive",
      });
      return;
    }

    const tags = tagsInput.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);
    const postData = {
      ...formData,
      tags,
      publishedAt: formData.status === "Published" ? new Date().toISOString().split('T')[0] : null,
      id: post?.id,
    };

    onSave(postData);
    onOpenChange(false);
    toast({
      title: "Success",
      description: post ? "Blog post updated successfully" : "Blog post created successfully",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{post ? "Edit Blog Post" : "Create New Blog Post"}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Blog post title"
              />
            </div>
            
            <div>
              <Label htmlFor="author">Author</Label>
              <Select value={formData.author} onValueChange={(value) => setFormData({ ...formData, author: value })}>
                <SelectTrigger>
                  <SelectValue />
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
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                  <SelectItem value="Archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="image">Featured Image URL</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt *</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="A brief description of your blog post..."
              rows={2}
            />
          </div>
          
          <div>
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="football, transfer, analysis"
            />
          </div>
          
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your blog post content here..."
              rows={10}
              className="min-h-[200px]"
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