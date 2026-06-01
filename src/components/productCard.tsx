import type { ProductCardProps } from '../utils/types'

const ProductCard = ({ imageUrl, name, type, sizes, quality }: ProductCardProps) => {
    return (
        <div className='product_card'>
            <img src={imageUrl} className='product_image' alt="" />
            <div className='product_details'>
                <p className='product_name'>{name}</p>
                <p className=' product_type'>{type}</p>
                <div className='flex gap-2 max-w-fit overflow-x-auto mt-3'>
                    {sizes?.map((size) => <p key={size} className='border rounded-full px-2 py-1 text-secondaryText text-sm'>{size}</p>)}
                </div>
            </div>
            <p className='product_quality'>{quality}</p>
        </div>
    )
}

export default ProductCard