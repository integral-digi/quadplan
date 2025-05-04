"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const heroItems = {
    buttonText: "Start your Free Consultation",
    path: "https://calendly.com/hello-quadplan/30min",
    title: "20 hours of CTO-level guidance and dev support per month, for one flat fee.",
    subtitle:
        "Join Quadplan’s Founder’s Deal: Get affordable on‑demand CTO expertise, product leadership, and code delivery—all for a predictable monthly fee. Whether you need a fractional CTO or zero‑cash MVP build, Quadplan has you covered. Let’s talk about your vision and map out a winning strategy",
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
        <div className="w-full flex items-center justify-center px-4 py-12 md:py-24">
            <motion.div
                className="space-y-12 flex flex-col justify-center w-full md:w-3/4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Title & Subtitle */}
                <motion.div className="space-y-5" variants={childVariants}>
                    <motion.h1 className="text-white text-center font-black text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5rem]">
                        {heroItems.title}
                    </motion.h1>
                    <motion.p
                        className={`text-center px-4 sm:px-8 md:px-20 ${style.paragraph}`}
                        variants={childVariants}
                    >
                        {heroItems.subtitle}
                    </motion.p>
                </motion.div>

                {/* Button */}
                <Link 
                    href={heroItems.path} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mx-auto w-fit"
                >
                    <motion.button
                        className="cursor-pointer px-6 h-16 bg-white rounded-full text-zinc-900 font-bold w-fit"
                        variants={childVariants}
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    >
                        {heroItems.buttonText}
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;