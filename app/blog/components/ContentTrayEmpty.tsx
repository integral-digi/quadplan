const EmptyTray = () => {
    return (
        <div className="border-zinc-800/30 border rounded-lg w-full justify-center items-center flex">
            <div className="w-fit space-y-9 flex items-center justify-center flex-col p-16">
                <img 
                    src="/assets/empty-desk.svg" 
                    alt="empty desk" 
                    className="w-auto h-[18rem] filter" 
                />
                <section className="w-full space-y-6">
                    <h4 className="text-4xl text-center text-white font-bold">
                        No posts yet
                    </h4>
                    <p className="font-medium text-center text-base text-white">
                        check back later
                    </p>
                </section>
            </div>
        </div>
    )
}

export default EmptyTray;