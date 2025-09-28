import { ChartBar, ChartBarBig, Newspaper, WineIcon } from "lucide-react"
import { Button } from "../ul/button"

export default function ActivitiesPanel() {
  const activities = [
    {
      id: 1,
      type: "NEW",
      title: "New Report from A-book",
      subtitle: "A-book • Q3'21 • Report",
      icon: <ChartBarBig/>,
      time: "NEW",
    },
    {
      id: 2,
      type: "NEW",
      title: "Mention in press: Finglory",
      subtitle: "By TechCrunch",
      icon: <Newspaper/>,
      time: "NEW",
    },
    {
      id: 3,
      type: "LAST 7 DAYS",
      title: "New Achievement",
      subtitle: "'Strong bond' — 1 year together",
      icon: <WineIcon/>,
      time: "LAST 7 DAYS",
    },
    {
      id: 4,
      type: "LAST 7 DAYS",
      title: "New Report from Finglory",
      subtitle: "Finglory • Q3'21 • Report",
      icon: <ChartBar/>,
      time: "LAST 7 DAYS",
    },
  ]

  return (
    <div className="bg-muted rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
      <h3 className="text-base md:text-lg font-semibold text-gray-900">Activities</h3>
        <Button variant="ghost" size="sm" className="text-xs md:text-sm text-gray-500">
          <span className="hidden sm:inline">View All</span>
          <span className="sm:hidden">All</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id}>
            {(index === 0 || activities[index - 1].type !== activity.type) && (
              <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">{activity.type}</div>
            )}
            <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{activity.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 mb-1 leading-tight">{activity.title}</p>
                <p className="text-xs text-gray-500">{activity.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
