import { tileLinks } from '../utils/data'

const QuickLinks = () => {
    return (
        <div className='flex flex-col items-center gap-2 text-themeNavy'>
            <p className='flex-1 whitespace-nowrap font-semibold text-base capitalize underline'>quick links</p>
            <div className='flex sm:flex-col gap-4 flex-wrap justify-center text-center leading-4'>
                {tileLinks?.map((link) => <p key={link} className='capitalize'>{link}</p>)}
            </div>
        </div>
    )
}

export default QuickLinks