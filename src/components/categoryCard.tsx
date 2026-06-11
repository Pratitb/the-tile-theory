import { FaLocationArrow } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { CategoryCardProps } from '../utils/types'



const CategoryCard = ({ title, includes, link }: CategoryCardProps) => {
    return (
        <div className='w-full flex items-start justify-between gap-3 grow border border-brdrprime p-4 rounded-lg bg-cardBg'>
            <div>
                <p className='text-themeNavy font-semibold text-2xl xl:text-3xl capitalize'>{title}</p>
                <p className='text-themeNavy text-sm'>{includes}</p>
            </div>
            <Link to={link} className='bg-themeNavy w-fit p-3 self-center rounded-full cursor-pointer'><FaLocationArrow color='#e1c481' size={20} /></Link>
        </div>
    )
}

export default CategoryCard