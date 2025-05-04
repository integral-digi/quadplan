"use client"
import Link from "next/link"
import { motion } from "framer-motion";
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";


export const navItems = {
    logo: "/assets/quadplan.svg",
    links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Cases", href: "/cases" },
        { name: "Founders Deal", href: "/founders-deal" },
    ],
    actions: [
        { name: "Contact Us", href: "/contact" },
    ]
}

const HomeNav = () => {
    return (
        <div className="hidden justify-between lg:flex lg:items-center w-full px-24">
            <div className="w-[10%] text-sky-600 text-2xl font-bold">
                <Link href="/" passHref>
                    <img src={navItems.logo} className="w-auto h-6" alt="logo" />
                </Link>
            </div>
            <div className="w-[60%] flex items-center justify-center">
                <div className="flex items-center space-x-16">
                    {navItems.links.map((link, index) => (
                        <div className="w-fit" key={index}>
                            { link.name === "Services" ?
                                <Popover className="z-50 relative">
                                    <PopoverButton className="font-book px-8 focus:outline-none focus:border-none">
                                        <div className="flex space-x-2 my-auto focus:outline-none focus:border-none"> 
                                            <span className="my-auto">{link.name}</span>
                                        </div> 
                                    </PopoverButton>
                                    <PopoverBackdrop className="fixed inset-0 bg-black opacity-30" />
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1" >
                                        <PopoverPanel className="w-max flex-auto absolute mt-6 overflow-hidden rounded-[10px] bg-white text-sm leading-6">
                                            <p>Coming Soon</p>
                                        </PopoverPanel>
                                    </Transition>
                                </Popover>
                                :
                                <Link href={link.href} passHref>
                                    <p className="text-white text-base">
                                        {link.name}
                                    </p>
                                </Link> 
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[12%] justify-end flex">
                <div className="flex items-center space-x-12">
                    <Link href={navItems.actions[0].href} passHref>
                        <motion.button 
                            className="bg-zinc-800/30 border border-white h-12 pr-2 pl-4 cursor-pointer rounded-full flex justify-center"
                            whileHover={{
                                background: "linear-gradient(0deg, rgba(0, 56, 255, 0.02) 0%, rgba(0, 56, 255, 0.02) 100%), #EF4136",
                                scale: 1.01,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="flex space-x-4 items-center w-full">
                                <p className="text-white text-base">
                                    {navItems.actions[0].name}
                                </p>
                                <div className="rounded-full h-8 w-8 bg-red-500 flex items-center justify-around">
                                    <ArrowUpRightIcon className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;