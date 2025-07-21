import { Plus, Edit, Trash2, Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BlogView() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Strikers to Watch in 2024",
      author: "Admin",
      status: "Published",
      publishedAt: "2024-01-20",
      views: 1234,
      excerpt: "Discover the most promising strikers making waves in football this year...",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      title: "Transfer Window Analysis",
      author: "Editor",
      status: "Draft",
      publishedAt: null,
      views: 0,
      excerpt: "A comprehensive look at the latest transfer moves and their impact...",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      title: "Youth Academy Success Stories",
      author: "Admin",
      status: "Published",
      publishedAt: "2024-01-18",
      views: 856,
      excerpt: "Highlighting young talents who made it from academy to first team...",
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Blog Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Edit className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
                <p className="text-2xl font-bold">47</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Eye className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Published</p>
                <p className="text-2xl font-bold">42</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Edit className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Drafts</p>
                <p className="text-2xl font-bold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Eye className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">45.2K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Blog Posts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Blog Posts</CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={post.status === 'Published' ? 'default' : 'secondary'}
                        className={post.status === 'Published' ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600'}
                      >
                        {post.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      {post.publishedAt && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.publishedAt}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views} views
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}