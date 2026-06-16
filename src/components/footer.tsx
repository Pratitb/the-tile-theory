import { homeBannerText1, homeBannerText2, homeBannerText3 } from "../utils/data"
import Brand from "./brand"
import Copyright from "./copyright"
import QuickLinks from "./quickLinks"
import ReachOut from "./reachOut"

const Footer = () => {

    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-start md:justify-between gap-6 text-sm px-2 py-6 mt-8 border-t'>
            <div className="flex flex-col items-center gap-2">
                <Brand />
                <p className="text-center text-themeNavy text-sm capitalize max-w-[310px]">{homeBannerText1} {homeBannerText2} {homeBannerText3}</p>
            </div>
            <QuickLinks />
            <ReachOut />
            <Copyright />
        </div>
    )
}

export default Footer