"use client"
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import Hero from "./components/Hero";
import CTA from "../components/CTA";
import Pillars from "./components/Main";
import MobileNav from "../components/MobileNav";


const CasesHome = () => {
    return (
        <div className="w-full bg-zinc-900">
            <div className="w-full space-y-32 py-12">
                <HomeNav />
                <MobileNav />
                <Hero />
                <Pillars />
                <CTA />
                <Footer />
            </div>
        </div>
    )
}

export default CasesHome;