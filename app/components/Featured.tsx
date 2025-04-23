import { useRouter } from "next/navigation";
import { projectData } from "./Projects";

const Featured = () => {
	const featuredCase = projectData.find((project) => project.status === "Featured");
	const router = useRouter();

	if (!featuredCase) {
		return (
			<div className="h-[1080px] w-full flex items-center justify-center">
				<p className="text-white text-lg">No featured project found.</p>
			</div>
		);
	}

	return (
		<div 
			onClick={() => router.push(`/cases/${featuredCase.name.toLowerCase()}`)}
			className="cursor-pointer lg:h-[812px] h-full bg-indigo-300 px-8 py-12 rounded-2xl bg-[url('/images/case-bg.jpg')] bg-cover bg-center w-full"
		>
			<div className="space-y-32 max-w-6xl mx-auto">
				<div className="flex lg:flex-row items-center justify-between">
					<div className="space-y-8">
						{featuredCase.logo && (
							<img
								src={featuredCase.logo}
								alt={featuredCase.name || "Featured Project"}
								className="w-auto h-8"
							/>
						)}
						<h2 className="text-white text-4xl font-bold">
							{featuredCase.name}
						</h2>
						<p className="font-normal text-white text-base">
							{featuredCase.intro}
						</p>
					</div>
					<img src={featuredCase.photoThree} alt="photo" className="hidden lg:block h-[480px] w-auto" />
				</div>
				<div className="flex items-start justify-between w-full">
					<div className="space-y-2 w-1/4">
						<h2 className="text-xl lg:text-5xl font-bold text-white">
							{featuredCase.clientType}
						</h2>
						<p className="font-normal text-white text-base">
							Company Type
						</p>
					</div>
					<div className="space-y-2 w-1/4">
						<h2 className="text-xl lg:text-5xl font-bold text-white">
							{featuredCase.scope}
						</h2>
						<p className="font-normal text-white text-base">
							Scope
						</p>
					</div>
					<div className="space-y-2 w-1/4">
						<h2 className="text-xl lg:text-5xl font-bold text-white">
							3x Growth
						</h2>
						<p className="font-normal text-white text-base">
							Result
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;