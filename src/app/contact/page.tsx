"use client"

import ContactForm from "@/component/Contact/ContactForm"
import ContactInfo from "@/component/Contact/ContactInfo"
import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar"



export default function ContactPage() {
    return (
        <>
        <Navbar/>
            <main className="min-h-screen bg-[#FAFAFB] pt-30 pb-20">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </main>
        <Footer/>
        </>
    )
}
