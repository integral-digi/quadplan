"use client"
import { CheckCircleIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { style } from "./Hero"
import Link from "next/link"

const investItems ={
    subtitle: "No Cash? No Problem. Build Your MVP for Equity",
    title: "Pitch your vision. If we see potential, we’ll invest our time—building your MVP in exchange for equity, or a blended cash/equity model. You retain ownership, we share upside.",
    info: [
        { title: "Apply Online", subtitle: "Complete a 2‑min pitch form." },
        { title: "Get Reviewed", subtitle: "We’ll schedule a 15‑min discovery call."},
        { title: "Agreement", subtitle: "We agree on equity or cash + equity terms." },       
        { title: "Build & Launch", subtitle: "Your MVP goes live—fast." }
    ],
    buttonItems: { text: "Apply for Equity Build", link: "https://forms.fillout.com/t/29c4Swhd6Xus" },
    firstImage: ""

}

const InvestSection = () => {
    // Define variants for text (left section) and images (right section)
	const textVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
	};

	const imageVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
	};

    // Variant for each card, with a dynamic delay based on its index.
    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: any) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.3, duration: 0.8, ease: "easeOut" },
        }),
    };
    
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full flex items-center justify-between p-4 lg:p-24">
                {/* Left Section: Text and Button */}
                <motion.div
                    className="space-y-16 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                >
                    <div className="space-y-16 lg:space-y-32">
                        <div className="space-y-8">
                            <p className="text-white text-3xl lg:text-[40px] font-bold">
                                {investItems.subtitle}
                            </p>
                            <h2 className={`lw-full g:w-1/2 ${style.paragraph}`}>
                                {investItems.title}
                            </h2>
                        </div>
                        {/* First row of boxes */}
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-5 space-y-5 lg:space-y-0">
                            {investItems.info.map((item, index) => (
                                <motion.div
                                    key={index}
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
                                    <div className="space-y-8 p-8 md:p-8">
                                        <h3 className="text-white font-bold text-2xl md:text-[40px] w-full">
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
                    <Link href={investItems.buttonItems.link} passHref target="_blank">
                        <div className="flex items-center space-x-8">
                            <motion.button
                                className="bg-white h-12 pr-2 pl-4 cursor-pointer rounded-full flex justify-center"
                                whileHover={{
                                    background:
                                        "linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
                                    scale: 1.01,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="flex space-x-4 items-center w-full">
                                    <p className="text-zinc-900 text-base font-medium">
                                        {investItems.buttonItems.text}
                                    </p>
                                    <div className="rounded-full h-8 w-8 bg-red-500 flex items-center justify-center">
                                        <ArrowUpRightIcon className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </motion.button>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default InvestSection