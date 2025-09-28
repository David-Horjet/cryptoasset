"use client"

import { useState } from "react"

export default function PortfolioChart() {
  const [activeFilter, setActiveFilter] = useState("Last 90 days")

  const filters = ["All Time", "Invested", "Released", "Last 90 days"]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
          {filters.map((filter) => (
            <label key={filter} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="timeFilter"
                value={filter}
                checked={activeFilter === filter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="w-4 h-4 text-primary"
              />
               <span className="text-xs md:text-sm text-gray-600">{filter}</span>
            </label>
          ))}
      </div>

      <div className="relative h-48 md:h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>$62k</span>
          <span>$41k</span>
          <span>$13k</span>
          <span>$5k</span>
        </div>

        {/* Chart area */}
        <div className="ml-6 md:ml-8 h-full relative">
          {/* Chart bars - responsive bar widths */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between gap-1">
            <div className="w-6 md:w-12 bg-gray-200 h-8"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-12"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-16"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-20"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-24"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-28"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-32"></div>
            <div className="w-6 md:w-12 bg-gray-200 h-36"></div>
            <div className="w-6 md:w-12 bg-primary h-40 md:h-48"></div>
            <div className="w-6 md:w-12 bg-primary h-44 md:h-52"></div>
            <div className="w-6 md:w-12 bg-primary h-48 md:h-56"></div>
            <div className="w-6 md:w-12 bg-primary h-52 md:h-60"></div>
          </div>

          {/* X-axis labels */}
          <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-500">
            <span className="hidden sm:inline">Jul, 2024</span>
            <span className="sm:hidden">Jul</span>
            <span className="hidden sm:inline">Aug, 2024</span>
            <span className="sm:hidden">Aug</span>
            <span className="hidden sm:inline">Sep, 2024</span>
            <span className="sm:hidden">Sep</span>
            <span className="hidden sm:inline">Oct, 2024</span>
            <span className="sm:hidden">Oct</span>
          </div>
        </div>
      </div>
    </div>
  )
}
