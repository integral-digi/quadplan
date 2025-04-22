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
            <div className="rounded-2xl bg-zinc-800/30">
                <div className="space-y-8 p-12 justify-center items-center flex flex-col">
                    <img src={ctaItems.image} alt="ribbon" className="w-full animate-bounce" />
                    <h2 className="text-[80px] text-center font-bold">
                        {ctaItems.title}
                    </h2>
                    <motion.button 
						className="bg-white h-12 pr-2 pl-4 cursor-pointer rounded-full flex justify-center"
						whileHover={{
							background: "linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
							scale: 1.01,
							transition: { duration: 0.3 }
						}}
					>
						<div className="flex space-x-4 items-center w-full">
							<p className="text-zinc-900 text-base font-medium">
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