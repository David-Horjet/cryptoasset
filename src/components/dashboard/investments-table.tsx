import { Badge } from "lucide-react"
import { Button } from "../ul/button"


export default function InvestmentsTable() {
  const investments = [
    {
      id: 1,
      company: "A-book",
      status: "Live",
      investDate: "Oct 14, 2024",
      invested: "$12,100",
      netValue: "$41,000",
      multiple: "3.0x",
      logo: "📚",
    },
    {
      id: 2,
      company: "Finglory",
      status: "Live",
      investDate: "Oct 5, 2024",
      invested: "$4,850",
      netValue: "$13,000",
      multiple: "3.0x",
      logo: "🏆",
    },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Investments</h2>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                />
              </svg>
            </Button>
            <Button variant="outline" size="sm">
              Export CSV
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">Add Investment</Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company/Fund
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
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
          <tbody className="bg-white divide-y divide-gray-200">
            {investments.map((investment) => (
              <tr key={investment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                      <span className="text-sm">{investment.logo}</span>
                    </div>
                    <span className="font-medium text-gray-900">{investment.company}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge className="bg-green-100 text-green-800">
                    {investment.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.investDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.invested}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.netValue}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{investment.multiple}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
