"use client"

import { useAppSelector } from "@/lib/hooks"
import { Button } from "../ul/button"
import { Card } from "../ul/card"
import PortfolioChart from "./portfolio-chart"

export default function PortfolioOverview() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          {user?.fullname ? `${user.fullname}'s Portfolio` : "My Portfolio"}
        </h1>
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
          <span className="hidden sm:inline">Valuation date as for 18 Oct, 2024</span>
          <span className="sm:hidden">18 Oct, 2024</span>
          <Button variant="ghost" size="sm" className="p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="bg-primary text-white p-4 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium opacity-90">Portfolio Value</h3>
            <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold mb-1">$0</div>
          <div className="text-sm opacity-75">Net Value: $0</div>
        </Card>

        <Card className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Invested</h3>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">$0</div>
          <div className="text-sm text-gray-500">0 investments • 0 startups</div>
        </Card>

        <Card className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Net Multiple</h3>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">0.0x</div>
          <div className="text-sm text-gray-500">+0%</div>
        </Card>
      </div>

      {/* <PortfolioChart /> */}
    </div>
  )
}
