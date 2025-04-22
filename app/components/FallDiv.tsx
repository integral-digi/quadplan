"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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
	buttonText: "Refer Us"
};

const FallDiv = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [containerWidth, setContainerWidth] = useState(0);

	// Compute animation parameters only once (per mount)
	const animatedProps = useMemo(() => {
		// Define animation constants
		const baseXPercent = -20;
		const baseY = 60;
		const verticalGap = 56; // Adjusted for better stacking
		const xStepPercent = 72; // Adjusted for a tighter diagonal
		const rotationRange = 8; // ±8 degrees

		return fdItems.anims.map((_, index) => {
			let finalXVal = baseXPercent + index * xStepPercent;
			finalXVal = Math.min(finalXVal, 80); // Clamp the value
			const finalX = `${finalXVal}%`;

			// Precalculate a small random offset for variation
			const randomOffsetY = Math.random() * 4 - 2; 
			const finalY = baseY + index * verticalGap + randomOffsetY;
			const randomRotate = Math.random() * (2 * rotationRange) - rotationRange;

			return { finalX, finalY, randomRotate };
		});
	}, []);

	// Update container width on resize (if needed for responsive logic)
	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Trigger animations only when the container is in view.
	// "once: true" ensures we only animate on first appearance.
	const isInView = useInView(containerRef, { once: true });

	// Animation configuration common for all items
	const dropDuration = 1.2; // Duration for drop animation
	const dropDelayFactor = 0.5; // Delay increment per item

	return (
		<div className="bg-zinc-800/30 w-full h-fit">
			<div
				className="w-full h-full pl-6 md:pl-24 pt-12 md:pt-24 relative"
				ref={containerRef}
			>
				{/* Title Section */}
				<div className="w-full md:w-2/3 mb-8">
					<h2 className="text-white text-4xl md:text-4xl font-bold leading-tight">
						{fdItems.title}
					</h2>
				</div>

				{/* Falling elements container */}
				<div className="w-full h-[400px] md:h-[440px] relative overflow-hidden -mt-8 md:-mt-16">
					{fdItems.anims.map((item, index) => {
						// Get precomputed animation values for this element.
						const { finalX, finalY, randomRotate } = animatedProps[index];

						return (
							<motion.div
								key={index}
								style={{
									position: "absolute",
									// Using percentages for responsiveness.
									right: `calc(10% + ${index * 5}%)`,
								}}
								className="bg-zinc-800 rounded-full border border-white px-4 md:px-6 h-10 md:h-16 flex items-center justify-center shadow-md whitespace-nowrap"
								// Initial state before animation starts.
								initial={{ y: -100, opacity: 0, rotate: 0 }}
								// Animate only if container is in view.
								animate={
									isInView
										? { y: finalY, x: finalX, rotate: randomRotate, opacity: 1 }
										: {}
								}
								transition={{
									delay: index * dropDelayFactor,
									duration: dropDuration,
									ease: "easeInOut",
								}}
							>
								<p className="text-white text-xl lg:text-4xl font-bold text-center">
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