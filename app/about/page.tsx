"use client"
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";


const CasesHome = () => {
    return (
        <div className="w-full bg-zinc-900">
            <div className="w-full space-y-32 py-12">
                <HomeNav />
                <Footer />
            </div>
        </div>
    )
}

export default CasesHome;