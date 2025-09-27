import ActivitiesPanel from "@/components/dashboard/activities-panel";
import InvestmentsTable from "@/components/dashboard/investments-table";
import InviteCard from "@/components/dashboard/invite-card";
import PortfolioOverview from "@/components/dashboard/portfolio-overview";
import DashboardHeader from "@/components/layout/dashboard/header";
import DashboardSidebar from "@/components/layout/dashboard/sidebar";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-1">
                <PortfolioOverview />
                <div className="mt-8">
                  <InvestmentsTable />
                </div>
              </div>
              <div className="w-80 space-y-6">
                <ActivitiesPanel />
                <InviteCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
