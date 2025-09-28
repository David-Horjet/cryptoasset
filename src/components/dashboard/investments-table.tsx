"use client";

import { useState } from "react";
import { Book, CupSodaIcon } from "lucide-react";
import { Button } from "../ul/button";
import { Badge } from "../ul/badge";

export default function InvestmentsTable() {
  const [showMobileCards, setShowMobileCards] = useState(false);
  const investments = [
    {
      id: 1,
      company: "A-book",
      status: "Live",
      investDate: "Oct 14, 2024",
      invested: "$12,100",
      netValue: "$41,000",
      multiple: "3.0x",
      logo: <Book />,
    },
    {
      id: 2,
      company: "Finglory",
      status: "Live",
      investDate: "Oct 5, 2024",
      invested: "$4,850",
      netValue: "$13,000",
      multiple: "3.0x",
      logo: <CupSodaIcon />,
    },
  ];

  return (
    <div className="bg-muted rounded-lg">
      <div className="p-4 md:p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Investments
          </h2>
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <Button variant="ghost" size="sm" className="p-2">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs md:text-sm bg-transparent"
            >
              Export CSV
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-xs md:text-sm">
              <span className="hidden sm:inline">Add Investment</span>
              <span className="sm:hidden">Add</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company/Fund
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invest Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invested
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Net Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Multiple
              </th>
            </tr>
          </thead>
          <tbody className="bg-muted divide-y divide-gray-200">
            {investments.map((investment) => (
              <tr key={investment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                      <span className="text-sm">{investment.logo}</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {investment.company}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className="bg-green-100 text-green-800">
                    {investment.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {investment.investDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {investment.invested}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {investment.netValue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {investment.multiple}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {investments.map((investment) => (
          <div
            key={investment.id}
            className="p-4 border-b border-gray-200 last:border-b-0"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                  <span className="text-sm">{investment.logo}</span>
                </div>
                <span className="font-medium text-gray-900">
                  {investment.company}
                </span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 text-xs"
              >
                {investment.status}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-500">Invested:</span>
                <div className="font-medium">{investment.invested}</div>
              </div>
              <div>
                <span className="text-gray-500">Net Value:</span>
                <div className="font-medium">{investment.netValue}</div>
              </div>
              <div>
                <span className="text-gray-500">Multiple:</span>
                <div className="font-medium">{investment.multiple}</div>
              </div>
              <div>
                <span className="text-gray-500">Date:</span>
                <div className="font-medium text-xs">
                  {investment.investDate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
