"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Heading from "./Heading";

// ----------------------------------------------
// Define the LogoProps interface.
interface LogoProps {
	id: number;
	name: string;
	src: string;
}

// ----------------------------------------------
// One logo array (IDs must be unique)
const logosOne: LogoProps[] = [
	{ id: 0, name: "testace", src: "/assets/testace.svg" },
	{ id: 1, name: "oracle", src: "/assets/oracle.svg" },
	{ id: 2, name: "quincy", src: "/assets/quincy.svg" },
	{ id: 4, name: "hims", src: "/assets/hims.svg" },
	{ id: 5, name: "middletrust", src: "/assets/middletrust.svg" },
	{ id: 6, name: "travvelbaby", src: "/assets/travvelbaby.svg" },
	{ id: 7, name: "fiverr", src: "/assets/fiverr.svg" },
	{ id: 8, name: "tractpay", src: "/assets/tractpay.svg" },
	{ id: 9, name: "ricochet", src: "/assets/ric-logo.svg" },
	{ id: 10, name: "research-ai", src: "/assets/research-logo.svg" },
	{ id: 11, name: "rentvec", src: "/assets/rentvec.svg" },
	{ id: 12, name: "bliqit", src: "/assets/bliqit.svg" },
];

// ----------------------------------------------
// Section elements text.
const scElements = {
	subtitle: "Trusted by innovative brands & SMES across the globe",
};

// ----------------------------------------------
// Extend LogoProps to include a unique key so that when updated the logo re-renders.
interface ExtendedLogoProps extends LogoProps {
	uid: string;
}

// ----------------------------------------------
// Helper function to shuffle an array using Fisher-Yates algorithm.
const shuffleArray = <T,>(array: T[]): T[] => {
	const newArr = [...array];
	for (let i = newArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
	}
	return newArr;
};

// ----------------------------------------------
// The Showcase component.
const Showcase = () => {
	// Fixed number of logos to show.
	const numLogosToShow = 6;

	// Initialize the displayed logos with a unique uid assigned (initially set to the logo id).
	const [currentLogos, setCurrentLogos] = useState<ExtendedLogoProps[]>(() =>
		shuffleArray(logosOne)
			.slice(0, numLogosToShow)
			.map((logo) => ({ ...logo, uid: `${logo.id}` }))
	);

	// Counter to help generate new unique keys.
	const [uidCounter, setUidCounter] = useState(1000);

	// Every few seconds, update one random logo.
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentLogos((prevLogos) => {
				// Pick a random index among the logos.
				const randomIndex = Math.floor(Math.random() * prevLogos.length);
				const currentLogo = prevLogos[randomIndex];

				// Build a list of candidate logos that are NOT currently visible (excluding the one to be replaced).
				const candidateLogos = logosOne.filter((logo) => {
					// If the logo is already shown in another slot, skip it.
					const isAlreadyVisible = prevLogos.some(
						(l, idx) => idx !== randomIndex && l.id === logo.id
					);
					return !isAlreadyVisible && logo.id !== currentLogo.id;
				});

				// If no candidate available (edge-case), keep the current logos unchanged.
				if (candidateLogos.length === 0) {
					return prevLogos;
				}

				// Select a random candidate from the filtered list.
				const newLogo =
					candidateLogos[Math.floor(Math.random() * candidateLogos.length)];

				// Generate a new unique uid.
				const newUid = `${newLogo.id}-${uidCounter}`;
				setUidCounter((c) => c + 1);

				// Replace the element at randomIndex.
				const newLogos = [...prevLogos];
				newLogos[randomIndex] = { ...newLogo, uid: newUid };
				return newLogos;
			});
		}, 5000); // update every 5 seconds

		return () => clearInterval(interval);
	}, [uidCounter]);

	// Define motion variants for the logo replacement.
	const logoVariants = {
		initial: { y: 20, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -20, opacity: 0 },
	};

	return (
		<motion.section
			className="hidden lg:block w-full"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.8 }}
			exit={{ opacity: 0 }}
		>
			<section className="space-y-16 px-4 lg:px-20 ">
				<Heading subtitle={scElements.subtitle.toLocaleUpperCase()} />
				{/* Flex container for logos */}
				<section className="flex gap-8 flex-wrap lg:flex-row items-center lg:justify-between">
					{currentLogos.map((logo, index) => (
						// Each logo container. Using AnimatePresence so that exit and entry animations trigger only for replaced logos.
						<div key={index} className="w-auto h-12 bg-transparent">
							<AnimatePresence mode="wait">
								<motion.div
									key={logo.uid}
									variants={logoVariants}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{
										type: "spring",
										stiffness: 50,
										damping: 10,
									}}
								>
									<img
										src={logo.src}
										alt={logo.name}
										className={`w-auto ${logo.id === 1 ? "h-4 lg:h-5" : "h-5 lg:h-6"}`}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					))}
				</section>
			</section>
		</motion.section>
	);
};

export default Showcase;
