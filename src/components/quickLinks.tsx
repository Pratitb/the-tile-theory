import { Link } from 'react-router-dom'
import { tileLinks } from '../utils/data'
import type { TileLinks } from '../utils/types'

const QuickLinks = () => {

    return (
        <div className='flex flex-col items-center gap-2 text-themeNavy'>
            <p className='footer_head'>quick links</p>
            <div className='flex sm:flex-col gap-2 flex-wrap justify-center text-center leading-4'>
                {tileLinks?.map((link: TileLinks) => <Link to={link.path} key={link.name} className='capitalize underline'>{link?.name}</Link>)}
            </div>
        </div>
    )
}

export default QuickLinks