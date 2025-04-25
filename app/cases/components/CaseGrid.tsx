import { projectData } from "@/app/components/Projects"
import Link from "next/link";

const CaseGrid = () => {
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-8 w-full px-4 lg:px-24">
                {projectData.map((project)=>(
                    <Link 
                        key={project.id} 
                        href={`/cases/${project.name.toLowerCase()}`} 
                        passHref
                        target="_blank"
                        className="cursor-pointer lg:w-[31.7%] min-h-[20rem] h-max w-full border border-sky-200/20 rounded-2xl hover:bg-[rgba(0,56,255,0.05)] hover:scale-105 transition-transform duration-300 overflow-hidden"
                    >
                        <div>
                            <div className="space-y-12 p-8 w-full">
                                <img 
                                    src={project.logo} 
                                    className="h-4 w-auto" 
                                    alt={project.name} 
                                />
                                <div className="space-y-6">
                                    <p className="text-base text-white font-bold">
                                        {project.year}
                                    </p>
                                    <p className="text-4xl text-white font-bold">
                                        {project.title}
                                    </p>
                                    <p className="text-lg text-white font-bold">
                                        {project.description.slice(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CaseGrid;