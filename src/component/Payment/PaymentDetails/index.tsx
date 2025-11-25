"use client"

import { MessageCircle } from "lucide-react"

export default function SubmitReceipt() {
  const whatsappNumber = "+234 816 477 7998"
  const whatsappLink = `https://wa.me/+2348164777998?text=Hello%20Volcano%20Beach%20Management,%20I%20would%20like%20to%20submit%20my%20payment%20receipt.`

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Submit Your Receipt</h2>
        <p className="text-gray-600 text-sm mt-2">
          After successfully making your payment, please follow these steps to send us your receipt:
        </p>
      </div>

      <div className="space-y-6">
        {/* Instructions List */}
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li className="text-sm">Make sure you have a clear screenshot or photo of your payment confirmation.</li>
          <li className="text-sm">Click the link below to open a chat with us on WhatsApp.</li>
          <li className="text-sm">Send your payment receipt via the WhatsApp chat.</li>
          <li className="text-sm">Kindly include your name in the message for faster processing.</li>
        </ol>

        {/* WhatsApp Contact */}
        <div className="flex items-center gap-2 py-3">
          <MessageCircle size={20} className="text-gray-700" />
          <div>
            <p className="text-xs text-gray-600">WhatsApp Number:</p>
            <p className="text-gray-900 font-semibold text-sm">{whatsappNumber}</p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#E15E03] hover:bg-[#984910] text-white font-semibold py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <MessageCircle size={18} />
          <span>Send Receipt via WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
