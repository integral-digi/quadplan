"use client";
import { motion } from "framer-motion";

const heroItems = {
    title: "Case Studies",
    subtitle:
        "A few of the projects we have delivered to happy clients recently",
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
                    <motion.h1 className="text-white text-center font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]">
                        {heroItems.title}
                    </motion.h1>
                    <motion.p
                        className={`text-center px-4 sm:px-8 md:px-20 ${style.paragraph}`}
                        variants={childVariants}
                    >
                        {heroItems.subtitle}
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;