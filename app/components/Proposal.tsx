"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const proposalItems = {
	title: "We Don't Just Build Apps",
	info: "At Quadplan, we’re not just another dev studio—we’re your product’s strategic launch partner. From idea to interface, we specialize in crafting high-performance web and mobile applications that don’t just function, they lead markets, delight users, and scale with confidence. Whether you’re a startup founder with a groundbreaking idea, or a business leader ready to transform operations digitally—you’re in the right place",
	buttonText: "Schedule Call Now",
	firstImage: "/images/appone.png",
	secondImage: "/images/apptwo.png"
};

const Proposal = () => {
	// Define variants for text (left section) and images (right section)
	const textVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
	};

	const imageVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
	};

	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className="flex items-center justify-between p-24">
				{/* Left Section: Text and Button */}
				<motion.div
					className="space-y-16 w-[40%]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={textVariants}
				>
					<div className="space-y-8">
						<h2 className="text-white text-[40px] font-bold">
							{proposalItems.title}
						</h2>
						<p className="font-normal text-white text-base">
							{proposalItems.info}
						</p>
					</div>
					<div className="flex items-center space-x-8">
						<motion.button
							className="bg-white h-12 pr-2 pl-4 cursor-pointer rounded-full flex justify-center"
							whileHover={{
								background:
									"linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
								scale: 1.01,
								transition: { duration: 0.3 }
							}}
						>
							<div className="flex space-x-4 items-center w-full">
								<p className="text-zinc-900 text-base">
									{proposalItems.buttonText}
								</p>
								<div className="rounded-full h-8 w-8 bg-red-500 flex items-center justify-center">
									<ArrowUpRightIcon className="w-4 h-4 text-white" />
								</div>
							</div>
						</motion.button>
						<motion.button
							className="bg-transparent h-12 pr-2 pl-4 cursor-pointer rounded-full flex justify-center"
							whileHover={{
								background:
									"linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
								scale: 1.01,
								transition: { duration: 0.3 }
							}}
						>
							<div className="flex space-x-4 items-center w-full">
								<p className="text-white text-base">
									Refer us
								</p>
								<div className="rounded-full h-8 w-8 bg-red-500 flex items-center justify-center">
									<ArrowUpRightIcon className="w-4 h-4 text-white" />
								</div>
							</div>
						</motion.button>
					</div>
				</motion.div>
				

				{/* Right Section: Image Containers */}
				<motion.div
					className="flex space-x-6 w-[50%]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={imageVariants}
				>
					<div className="overflow-clip w-1/2 h-[600px] bg-indigo-300 rounded-tl-2xl rounded-bl-2xl relative">
						<img
							src={proposalItems.firstImage}
							alt="app"
							className="w-auto h-[480px] absolute -top-16 -left-8"
						/>
					</div>
					<div className="overflow-clip w-1/2 h-[600px] bg-indigo-300 rounded-br-2xl rounded-tr-2xl relative">
						<img
							src={proposalItems.secondImage}
							alt="app"
							className="w-auto h-[480px] absolute -bottom-8 -right-8"
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Proposal;