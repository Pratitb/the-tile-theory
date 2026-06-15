
interface OurStoryProps {
    head?: string
    content?: string
}

const OurStory = ({ head, content }: OurStoryProps) => {
    return (
        <div className="flex flex-col sm:flex-row text-themeNavy py-10">
            <p className="about_head">{head}</p>
            <p className="tracking-wide border border-themeNavy rounded-lg max-h-[200px] lg:max-h-fit overflow-y-auto p-5">{content}</p>
        </div>
    )
}

export default OurStory