"use client";
import { motion } from "framer-motion";

const photos = [
	{ id: 1, src: "/assets/photo-one.jpeg" },
	{ id: 2, src: "/assets/photo-two.jpeg" },
	{ id: 3, src: "/assets/photo-three.jpeg" },
];

const Slider = () => {
	return (
		<div className="w-full overflow-clip">
			<div className="flex space-x-16 items-center">
				{photos.map((photo) => (
					<motion.div
						key={photo.id}
						className="h-[640px] w-full"
						// Initial state: start 50px lower and transparent.
						initial={{ opacity: 0, x: 50 }}
						// When the component enters the viewport, animate to visible and in place.
						whileInView={{ opacity: 1, x: 0 }}
						// Transition settings can be adjusted as needed.
						transition={{ duration: 1.5, ease: "easeOut" }}
						// "once" ensures the animation triggers only a single time,
						// and "amount" specifies the percentage of the component that needs to be visible.
						viewport={{ once: true, amount: 0.5 }}
					>
						<img
							src={photo.src}
							alt="slider-image"
							className="w-full h-full object-cover"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Slider;
