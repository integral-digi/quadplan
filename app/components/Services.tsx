"use client";
import { motion } from "framer-motion";

const serviceItems = {
	rowOne: [
		{
			image: "/assets/1.jpg",
			title: "Product Strategy & Discovery",
			info: "We help you define your product roadmap, user personas, features, and success metrics before a single line of code is written."
		},
		{
			image: "/assets/2.jpg",
			title: "Illustration & Branding",
			info: "We understand how strong a role brand identity plays in the overall success of a product, and we design the best."
		},
		{
			image: "/assets/3.jpg",
			title: "UI/UX Design",
			info: "Our product designers create intuitive, beautiful interfaces your users will love—and remember. Design thinking is in our DNA."
		}
	],
	rowTwo: [
		{
			image: "/assets/5.jpg",
			title: "AI Model Development",
			info: "Designing digital experience for an AI and ML product, we focus on creating unique differentiators to set your product apart."
		},
		{
			image: "/assets/6.jpg",
			title: "Web & App Development",
			info: "From MVPs to complex enterprise solutions, we build reliable, scalable apps using the latest technologies and best engineering practices."
		},
		{
			image: "/assets/7.jpg",
			title: "Agile Product Management",
			info: "We manage your product lifecycle with care, agility, and transparency. Weekly sprints, ongoing feedback, and zero surprises."
		}
	]
};

// Helper to duplicate items so the animation loops seamlessly.
const duplicateItems = (items: any) => [...items, ...items];

const Services = () => {
	// Duration (in seconds) for one full scroll iteration.
	const duration = 20;

	return (
		<div className="w-full overflow-hidden">
			<div className="space-y-8 w-full">
				{/* Row One: Left-to-Right */}
				<motion.div
					className="flex space-x-8"
					animate={{ x: ["-50%", "0%"] }}
					transition={{ ease: "linear", duration: duration, repeat: Infinity }}
				>
					{duplicateItems(serviceItems.rowOne).map((item, index) => (
						<div
							key={`rowOne-${index}`}
							className="bg-zinc-800/30 rounded-2xl w-[45%] h-60 px-6 flex items-center justify-around flex-shrink-0"
						>
							<div className="flex space-x-10 items-center">
								<div className="w-[210px] h-[180px]">
									<img
										src={item.image}
										alt={item.title}
										className="rounded-xl w-full h-full object-cover"
									/>
								</div>
								<div className="space-y-6 w-2/3">
									<h3 className="text-white font-bold text-2xl">
										{item.title}
									</h3>
									<p className="text-base text-white font-normal">
										{item.info}
									</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>

				{/* Row Two: Right-to-Left */}
				<motion.div
					className="flex space-x-8"
					// Animate from 0% to -50% to move items from right-to-left continuously.
					animate={{ x: ["0%", "-50%"] }}
					transition={{ ease: "linear", duration: duration, repeat: Infinity }}
				>
					{duplicateItems(serviceItems.rowTwo).map((item, index) => (
						<div
							key={`rowTwo-${index}`}
							className="bg-zinc-800/30 rounded-2xl h-60 px-6 flex items-center justify-around w-[45%] flex-shrink-0"
						>
							<div className="flex space-x-10 items-center">
								<div className="w-[210px] h-[180px]">
									<img
										src={item.image}
										alt={item.title}
										className="rounded-xl w-full h-full object-cover"
									/>
								</div>
								<div className="space-y-6 w-2/3">
									<h3 className="text-white font-bold text-2xl">
										{item.title}
									</h3>
									<p className="text-base text-white font-normal">
										{item.info}
									</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Services;