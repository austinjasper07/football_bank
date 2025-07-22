import { Search, Bell, ChevronDown } from "lucide-react";

interface AdminHeaderProps {
  title: string;
  subtitle: string;
}

export function AdminHeader({ title, subtitle }: AdminHeaderProps) {
  return (
    <header className="bg-[hsl(var(--card))] border-b border-[hsl(var(--border))] px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-[hsl(var(--muted-foreground))] text-sm">{subtitle}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Quick search..." 
              className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-lg px-4 py-2 w-64 focus:border-[hsl(var(--primary))] focus:outline-none"
            />
            <Search className="absolute right-3 top-3 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
          </div>
          
          <button className="relative p-2 hover:bg-[var(--accent)] rounded-lg">
            <Bell className="h-5 w-5 text-[hsl(var(--muted-foreground))]" />
            <span className="absolute -top-1 -right-1 bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[var(--accent)] rounded-lg p-2">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
              alt="Admin" 
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Admin</span>
            <ChevronDown className="h-4 w-4 text-[hsl(var(--muted-foreground))] " />
          </div>
        </div>
      </div>
    </header>
  );
}