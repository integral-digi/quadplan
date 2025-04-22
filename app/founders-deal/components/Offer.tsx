"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const proposalItems = {
	title: "Your Technical Co‑Founder, On Demand",
	info: [
        "8+ years building high‑growth products for startups",
        "Deep expertise: Next.js, React Native, Python, cloud infra",
        "Proven process: Discovery → Design → Build → Scale",
        "Trusted by 20+ funded startups and SMEs"
    ],
	buttonText: "Schedule Call Now",
	firstImage: "/images/code.jpg",
};

const Offer = () => {
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
			<div className="flex flex-col space-y-32 lg:flex-row lg:items-center lg:justify-between px-4 lg:p-24">
				{/* Left Section: Text and Button */}
				<motion.div
					className="space-y-16 w-full lg:w-[40%]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={textVariants}
				>
					<div className="space-y-8">
						<h2 className="text-white text-3xl lg:text-4xl font-bold">
							{proposalItems.title}
						</h2>
                        {proposalItems.info.map((info, index)=>(
                            <div className="flex items-start lg:items-center-safe space-x-4" key={index}>
                                <CheckCircleIcon className="w-5 h-5 text-orange-300" />
                                <p className="font-normal text-white text-base">
                                    {info}
                                </p>
                            </div>
                        ))}
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
								<p className="text-zinc-900 text-base font-medium text-nowrap">
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
								<p className="text-white text-base font-medium text-nowrap">
									Refer us
								</p>
								<div className="hidden rounded-full h-8 w-8 bg-red-500 lg:flex items-center justify-center">
									<ArrowUpRightIcon className="w-4 h-4 text-white" />
								</div>
							</div>
						</motion.button>
					</div>
				</motion.div>
				

				{/* Right Section: Image Containers */}
				<motion.div
					className="w-full lg:w-[50%]"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={imageVariants}
				>
					<div className="overflow-clip w-full h-[600px] bg-indigo-300 rounded-tl-2xl rounded-bl-2xl relative">
						<img
							src={proposalItems.firstImage}
							alt="app"
							className="w-auto h-[600px]"
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Offer;