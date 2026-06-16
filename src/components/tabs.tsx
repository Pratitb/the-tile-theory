import type { Tabkeys } from "../utils/types"

interface TabProps {
    tabs?: Tabkeys[]
    getTabFn: (desc: string) => void
    activeTab: string
}

const Tabs = ({ tabs, getTabFn, activeTab }: TabProps) => {
    return (
        <div className="flex gap-2">
            {tabs?.map((tab: Tabkeys) => <p key={tab?.desc} onClick={() => getTabFn(tab?.desc)} className={`flex flex-1 justify-center border border-themeNavy rounded-full cursor-pointer ${activeTab.toLowerCase() == tab?.desc ? 'bg-themeNavy text-themeGold' : 'text-themeNavy'} font-semibold capitalize p-2`}>{tab?.name}</p>)}
        </div>
    )
}

export default Tabs