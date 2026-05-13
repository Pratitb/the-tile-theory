
const Footer = () => {

    const currentYear = new Date().getFullYear()
    return (
        <div className='p-2 capitalize flex flex-col items-center gap-1 md:flex-row md:justify-between md:mt-10 md:border-t'>
            <p className='flex'>{`${currentYear}`} &copy; the tile theory</p>
            <p className=''>made with ❤️ in australia </p>
            <p className=''>developed by <a href="https://pratitcodes.com" target="_blank" className="underline">pratit bangdiwala</a></p>
        </div>
    )
}

export default Footer