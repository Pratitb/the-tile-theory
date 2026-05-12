import type { PillTabProps } from "../utils/types"

const PillTab = ({ name, getActivePill, activeSt }: PillTabProps) => {
    return (
        <div className={`border border-black rounded-full capitalize px-4 py-1 ${activeSt === name ? 'bg-black text-white font-bold' : ''}`} onClick={() => getActivePill(name ?? 'indoor')}>{name}</div>
    )
}

export default PillTab