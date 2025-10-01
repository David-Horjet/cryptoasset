"use client"

import { useState } from "react"
import type { Cryptocurrency } from "@/app/dashboard/invest/page"

interface DepositModalProps {
  crypto: Cryptocurrency | null
  onClose: () => void
}

export default function DepositModal({ crypto, onClose }: DepositModalProps) {
  const [copied, setCopied] = useState(false)

  if (!crypto) return null

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(crypto.walletAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const generateQRCode = (address: string) => {
    // Using a simple QR code placeholder - in production, you'd use a QR code library
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(address)}`
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-bold">
                {crypto.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Deposit {crypto.symbol}</h2>
                <p className="text-sm text-gray-500">{crypto.name}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <svg
                className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-yellow-800">Important Notice</p>
                <p className="text-sm text-yellow-700 mt-1">
                  Only send {crypto.symbol} to this address. Sending other cryptocurrencies may result in permanent
                  loss.
                </p>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-lg">
              <img
                src={generateQRCode(crypto.walletAddress) || "/placeholder.svg"}
                alt={`${crypto.symbol} wallet QR code`}
                className="w-48 h-48 mx-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Scan QR code to get wallet address</p>
          </div>

          {/* Wallet Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">{crypto.symbol} Wallet Address</label>
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm font-mono text-gray-900 break-all">{crypto.walletAddress}</p>
              </div>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {copied ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {copied && <p className="text-sm text-green-600 mt-1">Address copied to clipboard!</p>}
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">How to deposit:</h3>
            <ol className="text-sm text-gray-600 space-y-1">
              <li>1. Copy the wallet address above</li>
              <li>2. Go to your external wallet or exchange</li>
              <li>3. Send {crypto.symbol} to this address</li>
              <li>4. Wait for network confirmation</li>
              <li>5. Your balance will be updated automatically</li>
            </ol>
          </div>

          {/* Network Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Network</p>
              <p className="font-medium text-gray-900">{crypto.symbol === "BTC" ? "BTC" : crypto.symbol === "ETH" ? "ETH" : "ERC20"}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Min Deposit</p>
              <p className="font-medium text-gray-900">
                {crypto.symbol === "BTC" ? "0.001" : crypto.symbol === "ETH" ? "0.01" : "1"} {crypto.symbol}
              </p>
            </div>
          </div> 

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
            <button
              onClick={copyToClipboard}
              className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Copy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
