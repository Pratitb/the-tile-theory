
const Brand = () => {

    return (
        <div className="w-fit flex justify-between items-center gap-3 rounded-full">
            {/* border-2 border-themeGold */}
            <img src="logo-2.png" alt="the-tile-theory-logo" className="rounded-lg max-w-8" />
            {/* <span className="w-1 h-6 bg-themeGold"></span> */}
            <p className='capitalize text-xl xl:text-2xl text-themeNavy font-bold'>the tile theory</p>
        </div>
    )
}

export default Brand