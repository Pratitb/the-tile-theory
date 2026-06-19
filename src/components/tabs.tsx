import { type Tabkeys } from "../utils/types"

interface TabProps {
    tabs: Tabkeys[]
    getTabFn?: (desc: string) => void
    activeTab?: string
    tabVari?: string
    tabContVari?: string
    label?: string
}

const Tabs = ({ tabs, getTabFn, activeTab, tabVari, tabContVari, label }: TabProps) => {
    return (
        <div className={`flex flex-col`}>
            {label && <p className="contact_label">{label}</p>}
            <div className={`flex items-center  ${tabContVari} w-full flex-nowrap sm:flex-wrap overflow-x-auto`}>
                {tabs?.map((tab: Tabkeys) => <div key={tab?.desc} onClick={() => getTabFn?.(tab?.desc)} className={`flex justify-center whitespace-nowrap border cursor-pointer ${tabVari} ${activeTab?.toLowerCase() == tab?.desc ? 'bg-themeNavy text-themeGold border-themeNavy' : 'text-secondaryText border-secondaryText'} font-semibold capitalize px-4 py-1`}>{tab?.name}</div>)}
            </div>
        </div>
    )
}

export default Tabs