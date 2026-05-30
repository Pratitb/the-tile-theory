import type { BannerProps } from "../utils/types"
import Button from "./button"
import 'aos/dist/aos.css'

const Banner = ({ getCategoriesScrollFn, getApplicationScrollFn }: BannerProps) => {

    return (
        <div className='w-full min-h-[350px] lg:h-[450px] flex flex-col gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-8 xl:p-10 xl:py-14'>
            <p className="max-w-[500px] text-white font-bold text-3xl md:text-5xl md:leading-[55px]" data-aos='fade-zoom-in'>If you're looking for the best tiles in Australia, you're at the right place.</p>
            <div className="flex flex-col gap-2 md:flex-row">
                <Button btnName="categories" getActionFn={getCategoriesScrollFn} />
                <Button btnName="applications" getActionFn={getApplicationScrollFn} />
            </div>
        </div>
    )
}

export default Banner