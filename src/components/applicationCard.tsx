import type { ApplicationCardProps } from '../utils/types'

const ApplicationCard = ({ imageUrl, type, desc }: ApplicationCardProps) => {
    return (
        <div className='product_card'>
            <img src={imageUrl} className='product_image' alt="" />
            <div className='product_details'>
                {/* <p className='product_name'>{name}</p> */}
                <p className=' product_type'>{type}</p>
                <p className='product_desc'>{desc}</p>
            </div>
            {/* <p className='product_quality'>{quality}</p> */}
        </div>
    )
}

export default ApplicationCard