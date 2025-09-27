import { Badge } from "@/components/ui/badge"

export default function DashboardSidebar() {
  const menuItems = [
    { name: "Dashboard", badge: "2", active: true },
    { name: "My Documents", badge: null, active: false },
    { name: "New Deals", badge: null, active: false },
    { name: "Community", badge: "5", active: false },
    { name: "Insights", badge: null, active: false },
    { name: "Knowledge base", badge: null, active: false },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                item.active ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <span>{item.name}</span>
              {item.badge && (
                <Badge variant="secondary" className="bg-gray-800 text-white text-xs">
                  {item.badge}
                </Badge>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
