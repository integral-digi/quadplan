"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fdItems = {
	title: "We Build Smart, Scalable, Human-Centered Software That Delivers",
	anims: [
		"Web Development",
		"Web Design",
		"Product Design",
		"User Testing",
		"App Development",
		"Illustration",
		"Branding",
	],
};

const FallDiv = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [containerWidth, setContainerWidth] = useState(0);

	// Define animation parameters
	const baseXPercent = -20;
	const baseY = 60;
	const verticalGap = 56; // Adjusted for better stacking
	const xStepPercent = 72; // Adjusted for a tighter diagonal
	const rotationRange = 8; // ±8 degrees
	const dropDuration = 1.2; // Shorter duration for a snappier feel
	const dropDelayFactor = 0.5; // Smaller delay increment

	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="bg-stone-900 w-full h-fit">
			<div className="w-full h-full pl-6 md:pl-24 pt-12 md:pt-24 relative" ref={containerRef}>
				{/* Title Section */}
				<div className="w-full md:w-2/3 mb-8 md:mb-0">
					<h2 className="text-white text-2xl md:text-[40px] font-bold leading-tight">
						{fdItems.title}
					</h2>
				</div>

				{/* Container for falling elements */}
				<div className="w-full h-[400px] md:h-[440px] relative overflow-hidden -mt-8 md:-mt-16">
					{fdItems.anims.map((item, index) => {
						let finalXVal = baseXPercent + index * xStepPercent;
						finalXVal = Math.min(finalXVal, 80); // Adjusted clamp

						const finalX = `${finalXVal}%`;
						const randomOffsetY = Math.random() * 4 - 2;
						const finalY = baseY + index * verticalGap + randomOffsetY;
						const randomRotate = (Math.random() * 2 * rotationRange) - rotationRange;

						return (
							<motion.div
								key={index}
								style={{
									position: "absolute",
									// Use percentages for better responsiveness on the right
									right: `calc(10% + ${index * 5}%)`,
								}}
								className="bg-white rounded-full border border-white px-4 md:px-6 h-10 md:h-16
												 flex items-center justify-center shadow-md whitespace-nowrap"
								initial={{ y: -100, opacity: 0, rotate: 0 }}
								animate={{ y: finalY, x: finalX, rotate: randomRotate, opacity: 1 }}
								transition={{
									delay: index * dropDelayFactor, // Shorter, incremental delay
									duration: dropDuration,
									ease: "easeInOut",
								}}
							>
								<p className="text-stone-900 text-4xl font-bold text-center">
									{item}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FallDiv;