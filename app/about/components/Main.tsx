"use client";
import { motion } from "framer-motion";
import { style } from "./Hero";

const boxItems = [
	{
		id: 1,
		title: "Speed with purpose",
		subtitle:
			"In early-stage product development, every week counts. We move fast—but we never compromise on quality. Our agile approach helps you get to market quickly, learn faster, and iterate smarter.",
	},
	{
		id: 2,
		title: "Design as strategy",
		subtitle:
			"We treat design as more than just UI—it’s a core strategic lever. Our product thinking sharpens your value proposition and makes your app not just usable, but delightful.",
	},
	{
		id: 3,
		title: "Partners, not vendors",
		subtitle:
			"We embed ourselves in your team, obsess over your users, and challenge assumptions when necessary. Your goals become our goals.",
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

const Pillars = () => {
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
						className="w-full md:w-1/3 h-80 md:h-96 relative bg-zinc-800/30 rounded-2xl overflow-hidden"
					>
						<div className="space-y-8 p-4 md:p-8">
							<h3 className="text-white font-bold text-2xl md:text-4xl w-3/4">
								{item.title}
							</h3>
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

export default Pillars;