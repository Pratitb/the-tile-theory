import Button from "./button"
import 'aos/dist/aos.css'

const Banner = () => {



    return (
        <div className='w-full min-h-[350px] lg:h-[450px] flex flex-col gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-8'>
            <p className="max-w-[500px] text-white font-bold text-3xl md:text-5xl md:leading-[55px]" data-aos='fade-zoom-in'>If you're looking for the best tiles in Australia, you're at the right place.</p>
            <div className="flex flex-col gap-2 md:flex-row">
                <Button btnName="categories" />
                <Button btnName="use cases" />
            </div>
        </div>
    )
}

export default Banner