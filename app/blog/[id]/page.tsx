"use client"
import { useParams } from "next/navigation";
import BlogPost from "./components/BlogPost";
import HomeNav from "@/app/components/HomeNav";
import Footer from "@/app/components/Footer";
import { useContent } from "@/app/context/ContentContext";

const ContentHome = () => {
    const params = useParams();
    const id = params?.id as string | undefined;
    
    const content = useContent();

    if (!content || !content.items) {
        return <section>Loading</section>;
    }

    const { items } = content;
    
    const post = items.find((p: any) => p.id === id);

    return (
        <div className="w-full gap-y-16 bg-white dark:bg-gray-900">
            <HomeNav />
            {post ? (
                <BlogPost
                    thumbnail={post.thumbnail}
                    title={post.title}
                    post={post.post}
                    tags={post.tags}
                />
            ) : (
                <section>Post not found</section>
            )}
            <Footer />
        </div>
    );
}

export default ContentHome;
