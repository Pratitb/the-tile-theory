import type { BottomBannerProps } from "../utils/types"

const BottomBanner = ({ quote }: BottomBannerProps) => {
    return (

        <div className="flex-1 flex items-center bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)] text-white shadow-md border rounded-lg p-4">
            <p className="text-xl font-bold mb-3">{quote}</p>
        </div>
        // gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.4)]
    )
}

export default BottomBanner