"use client"
import { motion } from "framer-motion";
import Heading from "./Heading";

interface LogoProps {
    id: number;
    name: string;
    src: string;
}

const logos: LogoProps[] = [
    { id: 0, name: "testace", src: "/assets/testace.svg" },
    { id: 1, name: "oracle", src: "/assets/oracle.svg" },
    { id: 2, name: "quincy", src: "/assets/quincy.svg" },
    { id: 4, name: "hims", src: "/assets/hims.svg" },
    { id: 5, name: "middletrust", src: "/assets/middletrust.svg" },
    { id: 6, name: "travvelbaby", src: "/assets/travvelbaby.svg" },
]

const scElements = {
    subtitle: "Trusted by innovative brands & SMES across the globe"
}

const Showcase = () => {
    return (
        <motion.section 
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            exit={{ opacity: 0 }}
        >
            <section className="space-y-16 px-20">
                <Heading subtitle={scElements.subtitle.toLocaleUpperCase()} />
                <section className="flex items-center justify-between flex-1">
                    {logos.map((logo) => (
                        <section key={logo.id} className="w-auto h-12 bg-transparent">
                            <img src={logo.src} alt={logo.name} className={`w-auto ${logo.id === 1 ? "h-5" : "h-6"}`} />
                        </section>
                    ))}
                </section>
            </section>
        </motion.section>
    )
}

export default Showcase;