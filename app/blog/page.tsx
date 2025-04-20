import HomeNav from "@/app/components/HomeNav"
import ContentTray from "./components/ContentTray"
import Footer from "@/app/components/Footer"

const BlogHome = () => {
    return (
        <div className="bg-zinc-900 w-full">
            <div className="py-12 space-y-32">
                <HomeNav />
                <ContentTray />
                <Footer />
            </div>
        </div>
    )
}

export default BlogHome;