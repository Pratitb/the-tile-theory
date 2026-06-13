import type { BottomBannerProps } from "../utils/types"

const BottomBanner = ({ quote }: BottomBannerProps) => {
    return (

        <div className="flex flex-1 items-center justify-center text-center text-white text-sm lg:text-base border rounded-lg px-3 py-3 lg:px-5 bg-themeNavy shadow-md">
            {/* gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)] */}
            <p className=" font-bold">{quote}</p>
        </div>
        // gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.4)]
    )
}

export default BottomBanner