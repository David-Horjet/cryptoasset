"use client";

import InviteCard from "@/components/dashboard/invite-card";
import { Badge } from "@/components/ul/badge";

interface DashboardSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: DashboardSidebarProps) {
  const menuItems = [
    { name: "Dashboard", badge: "2", active: true },
    { name: "My Documents", badge: null, active: false },
    { name: "New Deals", badge: null, active: false },
    { name: "Community", badge: "5", active: false },
    { name: "Insights", badge: null, active: false },
    { name: "Knowledge base", badge: null, active: false },
  ];

  return (
    <>
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="flex flex-col justify-between h-full p-4 md:p-6">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <span className="font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium cursor-pointer ${
                  item.active
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <Badge className="bg-gray-800 text-white text-xs">
                    {item.badge}
                  </Badge>
                )}
              </div>
            ))}
          </nav>

          <InviteCard />
        </div>
      </aside>
    </>
  );
}
