import Button from "./button"
import 'aos/dist/aos.css'

interface BannerProps {
    text1?: string
    text2?: string
    text3?: string
    subHead?: string
    getCategoriesScrollFn?: () => void
    getApplicationScrollFn?: () => void
    categ?: boolean
    apps?: boolean
}

const Banner = ({ text1, text2, text3, subHead, getCategoriesScrollFn, getApplicationScrollFn, categ, apps }: BannerProps) => {

    return (
        <div className='w-full min-h-[350px] lg:h-[450px] flex flex-col items-center justify-center gap-6 bg-banner bg-cover bg-no-repeat bg-bottom rounded-lg p-4 lg:p-14 mb-8'>
            <div className="max-w-[600px] lg:max-w-[730px] text-white font-bold capitalize text-center text-3xl sm:text-4xl lg:text-5xl md:leading-[45px] lg:leading-[55px]" data-aos='fade-zoom-in'>
                {text1 && <span>{text1}&nbsp;</span>}
                {text2 && <span className="text-themeGold">{text2}&nbsp;</span>}
                {text3 && <span>{text3}</span>}
                {subHead && <div className="text-white text-lg sm:text-xl lg:text-2xl leading-6 font-semibold text-center mt-2">{subHead}</div>}
            </div>
            <div className="flex gap-2 md:flex-row">
                {categ && <Button btnType="button" btnName="categories" getActionFn={getCategoriesScrollFn} />}
                {apps && <Button btnType="button" btnName="applications" getActionFn={getApplicationScrollFn} />}
            </div>
        </div>
    )
}

export default Banner