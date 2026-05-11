import Button from "./button"

const Banner = () => {
    return (
        <div className='w-full h-[400px] lg:h-[550px] flex flex-col gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-8'>
            <p className="max-w-[500px] text-white font-bold text-4xl md:text-5xl md:leading-[55px]">If you're looking for the best tiles in Australia, you're at the right place.</p>
            <Button btnName="explore categories" />
        </div>
    )
}

export default Banner