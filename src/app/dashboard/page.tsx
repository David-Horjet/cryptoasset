"use client"

import ActivitiesPanel from "@/components/dashboard/activities-panel";
import InvestmentsTable from "@/components/dashboard/investments-table";
import PortfolioOverview from "@/components/dashboard/portfolio-overview";
import DashboardHeader from "@/components/layout/dashboard/header";
import DashboardSidebar from "@/components/layout/dashboard/sidebar";
import { useState } from "react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex h-full">
        <DashboardSidebar  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main className="flex-1 p-4 md:p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="flex-1">
                <PortfolioOverview />
                <div className="mt-8">
                  <InvestmentsTable />
                </div>
              </div>
              <div className="xl:w-80 space-y-4">
                <div className="bg-black text-white p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold">Tax Information</h3>
                  </div>
                  <div className="text-sm opacity-75">Submitted</div>
                </div>
                <ActivitiesPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}
