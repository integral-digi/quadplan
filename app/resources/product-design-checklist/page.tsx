import HomeNav from "@/app/components/HomeNav"
import Footer from "@/app/components/Footer"
import MobileNav from "@/app/components/MobileNav"
import Hero from "../components/Hero"
import Head from "next/head"
import EmailSubscriptionForm from "../components/Form"

const FPHome = () => {
    return (
        <div className="bg-zinc-900 w-full">
            <Head>
                <title>Resources – Quadplan | Product Design Checklist for Founders</title>
                <meta name="description" content="Stay ahead with Quadplan’s blog: expert guides on MVP building, design thinking, tech stack choices, agile workflows, and user onboarding best practices." />
                <meta property="og:title" content="Resources – Quadplan | Product Design Checklist for Founders" />
                <meta property="og:description" content="Actionable articles to help founders and product teams ship smarter, faster, and with less risk." />
                <meta property="og:url" content="https://www.quadplan.co/resources/product-design-checklist" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="py-12 space-y-24">
                <HomeNav />
                <MobileNav />
                <Hero />
                <EmailSubscriptionForm />
                <Footer />
            </div>
        </div>
    )
}

export default FPHome;