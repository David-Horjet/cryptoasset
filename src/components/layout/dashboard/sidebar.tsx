"use client";

import InviteCard from "@/components/dashboard/invite-card";
import { Badge } from "@/components/ul/badge";
import { Button } from "@/components/ul/button";
import { logout } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface DashboardSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const menuItems = [
    { name: "Dashboard", link: "/dashboard", badge: "2", active: true },
    { name: "Invest", link: "/dashboard/invest", badge: null, active: false },
    { name: "New Deals", link: "/dashboard", badge: null, active: false },
    { name: "Community", link: "/dashboard", badge: "5", active: false },
    { name: "Insights", link: "/dashboard", badge: null, active: false },
    { name: "Knowledge base", link: "/dashboard", badge: null, active: false },
  ];

  const handleLogout = () => {
    dispatch(logout())
    setSidebarOpen(false)
    router.push("/login")
  }

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
              <Link
                href={item.link}
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
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-200 mb-5 mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </Button>
          </div>

          <InviteCard />
        </div>
      </aside>
    </>
  );
}
