"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PopoverButton } from "@headlessui/react";
import { footerTexts } from "./Footer";
import { navItems } from "./HomeNav";
import { XMarkIcon } from "@heroicons/react/24/solid";


interface MenuItemsProps {
    name: string;
    href: string;
}


export const hamburgerIcon: string = "assets/hamburger.svg";

const Menu = () => {
    const router = useRouter();
    
    return (
        <section className="bg-zinc-900 w-full h-full min-h-screen z-50">
            <section className="space-y-32 py-16 px-8 ">
                <section className="flex items-center justify-between">
                    <img src="/assets/quadplan.svg" className="w-auto h-5" alt="logo" />
                    <PopoverButton>
                        <XMarkIcon className="w-6 h-6 text-white cursor-pointer" />
                    </PopoverButton>
                </section>
                <section className="space-y-8">
                    {navItems.links.map((item, index) => (
                        <motion.p 
                            className="text-2xl text-white font-black cursor-pointer" 
                            key={index} onClick={()=>router.push(item.href)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 3, delay: 0.5 }}
                            exit={{ opacity: 0 }}
                        >
                            {item.name}
                        </motion.p>
                    ))}
                </section>
                <section className="flex items-center space-x-4">
                    {footerTexts.socials.map((social) => (
                        <section 
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${social.text === "Facebook" ? "bg-indigo-500" : "bg-transparent"}`} 
                            key={social.id}
                        >
                            <Link 
                                href={social.href} 
                                passHref target="blank"
                            >
                                <img 
                                    src={social.icon} 
                                    alt={social.text} 
                                    className="w-4 h-4" 
                                />
                            </Link>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Menu;