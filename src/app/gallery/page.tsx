import Footer from "@/component/Footer";
import Hero from "@/component/Gallery/GalleryHeroSection";
import Gallery from "@/component/Gallery/PictureSection";
import Navbar from "@/component/Navbar";


export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-10 font-sans min-h-screen flex flex-col bg-[#FAFAFB]">
        <Hero/>
        <Gallery/>
      </main>
      <Footer/>
    </>
  )
}