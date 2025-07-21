import { 
  BarChart3, 
  Users, 
  Inbox, 
  Trophy, 
  Store, 
  ShoppingCart, 
  FileText, 
  Mail, 
  Settings 
} from "lucide-react";
import { AdminView } from "@/pages/AdminDashboard";

interface AdminSidebarProps {
  activeView: AdminView;
  onViewChange: (view: AdminView) => void;
}

const navigationItems = [
  { id: 'dashboard' as AdminView, icon: BarChart3, label: 'Dashboard' },
  { id: 'players' as AdminView, icon: Users, label: 'Players' },
  { id: 'submissions' as AdminView, icon: Inbox, label: 'Submissions', badge: 12 },
  { id: 'scores' as AdminView, icon: Trophy, label: 'Live Scores' },
  { id: 'shop' as AdminView, icon: Store, label: 'Shop' },
  { id: 'orders' as AdminView, icon: ShoppingCart, label: 'Orders' },
  { id: 'blog' as AdminView, icon: FileText, label: 'Blog' },
  { id: 'messages' as AdminView, icon: Mail, label: 'Messages', badge: 5 },
  { id: 'settings' as AdminView, icon: Settings, label: 'Settings' },
];

export function AdminSidebar({ activeView, onViewChange }: AdminSidebarProps) {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <span className="font-bold text-xl text-primary">
          FootballBank<span className="text-green-500">.soccer</span>
        </span>
        <p className="text-muted-foreground text-sm mt-1">Admin Console</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = activeView === item.id;
            const Icon = item.icon;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}