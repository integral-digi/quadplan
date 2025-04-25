import HomeNav from "@/app/components/HomeNav"
import ContentTray from "./components/ContentTray"
import Footer from "@/app/components/Footer"
import Head from "next/head"
import MobileNav from "../components/MobileNav"

const BlogHome = () => {
    return (
        <div className="bg-zinc-900 w-full py-12">
            <Head>
                <title>Blog – Quadplan | Insights on MVPs, UX, Tech Stacks & More</title>
                <meta name="description" content="Stay ahead with Quadplan’s blog: expert guides on MVP building, design thinking, tech stack choices, agile workflows, and user onboarding best practices." />
                <meta property="og:title" content="Blog – Quadplan | Insights on MVPs, UX, Tech Stacks & More" />
                <meta property="og:description" content="Actionable articles to help founders and product teams ship smarter, faster, and with less risk." />
                <meta property="og:url" content="https://www.quadplan.co/blog" />
                <meta property="og:type" content="website" />                          
                <meta name="theme-color" content="#EF4136" />
            </Head>
            <div className="space-y-32">
                <HomeNav />
                <MobileNav />
                <ContentTray />
                <Footer />
            </div>
        </div>
    )
}

export default BlogHome;