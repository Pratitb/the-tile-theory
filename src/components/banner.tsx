import Button from "./button"
import 'aos/dist/aos.css'

interface BannerProps {
    bannerText?: string
    getCategoriesScrollFn?: () => void
    getApplicationScrollFn?: () => void
    categ?: boolean
    apps?: boolean
}

const Banner = ({ bannerText, getCategoriesScrollFn, getApplicationScrollFn, categ, apps }: BannerProps) => {

    return (
        <div className='w-full min-h-[350px] lg:h-[450px] flex flex-col items-center gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-6 lg:p-14'>
            <p className="max-w-[500px] text-white font-bold capitalize text-center text-3xl sm:text-4xl lg:text-5xl md:leading-[45px] lg:leading-[55px]" data-aos='fade-zoom-in'>{bannerText}</p>
            <div className="flex flex-col gap-2 md:flex-row">
                {categ && <Button btnName="categories" getActionFn={getCategoriesScrollFn} />}
                {apps && <Button btnName="applications" getActionFn={getApplicationScrollFn} />}
            </div>
        </div>
    )
}

export default Banner