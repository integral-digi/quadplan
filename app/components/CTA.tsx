"use client"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

const ctaItems = {
    title: "Ready to Build Something Incredible?",
    image: "/assets/ribbon.svg", 
    buttonText: "Schedule a Call Now"
}

const CTA = () => {
    return (
        <div className="w-full px-24">
            <div className="rounded-2xl bg-stone-900">
                <div className="space-y-8 p-12 justify-center items-center flex flex-col">
                    <img src={ctaItems.image} alt="ribbon" className="w-full" />
                    <h1 className="text-[80px] text-center font-bold">
                        {ctaItems.title}
                    </h1>
                    <motion.button 
						className="bg-white h-12 px-2 rounded-full flex justify-center"
						whileHover={{
							background: "linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #17182c",
							scale: 1.01,
							transition: { duration: 0.3 }
						}}
					>
						<div className="flex space-x-4 items-center w-full">
							<p className="text-stone-900 text-base">
								{ctaItems.buttonText}
							</p>
							<div className="rounded-full h-8 w-8 bg-red-500 flex items-center justify-around">
								<ArrowUpRightIcon className="w-4 h-4 text-white" />
							</div>
						</div>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default CTA;