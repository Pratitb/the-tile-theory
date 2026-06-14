import { TbFileDownloadFilled } from 'react-icons/tb'
import type { ProductCardProps } from '../utils/types'

const ProductCard = ({ imageUrl, name, type, sizes, pdf }: ProductCardProps) => {
    return (
        <div className='product_card'>
            <img src={imageUrl} className='product_image' alt="" />
            <div className='product_details'>
                <p className='product_name'>{name}</p>
                <p className=' product_type'>{type}</p>
                <div className='flex justify-between items-end gap-4 mt-4'>
                    <div className='flex flex-wrap gap-1'>
                        {sizes?.map((size) => <p key={size} className='product_size'>{size}</p>)}
                    </div>
                    <a href={pdf} target='_blank'><TbFileDownloadFilled color='#252E44' className='text-3xl' /></a>
                </div>
            </div>
            {/* <p className='product_quality'>{quality}</p> */}
        </div>
    )
}

export default ProductCard