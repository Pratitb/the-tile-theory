import Button from "./button"

const MobHeader = () => {
    return (
        <div className="w-full bg-lightBg py-3 px-4 flex justify-between items-center rounded-lg">
            <p className='capitalize text-2xl font-semibold'>the tile theory</p>
            <Button btnName="quote" />
        </div>
    )
}

export default MobHeader