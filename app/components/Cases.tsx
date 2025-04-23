"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "./Projects";
import Featured from "./Featured";
import { useRouter } from "next/navigation";

// Variants for the overall card animation on entry
const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

// Variants for the overlay which will slide away on hover
const overlayVariants = {
	initial: { opacity: 0.9, x: 0 },
	hover: { 
		opacity: 0,
		x: "100%",
		transition: { duration: 0.8, ease: "easeOut" },
	},
};

const Cases = () => {
	const router = useRouter();

	const selectedProjects = projectData.slice(0, 3);
	return (
		<section className="w-full space-y-8 p-4 lg:p-24">
			<Featured />
			<section className="w-full grid grid-cols-1 lg:grid-cols-3 items-center gap-6 overflow-hidden">
				{selectedProjects.map((project) => (
					<motion.section
						key={project.id}
						className="relative w-full cursor-pointer"
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						whileHover={{ scale: 1.05, transition: { duration: 0.8 } }}
						onClick={() => router.push(`/cases/${project.name.toLowerCase()}`)}
					>
						{/* Animated overlay for creative effect */}
						<motion.div
							className="rounded-lg bg-amber-700 w-full h-full absolute top-0 left-0"
							variants={overlayVariants}
							initial="initial"
							whileHover="hover"
						/>
						<section className="w-full h-96 relative">
							<Image
								src={project.photo}
								alt={project.name}
								fill
								className="rounded-lg object-cover"
							/>
							<section className="absolute bottom-8 left-8 z-20">
								<div className="space-y-3">
									<div className="space-x-3 flex items-center">
										{project.tags.map((tag, idx) => (
											<div
												key={idx}
												className="px-4 py-1 bg-white rounded-full flex items-center justify-center"
											>
												<p className="text-orange-950 text-base font-normal">
													{tag}
												</p>
											</div>
										))}
									</div>
									<p className="text-white text-4xl font-extrabold leading-10">
										{project.name}
									</p>
								</div>
							</section>
						</section>
					</motion.section>
				))}
			</section>
		</section>
	);
};

export default Cases;