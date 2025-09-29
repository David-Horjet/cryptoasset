"use client"

import type { Cryptocurrency } from "@/app/dashboard/invest/page"

interface CryptoGridProps {
  cryptocurrencies: Cryptocurrency[]
  onCryptoSelect: (crypto: Cryptocurrency) => void
  loading?: boolean
  error?: string | null
}

export default function CryptoGrid({ cryptocurrencies, onCryptoSelect, loading, error }: CryptoGridProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: price < 1 ? 4 : 2,
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price)
  }

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`
    }
    return `$${marketCap.toLocaleString()}`
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gray-200 rounded w-12"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="h-10 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <div className="text-red-600 mb-2">⚠️</div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">Failed to Load Prices</h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cryptocurrencies.map((crypto) => (
        <div
          key={crypto.id}
          onClick={() => onCryptoSelect(crypto)}
          className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                {crypto.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {crypto.name}
                </h3>
                <p className="text-sm text-gray-500">{crypto.symbol}</p>
              </div>
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                crypto.change24h >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {crypto.change24h >= 0 ? "+" : ""}
              {crypto.change24h.toFixed(2)}%
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Price</span>
              <span className="font-semibold text-gray-900">{formatPrice(crypto.price)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Market Cap</span>
              <span className="font-medium text-gray-700">{formatMarketCap(crypto.marketCap)}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors group-hover:bg-primary/90">
              Invest in {crypto.symbol}
            </button>
          </div>

          {/* <div className="flex items-center justify-center mt-2">
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Price</span>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  )
}
