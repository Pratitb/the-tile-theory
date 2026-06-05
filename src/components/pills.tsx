
interface PillsProps {
    getPills: string[]
    getActivePill: (name: string) => void
    activeSt: string
}

const Pills = ({ getPills, getActivePill, activeSt }: PillsProps) => {
    return (
        <div className='flex gap-2 max-w-fit overflow-x-auto'>
            {getPills?.map((pill: string) => <div key={pill} className={`border border-black rounded-full capitalize whitespace-nowrap px-4 py-1 cursor-pointer ${activeSt === pill ? 'bg-black text-white font-bold' : ''}`} onClick={() => getActivePill?.(pill ?? '')}>{pill}</div>)}
        </div>
    )
}

export default Pills