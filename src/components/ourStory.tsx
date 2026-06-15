
interface OurStoryProps {
    head?: string
    content?: string
}

const OurStory = ({ head, content }: OurStoryProps) => {
    return (
        <div className="flex flex-col sm:flex-row text-themeNavy py-10">
            <p className="about_head">{head}</p>
            <p className="">{content}</p>
        </div>
    )
}

export default OurStory