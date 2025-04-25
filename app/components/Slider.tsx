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
			<div className="flex space-x-4 md:space-x-16 items-center w-full">
				{photos.map((photo) => (
					<motion.div
						key={photo.id}
						className="w-[64rem] h-[300px] md:h-[640px]"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5, ease: "easeOut" }}
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