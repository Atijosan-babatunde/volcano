"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function BankAccountDetails() {
  const [copied, setCopied] = useState(false)

  const bankData = {
    name: "Providus Bank",
    holder: "VICKIEEGOLD ENTERPRISE",
    number: "9641058032",
  }

  const handleCopyAccountNumber = () => {
    navigator.clipboard.writeText(bankData.number.replace(/\s/g, ""))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Bank Account Details</h2>
        <p className="text-gray-600 text-sm mt-2">
          Please use the following bank details to make your payment. Ensure all details are correct to avoid delays.
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700 text-sm font-semibold">Bank Name:</span>
          <span className="text-gray-900 font-semibold">{bankData.name}</span>
        </div>

        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700 text-sm font-semibold">Account Holder:</span>
          <span className="text-gray-900 font-semibold">{bankData.holder}</span>
        </div>

        <div className="flex justify-between items-center py-3">
          <span className="text-gray-700 text-sm font-semibold">Account Number:</span>
          <span className="text-gray-900 font-semibold">{bankData.number}</span>
        </div>

        <button
          onClick={handleCopyAccountNumber}
          className="w-full bg-[#E15E03] hover:bg-[#984910] text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200 mt-4"
        >
          {copied ? (
            <>
              <Check size={18} />
              <span>Account Number Copied</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span>Copy Account Number</span>
            </>
          )}
        </button>
      </div>
    </section>
  )
}
