"use client"

import { useState } from "react"

export default function PortfolioChart() {
  const [activeFilter, setActiveFilter] = useState("Last 90 days")

  const filters = ["All Time", "Invested", "Released", "Last 90 days"]

  return (
    <div className="bg-white h-full rounded-lg border border-[#f2e9df] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
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
              <span className="text-sm text-gray-600">{filter}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
          <span>$62k</span>
          <span>$41k</span>
          <span>$13k</span>
          <span>$5k</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Chart bars */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between">
            <div className="w-12 bg-[#f2e9df] h-8"></div>
            <div className="w-12 bg-[#f2e9df] h-12"></div>
            <div className="w-12 bg-[#f2e9df] h-16"></div>
            <div className="w-12 bg-[#f2e9df] h-20"></div>
            <div className="w-12 bg-[#f2e9df] h-24"></div>
            <div className="w-12 bg-[#f2e9df] h-28"></div>
            <div className="w-12 bg-[#f2e9df] h-32"></div>
            <div className="w-12 bg-[#f2e9df] h-36"></div>
            <div className="w-12 bg-primary h-48"></div>
            <div className="w-12 bg-primary h-52"></div>
            <div className="w-12 bg-primary h-56"></div>
            <div className="w-12 bg-primary h-60"></div>
          </div>

          {/* X-axis labels */}
          <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-500">
            <span>Jul, 2024</span>
            <span>Aug, 2024</span>
            <span>Sep, 2024</span>
            <span>Oct, 2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}
