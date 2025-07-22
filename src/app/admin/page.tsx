'use client';
import { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DashboardView } from "@/components/admin/views/DashboardView";
import { PlayersView } from "@/components/admin/views/PlayersView";
import { SubmissionsView } from "@/components/admin/views/SubmissionsView";
import { ScoresView } from "@/components/admin/views/ScoresView";
import { ShopView } from "@/components/admin/views/ShopView";
import { OrdersView } from "@/components/admin/views/OrdersView";
import { BlogView } from "@/components/admin/views/BlogView";
import { MessagesView } from "@/components/admin/views/MessagesView";
import { SettingsView } from "@/components/admin/views/SettingsView";
import { AffiliateView } from "@/components/admin/views/AffiliateView";

export type AdminView = 
  | 'dashboard' 
  | 'players' 
  | 'submissions' 
  | 'scores' 
  | 'shop' 
  | 'orders' 
  | 'blog' 
  | 'messages' 
  | 'affiliate'
  | 'settings';

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState<AdminView>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'players':
        return <PlayersView />;
      case 'submissions':
        return <SubmissionsView />;
      case 'scores':
        return <ScoresView />;
      case 'shop':
        return <ShopView />;
      case 'orders':
        return <OrdersView />;
      case 'blog':
        return <BlogView />;
      case 'messages':
        return <MessagesView />;
      case 'affiliate':
        return <AffiliateView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  const getViewTitle = () => {
    const titles: Record<AdminView, { title: string; subtitle: string }> = {
      dashboard: { title: 'Dashboard', subtitle: 'Overview of your platform metrics' },
      players: { title: 'Players', subtitle: 'Manage football players and profiles' },
      submissions: { title: 'Submissions', subtitle: 'Review and moderate player submissions' },
      scores: { title: 'Live Scores', subtitle: 'Manage live football scores and matches' },
      shop: { title: 'Shop', subtitle: 'Manage products and inventory' },
      orders: { title: 'Orders', subtitle: 'View and process customer orders' },
      blog: { title: 'Blog', subtitle: 'Create and manage blog content' },
      messages: { title: 'Messages', subtitle: 'Handle customer communications' },
      affiliate: { title: 'Affiliate Marketing', subtitle: 'Manage affiliates and track commissions' },
      settings: { title: 'Settings', subtitle: 'Configure system preferences' },
    };
    return titles[activeView];
  };

  return (
    <div className="flex h-screen bg-[hsl(var(--background))]">
      <AdminSidebar activeView={activeView} onViewChange={setActiveView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader 
          title={getViewTitle().title}
          subtitle={getViewTitle().subtitle}
        />
        
        <main className="flex-1 overflow-auto p-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;