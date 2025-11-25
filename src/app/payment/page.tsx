// import Footer from "@/component/Footer";
// import Navbar from "@/component/Navbar";
// import BankAccountDetails from "@/component/Payment/BankAccountDetails";
// import SubmitReceipt from "@/component/Payment/PaymentDetails";


// export default function PaymentPage() {
//   return (
//     <>
//       <Navbar />
//       <main className="pt-16 font-sans min-h-screen flex flex-col">
//         <BankAccountDetails/>
//         <SubmitReceipt/>
//       </main>
//       <Footer/>
//     </>
//   )
// }


import BankAccountDetails from "@/component/Payment/BankAccountDetails";
import SubmitReceipt from "@/component/Payment/PaymentDetails";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

export const metadata = {
    title: "Bank Account Details | Beach Vibes Events",
    description: "Bank account details and receipt submission for payment confirmation",
}

export default function BankDetailsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#FAFAFB] py-12 px-4 sm:px-6 lg:px-8 pt-30 pb-20">
                <div className="max-w-3xl mx-auto space-y-16">
                    <BankAccountDetails />
                    <SubmitReceipt />
                </div>
            </main>
            <Footer />
        </>
    )
}
