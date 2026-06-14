import Brand from "./brand"
import QuickLinks from "./quickLinks"
import ReachOut from "./reachOut"

const Footer = () => {

    // const currentYear = new Date().getFullYear()
    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-start md:justify-between gap-6 text-sm px-2 py-6 sm:mt-4 border-t'>
            <div className="flex flex-col items-center gap-2">
                <Brand />
                <p className="text-center text-themeNavy text-sm max-w-[310px]"> quisquam ratione debitis alias doloribus non necessitatibus facere error?</p>
            </div>
            <QuickLinks />
            <ReachOut />
            {/* <p className='flex'>{`${currentYear}`} &copy; the tile theory</p> */}
            {/* <p className=''>made with ❤️ in india </p> */}
            {/* <p className=''>developed by <a href="https://pratitcodes.com" target="_blank" className="underline">pratit bangdiwala</a></p> */}
        </div>
    )
}

export default Footer