"use client"
import { projectData } from "@/app/components/Projects";
import { useParams } from "next/navigation";
import MainCase from "./components/Main";
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import Tags from "./components/Tag";
import MobileNav from "@/app/components/MobileNav";

const CaseHome = () => {
    const { name } = useParams() as { name: string };
    // Find the project data based on the project name
    const project = projectData.find((c) => c.name.toLowerCase() === name);

    return (
        <div className="w-full bg-zinc-900">
            <div className="w-full space-y-32 py-12">
                <HomeNav />
                <MobileNav />
                {/* <Tags project={project} /> */}
                {project && <MainCase project={project} />}
                <Footer />
            </div>
        </div>
    )
}

export default CaseHome;