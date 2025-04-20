"use client"
import { useRouter } from 'next/navigation';
import EmptyTray from './ContentTrayEmpty';
import { useContent } from '@/app/context/ContentContext';
import ContentTraySkeleton from './ContentSkeleton';

const ContentTray: React.FC = () => {
    const router = useRouter();
    const content = useContent();

    if (!content || !content.items) {
        return <ContentTraySkeleton />;
    }

    const { items } = content;

    return (
        <div className="w-full space-y-8 pb-12 px-24">
            {items.length === 0 ? (
                <section className="pt-8">
                    <EmptyTray />
                </section>
            ) : (
                <div className="w-full flex flex-wrap gap-8">
                    {items.map((item: any) => (
                        <section
                            key={item.id}
                            className="cursor-pointer w-[31.7%] min-h-[30rem] xll:h-max xll:w-full border border-sky-200/20 rounded-2xl hover:bg-[rgba(0,56,255,0.05)] hover:scale-105 transition-transform duration-300 overflow-hidden"
                            onClick={() => router.push(`/blog/${item.id}`)}
                        >
                            <div className="p-5 space-y-6">
                                <div className="w-full h-52 overflow-hidden rounded-lg">
                                    <img
                                        src="/images/blog/blog-img.jpg"
                                        className="w-full h-full object-cover"
                                        alt={item.title || "Blog thumbnail"}
                                    />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-2xl font-bold text-white text-wrap">
                                        {item.title}
                                    </p>
                                    <p className="text-base font-medium text-white">
                                        {item.post.slice(0, 100)}...
                                    </p>
                                    <div className="flex items-start justify-between">
                                        <div className="flex flex-wrap gap-3">
                                            {item.tags.map((tag: string, index: number) => (
                                                <div className="px-3 py-1 bg-stone-900 rounded-full" key={`${tag}-${index}`}>
                                                    <p className="text-sm text-white font-medium">
                                                        {tag}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center space-x-2 lg:hidden"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ContentTray;