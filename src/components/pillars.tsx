import { pillars } from "../utils/data"

const Pillars = () => {
    return (
        <div className="flex flex-col lg:flex-row pb-10">
            <p className="about_head">our pillars</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 flex-1 max-h-[350px] lg:max-h-fit overflow-y-auto">
                {pillars?.map((pillar) => <div key={pillar?.name} className="sm:max-w-[48%] flex sm:flex-col items-start gap-4 border border-themeNavy rounded-lg px-4 py-6">
                    <span className="text-3xl text-themeGold">{pillar.icon}</span>
                    <div>
                        <p className="text-themeNavy text-2xl font-bold capitalize">{pillar?.name}</p>
                        <p className="text-themeNavy tracking-wide">{pillar?.desc}</p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Pillars