import type { BottomBannerProps } from "../utils/types"

const BottomBanner = ({ quote }: BottomBannerProps) => {
    return (

        <div className="flex flex-1 items-center justify-center text-center bg-themeNavy text-white shadow-md border rounded-lg px-[10px] py-4 lg:px-5">
            {/* gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)] */}
            <p className=" font-bold mb-3">{quote}</p>
        </div>
        // gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.4)]
    )
}

export default BottomBanner