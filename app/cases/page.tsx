"use client"
import { projectData } from "@/app/components/Projects";
import { useParams } from "next/navigation";
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import CaseGrid from "./components/CaseGrid";
import Hero from "./components/Hero";
import MobileNav from "@/app/components/MobileNav";

const CasesHome = () => {
    const { name } = useParams() as { name: string };
    // Find the project data based on the project name
    const project = projectData.find((c) => c.name.toLowerCase() === name);

    return (
        <div className="w-full bg-zinc-900">
            <div className="w-full space-y-32 py-12">
                <HomeNav />
                <MobileNav />
                <Hero />
                <CaseGrid />
                <Footer />
            </div>
        </div>
    )
}

export default CasesHome;