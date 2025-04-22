"use client"
import { Fragment } from "react";
import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const MobileNav: React.FC = () => {
    return (
        <section className="w-full lg:hidden pt-0 px-4">
            <section className="flex items-center justify-between w-full">
                <section>
                    <Link href="/" passHref>
                        <Image
                            src={ "/assets/quadplan.svg" }
                            alt="quadplan" 
                            width={ 120 }
                            height={ 24  }
                        />
                    </Link>
                </section>
                <Popover data-popover-target="MenuTray">
                    <PopoverButton>
                        <section>
                            <Bars2Icon className="text-white w-6 h-6" />
                        </section>
                    </PopoverButton>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1">
                        <PopoverPanel id="MenuTray" className="top-0 left-0 w-full z-50 overflow-y-scroll fixed">
                            {/* <MenuTray isDark={isDark} handleDark={handleDark} /> */}
                        </PopoverPanel>
                    </Transition>
                </Popover>
            </section>
        </section>
    )
}

export default MobileNav;