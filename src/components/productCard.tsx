import { TbFileDownloadFilled } from 'react-icons/tb'
import type { ProductCardProps } from '../utils/types'

const ProductCard = ({ imageUrl, name, type, sizes, quality, pdf }: ProductCardProps) => {
    return (
        <div className='product_card'>
            <img src={imageUrl} className='product_image' alt="" />
            <div className='product_details'>
                <p className='product_name'>{name}</p>
                <p className=' product_type'>{type}</p>
                <div className='flex justify-between items-center gap-4'>
                    <div className='flex gap-1 max-w-fit overflow-x-auto'>
                        {sizes?.map((size) => <p key={size} className='product_size'>{size}</p>)}
                    </div>
                    <a href={pdf} target='_blank'><TbFileDownloadFilled className='text-2xl md:text-3xl xl:text-4xl' /></a>
                </div>
            </div>
            <p className='product_quality'>{quality}</p>
        </div>
    )
}

export default ProductCard