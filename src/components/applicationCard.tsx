import type { ApplicationCardProps } from '../utils/types'

const ApplicationCard = ({ imageUrl, type, desc }: ApplicationCardProps) => {
    return (
        <div className='application_card'>
            <img src={imageUrl} className='application_image' alt="" />
            <div className='application_details'>
                {/* <p className='product_name'>{name}</p> */}
                <p className='application_type'>{type}</p>
                <p className='application_desc'>{desc}</p>
            </div>
            {/* <p className='product_quality'>{quality}</p> */}
        </div>
    )
}

export default ApplicationCard