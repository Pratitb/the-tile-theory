import { pillars } from "../utils/data"

const Pillars = () => {
    return (
        <div className="flex flex-col sm:flex-row pb-10">
            <p className="about_head">our pillars</p>
            <div className="flex flex-wrap gap-2 flex-1">
                {pillars?.map((pillar) => <div key={pillar?.name} className="min-w-[48%] sm:flex-1 md:flex md:items-start md:gap-3 border border-themeNavy rounded-lg p-4">
                    <span className="text-3xl text-themeGold">{pillar.icon}</span>
                    <div>
                        <p className="text-themeNavy md:text-lg lg:text-xl font-semibold capitalize mt-2 md:mt-0">{pillar?.name}</p>
                        <p className="text-xs text-themeNavy">{pillar?.desc}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Pillars