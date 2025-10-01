"use client"

import { useState, useEffect } from "react"
import type { Cryptocurrency } from "@/app/dashboard/invest/page"

const COINGECKO_API = "https://api.coingecko.com/api/v3"

export function useCryptoPrices() {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Static wallet addresses provided by user   
  const walletAddresses = {
    bitcoin: "bc1qq88m6qnj689rgh3263psq7j8cxe42ay30zkryy", 
    ethereum: "0xFe5adcB8D10fb4f6C69a64C374f546f75bA014B4",
    usdt: "0xFe5adcB8D10fb4f6C69a64C374f546f75bA014B4",
    // solana: "0xFe5adcB8D10fb4f6C69a64C374f546f75bA014B4",
    // polkadot: "0xFe5adcB8D10fb4f6C69a64C374f546f75bA014B4",
    // chainlink: "0xFe5adcB8D10fb4f6C69a64C374f546f75bA014B4",
  }

  // Crypto icons mapping
  const cryptoIcons = {
    bitcoin: "₿",
    ethereum: "Ξ",
    usdt: "$",
    // solana: "◎",
    // polkadot: "●",
    // chainlink: "⬢",
  }

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        setLoading(true)
        setError(null)

        // ,cardano,solana,polkadot,chainlink
        const cryptoIds = "bitcoin,ethereum"
        const response = await fetch(
          `${COINGECKO_API}/simple/price?ids=${cryptoIds}&vs_currencies=usd&include_24hr_change=true&include_market_cap=true`,
        )

        if (!response.ok) {
          throw new Error("Failed to fetch crypto prices")
        }

        const data = await response.json()

        const formattedData: Cryptocurrency[] = Object.entries(data).map(([id, info]: [string, any]) => ({
          id,
          name: id.charAt(0).toUpperCase() + id.slice(1).replace("-", " "),
          symbol: getSymbol(id),
          price: info.usd || 0,
          change24h: info.usd_24h_change || 0,
          marketCap: info.usd_market_cap || 0,
          icon: cryptoIcons[id as keyof typeof cryptoIcons] || "●",
          walletAddress: walletAddresses[id as keyof typeof walletAddresses] || "",
        }))

        setCryptocurrencies(formattedData)
      } catch (err) {
        console.error("Error fetching crypto prices:", err)
        setError("Failed to load cryptocurrency prices")
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoPrices()

    // Refresh prices every 30 seconds
    const interval = setInterval(fetchCryptoPrices, 30000)

    return () => clearInterval(interval)
  }, [])

  const getSymbol = (id: string): string => {
    const symbols: { [key: string]: string } = {
      bitcoin: "BTC",
      ethereum: "ETH",
      usdt: "USDT",
    //   solana: "SOL",
    //   polkadot: "DOT",
    //   chainlink: "LINK",
    }
    return symbols[id] || id.toUpperCase()
  }

  return { cryptocurrencies, loading, error, refetch: () => window.location.reload() }
}
