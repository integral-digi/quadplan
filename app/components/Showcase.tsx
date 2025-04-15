"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Heading from "./Heading";

interface LogoProps {
	id: number;
	name: string;
	src: string;
}

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

const scElements = {
	subtitle: "Trusted by innovative brands & SMES across the globe",
};

interface ExtendedLogoProps extends LogoProps {
	uid: string;
}

const shuffleArray = <T,>(array: T[]): T[] => {
	const newArr = [...array];
	for (let i = newArr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArr[i], newArr[j]] = [newArr[j], newArr[i]];
	}
	return newArr;
};

const Showcase = () => {
	const numLogosToShow = 6;
	const [currentLogos, setCurrentLogos] = useState<ExtendedLogoProps[]>(() =>
		shuffleArray(logosOne)
			.slice(0, numLogosToShow)
			.map((logo) => ({ ...logo, uid: `${logo.id}` }))
	);
	const uidCounterRef = useRef(1000); // Use useRef for the counter

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentLogos((prevLogos) => {
				const randomIndex = Math.floor(Math.random() * prevLogos.length);
				const currentLogo = prevLogos[randomIndex];

				const candidateLogos = logosOne.filter((logo) => {
					const isAlreadyVisible = prevLogos.some(
						(l, idx) => idx !== randomIndex && l.id === logo.id
					);
					return !isAlreadyVisible && logo.id !== currentLogo.id;
				});

				if (candidateLogos.length === 0) {
					return prevLogos;
				}

				const newLogo = candidateLogos[Math.floor(Math.random() * candidateLogos.length)];
				const newUid = `${newLogo.id}-${uidCounterRef.current}`;
				uidCounterRef.current += 1; // Increment using ref

				const newLogos = [...prevLogos];
				newLogos[randomIndex] = { ...newLogo, uid: newUid };
				return newLogos;
			});
		}, 5000);

		return () => clearInterval(interval);
	}, []); // Empty dependency array

	const logoVariants = {
		initial: { y: 20, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -20, opacity: 0 },
	};

	return (
		<div className="w-full">
			<section className="space-y-16 px-20">
				<Heading subtitle={scElements.subtitle.toLocaleUpperCase()} />
				<section className="flex items-center justify-between">
					{currentLogos.map((logo, index) => (
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
									className="w-full"
								>
									<img
										src={logo.src}
										alt={logo.name}
										className={`w-auto ${logo.id === 1 ? "h-5" : "h-6"}`}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					))}
				</section>
			</section>
		</div>
	);
};

export default Showcase;