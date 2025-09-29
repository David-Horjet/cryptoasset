"use client";

import { useState } from "react";
import { useCryptoPrices } from "@/hooks/use-crypto-prices";
import CryptoGrid from "@/components/dashboard/invest/crypto-grid";
import DepositModal from "@/components/dashboard/invest/deposit-modal";
import DashboardHeader from "@/components/layout/dashboard/header";
import DashboardSidebar from "@/components/layout/dashboard/sidebar";

export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  icon: string;
  walletAddress: string;
}

export default function InvestPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<Cryptocurrency | null>(
    null
  );

  const { cryptocurrencies, loading, error } = useCryptoPrices();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex min-h-[90vh]">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 p-4 md:p-6 lg:ml-0">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Invest in Cryptocurrency
                  </h1>
                  <p className="text-gray-600">
                    Choose from our selection of top cryptocurrencies to start
                    your investment journey
                  </p>
                </div>
                {/* {!loading && !error && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Prices • Updates every 30s</span>
                  </div>
                )} */}
              </div>
            </div>

            <CryptoGrid
              cryptocurrencies={cryptocurrencies}
              onCryptoSelect={setSelectedCrypto}
              loading={loading}
              error={error}
            />
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <DepositModal
        crypto={selectedCrypto}
        onClose={() => setSelectedCrypto(null)}
      />
    </div>
  );
}
