
interface OurStoryProps {
    head?: string
    content?: string
    content2?: string
    content3?: string
}

const OurStory = ({ head, content, content2, content3 }: OurStoryProps) => {
    return (
        <div className="flex flex-col lg:flex-row text-themeNavy py-10">
            <p className="about_head">{head}</p>
            <div className="flex flex-col gap-4 tracking-wide border border-themeNavy rounded-lg max-h-[200px] lg:max-h-fit overflow-y-auto p-5">
                <p className="">{content}</p>
                {content2 && <p className="">{content2}</p>}
                {content3 && <p className="">{content3}</p>}
            </div>
        </div>
    )
}

export default OurStory