import type { ApplicationsProps, ProductCardProps } from "../utils/types"
import ApplicationCard from "./applicationCard"

const Applications = ({ head, getApplicationData }: ApplicationsProps) => {
    return (
        <>
            <p className="head mb-3">{head}</p>
            <div className='flex gap-4 max-w-fit overflow-x-auto mb-8' >
                {getApplicationData?.map((tile: ProductCardProps) => <ApplicationCard key={tile?.name} imageUrl={tile?.imageUrl} name={tile?.name} type={tile?.type} desc={tile?.desc} quality={tile?.quality} />)}
            </div>
        </>
    )
}

export default Applications