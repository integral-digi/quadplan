import Link from "next/link";

const footerTexts = {
    logo: "/assets/logomark.svg",
    buttonImg: [
      { id: 1, name: "apple", img: "/assets/appstore.svg", href: "#" },
      { id: 2, name: "google", img: "/assets/playstore.svg", href: "#" }
    ],
    stayInTheLoop: "Stay in the loop",
    mailingList: "Join our mailing list and stay up to date on features and product updates.",
    subscribe: "Subscribe",
    privacyPolicy: "Privacy Policy",
    company: "Menu",
    companyItems: [
      { text: "About us", href: "#" },
      { text: "Blog", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Security", href: "#" },
      { text: "Newsroom", href: "#" },
    ],
    product: "Services",
    productItems: [
      { text: "Product Design", href: "#" },
      { text: "Web Design", href: "#" },
      { text: "Web Development", href: "#" },
      { text: "Mobile App Development", href: "#" },
      { text: "Branding", href: "#" },

    ],
    social: "Social",
    socials: [
      { text: "Dribbble", href: "https://dribbble.com/quadplan" },
      { text: "LinkedIn", href: "https://linkedin.com/company/quadplan" },
      { text: "Instagram", href: "https://instagram.com/thequadplan" },
      { text: "Twitter", href: "https://twitter.com/thequadplan" },
      { text: "Facebook", href: "https://facebook.com/quadplan" }
    ],

    footerNote: "© 2025 Quadplan. All rights reserved.",
    info: "Specializes in innovative product development strategies, creativity and data-driven insights to elevate your brand's online presence, and drive measurable growth."
  };

const Footer = () => {
    return (
        <div className="w-full space-y-12 flex flex-col justify-center items-center px-4 lg:px-24 overflow-hidden">
            <div className="w-full space-y-12 flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:w-[35%] w-full">
                    <div className="space-y-6">
                        <img src="/assets/quadplan.svg" alt="logo" className="h-6 w-auto" />
                        <p className="text-white text-base font-norml">
                            {footerTexts.info}
                        </p>
                    </div>
                </div>
                <div className="lg:w-[45%] lg:flex lg:justify-end w-full">
                    <section className="flex flex-wrap justify-between lg:flex-col lg:space-y-12 w-full">
                        <section className="flex flex-col space-x-0 lg:flex-row lg:space-x-24 space-y-8">
                            <section>
                                <h4 className="font-bold text-white mb-4">{footerTexts.company}</h4>
                                <ul className="space-y-2">
                                    {footerTexts.companyItems.map((item, index) => (
                                        <li key={index}><Link href={item.href} className="text-white text-base hover:text-cyan hover:underline">{item.text}</Link></li>
                                    ))}
                                </ul>
                            </section>
                            <section>
                                <h4 className="font-bold text-white mb-4">{footerTexts.product}</h4>
                                <ul className="space-y-2">
                                    {footerTexts.productItems.map((item, index) => (
                                        <li key={index}><Link href={item.href} className="text-white text-base hover:text-cyan hover:underline">{item.text}</Link></li>
                                    ))}
                                </ul>
                            </section>
                            <section>
                                <h4 className="font-bold text-white mb-4">{footerTexts.social}</h4>
                                <ul className="space-y-2">
                                    {footerTexts.socials.map((item, index) => (
                                        <li key={index}><Link href={item.href} target="_blank" className="text-white text-base hover:text-cyan hover:underline">{item.text}</Link></li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    </section>   
                </div> 

            </div>
            {/* <hr className="bg-black" /> */}
            <div className="w-full flex flex-col-reverse gap-y-4 lg:flex-row justify-between items-center">
                <div className="text-white text-sm w-fit">
                    {footerTexts.footerNote}
                </div>
                <div className="text-white text-sm flex items-center space-x-6 w-fit">
                    <Link href="#" passHref>
                        Terms of Service
                    </Link>
                    <Link href="#" passHref>
                        Privacy Policy
                    </Link>
                </div>
            </div>   
        </div>
    )
}

export default Footer;