const ContentTraySkeleton = () => {
    const placeholderItems = Array.from({ length: 6 });

    return (
        <div className="w-full space-y-8 pb-12 px-24">
            <div className="w-full flex flex-wrap gap-8">
                {placeholderItems.map((_, index) => (
                    <div
                        key={index}
                        className="w-[31.7%] min-h-[30rem] xll:w-full border border-sky-200/20 rounded-2xl animate-pulse bg-[rgba(255,255,255,0.05)]"
                    >
                        <div className="p-5 space-y-6">
                            <div className="w-full h-52 bg-slate-700 rounded-lg" />
                            <div className="space-y-4">
                                <div className="w-4/5 h-6 bg-slate-700 rounded-md" />
                                <div className="w-full h-4 bg-slate-700 rounded-md" />
                                <div className="flex gap-3 pt-4">
                                    <div className="w-16 h-6 bg-slate-700 rounded-full" />
                                    <div className="w-20 h-6 bg-slate-700 rounded-full" />
                                    <div className="w-12 h-6 bg-slate-700 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentTraySkeleton;
