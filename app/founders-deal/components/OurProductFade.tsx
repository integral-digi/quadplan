import { pricing, PricingItem } from "./Products";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const OurProductFade = () => {
    return (
        <section className="bg-orange-100 p-8 md:p-8 lg:p-16 lg:space-y-0 rounded-3xl">
            {pricing.map((single: PricingItem) => (
                <div className="w-full" key={single.id}>
                    {single.id === 3 &&
                        <section key={single.id} className="space-y-6 w-full">
                            <section className="space-y-3 w-full">
                                <h2 className="text-gray-900 font-bold text-3xl">
                                    {single.name}
                                </h2>
                                <p className="text-gray-900 font-normal">{single.description}</p>
                            </section>
                            <section className="flex items-baseline space-x-2 w-full">
                                <h2 className="text-gray-900 font-bold text-5xl">
                                    {single.amount}
                                </h2>
                                <p className="text-zinc-800 font-bold">
                                    / monthly
                                </p>
                            </section>
                            <hr className="w-full lg:w-72 h-0.5 bg-neutral-300" />
                            <section className="space-y-6">
                                {single.features.map((feature: string, index: number) => (
                                    <section className="flex items-center space-x-4" key={index}>
                                        <CheckCircleIcon className="w-5 h-5 text-zinc-900" />
                                        <p className="text-gray-900 font-normal">{feature}</p>
                                    </section>
                                ))}
                                <button className="cursor-pointer hover:bg-red-500 hover:text-white justify-around border border-gray-900 rounded-3xl h-12 px-8 mt-4">
                                    <p className="text-gray-900 text-base font-bold hover:text-white">Purchase</p>
                                </button>
                            </section>
                        </section>
                    }
                </div>
            ))}
        </section>
    )
}

export default OurProductFade;