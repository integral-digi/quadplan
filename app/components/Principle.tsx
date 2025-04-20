"use client";
import { motion } from "framer-motion";
import { style } from "./Hero";

const boxItems = [
	{
		id: 1,
		title: "Human-First Design",
		subtitle:
			" We obsess over the user experience, so your product not only works—but wins hearts.",
	},
	{
		id: 2,
		title: "Engineering Excellence",
		subtitle:
			"Built to scale, built to last. Clean code, top tech stacks, and robust architecture come standard.",
	},
	{
		id: 3,
		title: "Founder-Friendly Approach",
		subtitle:
			"We partner with you like a co-founder - lean, iterative, and always in sync with your business goals.",
	},
];

const boxItemsTwo = [
	{
		id: 1,
		title: "Speed Without the Chaos",
		subtitle:
			"We move fast, but smart. Our agile workflow means you stay in the loop from day one.",
	},
	{
		id: 2,
		title: "Budget Friendly",
		subtitle:
			"Whether you're launching a new app or redesigning your web platform, Quadplan combines creativity with engineering expertise to deliver high-quality digital products—on time, on budget.",
	},
];

// Variant for each card, with a dynamic delay based on its index.
const cardVariant = {
	hidden: { opacity: 0, y: 50 },
	visible: (custom: any) => ({
		opacity: 1,
		y: 0,
		transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" },
	}),
};

const Principle = () => {
	return (
		<div className="space-y-5 w-full px-4 md:px-20 py-10">
			{/* First row of boxes */}
			<div className="flex flex-col md:flex-row md:justify-between md:space-x-5 space-y-5 md:space-y-0">
				{boxItems.map((item, index) => (
					<motion.div
						key={item.id}
						custom={index}
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						whileHover={{
							background:
								"linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
							scale: 1.01,
							transition: { duration: 0.3 },
						}}
						viewport={{ once: true, amount: 0.5 }}
						className="w-full md:w-1/3 h-80 md:h-96 relative bg-stone-900 rounded-2xl overflow-hidden"
					>
						<div className="space-y-8 p-4 md:p-8">
							<h1 className="text-white font-bold text-2xl md:text-[40px] w-[80%]">
								{item.title}
							</h1>
							<p className={style.paragraph}>{item.subtitle}</p>
						</div>
						<img
							className="absolute right-4 bottom-4 w-8 h-8 md:w-10 md:h-10"
							src="/assets/down-right-arrow.svg"
							alt="arrow"
						/>
					</motion.div>
				))}
			</div>

			{/* Second row of boxes */}
			<div className="flex flex-col md:flex-row md:justify-between md:space-x-5 space-y-5 md:space-y-0">
				{boxItemsTwo.map((item, index) => (
					<motion.div
						key={item.id}
						custom={index}
						variants={cardVariant}
						initial="hidden"
						whileInView="visible"
						whileHover={{
							background:
								"linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
							scale: 1.01,
							transition: { duration: 0.3 },
						}}
						viewport={{ once: true, amount: 0.5 }}
						className={`${
							item.id === 2 ? "bg-red-500" : "bg-stone-900"
						} shadow-3xl rounded-2xl w-full md:w-1/2 h-80 md:h-96 relative overflow-hidden`}
					>
						<div className="space-y-8 p-4 md:p-8">
							<h1 className="text-white font-bold text-xl md:text-[40px] w-1/2">
								{item.title}
							</h1>
							<p className={style.paragraph}>{item.subtitle}</p>
						</div>
						<img
							className="absolute right-4 bottom-4 w-8 h-8 md:w-10 md:h-10"
							src="/assets/down-right-arrow.svg"
							alt="arrow"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Principle;