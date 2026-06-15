import { pillars } from "../utils/data"

const Pillars = () => {
    return (
        <div className="flex flex-col sm:flex-row pb-10">
            <p className="about_head">our pillars</p>
            <div className="flex flex-wrap gap-4 flex-1 max-h-[300px] lg:max-h-fit overflow-y-auto">
                {pillars?.map((pillar) => <div key={pillar?.name} className="min-w-[47%] sm:flex-1 flex sm:flex-col items-start gap-3 border border-themeNavy rounded-lg p-4">
                    <span className="text-3xl text-themeGold">{pillar.icon}</span>
                    <div>
                        <p className="text-themeNavy md:text-lg lg:text-xl font-bold capitalize">{pillar?.name}</p>
                        <p className="text-xs sm:text-sm text-themeNavy tracking-wide">{pillar?.desc}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Pillars