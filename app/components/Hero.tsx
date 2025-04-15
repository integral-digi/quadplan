"use client";
import { motion } from "framer-motion";

const heroItems = {
	info: "Software Design & Development Agency Based in Lagos Nigeria",
	title: "Turning Great Ideas into Exceptional Digital Products",
	subtitle:
		"Whether you’re still validating an idea or ready to scale an existing product, our team of designers, developers, and product experts is ready to help you go from vision to version 1, and beyond.",
	buttonText: "Book a Free Discovery Call",
};

export const style = {
	paragraph: "text-base text-white font-normal",
};

// Container variant: This will stagger its children.
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

// Child variant: Each element will fade in and slide upward.
const childVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<motion.div
				className="space-y-12 flex flex-col justify-center w-3/4"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{/* Info */}
				<motion.p
					className={`text-center ${style.paragraph}`}
					variants={childVariants}
				>
					{heroItems.info}
				</motion.p>

				{/* Title & Subtitle */}
				<motion.div className="space-y-5" variants={childVariants}>
					<motion.h1 className="text-white text-[80px] font-black text-center">
						{heroItems.title}
					</motion.h1>
					<motion.p
						className={`text-center px-20 ${style.paragraph}`}
						variants={childVariants}
					>
						{heroItems.subtitle}
					</motion.p>
				</motion.div>

				{/* Button */}
				<motion.button
					className="cursor-pointer px-6 h-16 bg-white rounded-full text-stone-900 font-bold w-fit mx-auto"
					variants={childVariants}
					whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
				>
					{heroItems.buttonText}
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Hero;