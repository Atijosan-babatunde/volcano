import FeaturedMoments from "@/component/FeaturedMoment";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import OurStorySection from "@/component/OurstorySection";
import WhyJoinTheFun from "@/component/WhyJoinFun";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-13 font-sans min-h-screen flex flex-col">
        <HeroSection/>
        <OurStorySection/>
        <WhyJoinTheFun/>
        <FeaturedMoments/>
      </main>
      <Footer/>
    </>
  )
}