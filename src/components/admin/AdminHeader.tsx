import { Search, Bell, ChevronDown } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle: string;
}

export function AdminHeader({ title, subtitle }: AdminHeaderProps) {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Title & Subtitle */}
        <div>
          <h1 className="text-2xl font-bold text-primary-text font-heading">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Quick search..."
              className="w-64 rounded-lg border border-border bg-background px-4 py-2 text-primary-text placeholder-muted-foreground focus:border-primary focus:outline-none"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>

          {/* Notification Bell */}
          <button className="relative rounded-lg p-2 hover:bg-accent transition-colors">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
              3
            </span>
          </button>

          {/* User Profile */}
          <div className="flex cursor-pointer items-center gap-2 rounded-lg p-2 hover:bg-accent transition-colors">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="Admin"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-medium text-primary-text">Admin</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
