import Button from "./button"
import 'aos/dist/aos.css'

interface BannerProps {
    text1?: string
    text2?: string
    text3?: string
    getCategoriesScrollFn?: () => void
    getApplicationScrollFn?: () => void
    categ?: boolean
    apps?: boolean
}

const Banner = ({ text1, text2, text3, getCategoriesScrollFn, getApplicationScrollFn, categ, apps }: BannerProps) => {

    return (
        <div className='w-full min-h-[350px] lg:h-[450px] flex flex-col items-center justify-center gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-6 lg:p-14 mb-8'>
            <div className="max-w-[600px] lg:max-w-[730px] text-white font-bold capitalize text-center text-3xl sm:text-4xl lg:text-5xl md:leading-[45px] lg:leading-[55px]" data-aos='fade-zoom-in'>
                <span>{text1}&nbsp;</span>
                <span className="text-themeGold">{text2}&nbsp;</span>
                <span>{text3}</span>
            </div>
            <div className="flex gap-2 md:flex-row">
                {categ && <Button btnName="categories" getActionFn={getCategoriesScrollFn} />}
                {apps && <Button btnName="applications" getActionFn={getApplicationScrollFn} />}
            </div>
        </div>
    )
}

export default Banner