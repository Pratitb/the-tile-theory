
interface TextareaProps {
    areaType?: string
    textAreaName: string
}

const Textarea = ({ areaType, textAreaName }: TextareaProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={areaType} className="contact_label">{areaType}</label>
            <textarea name={textAreaName} id={areaType} required className="contact_textarea"></textarea>
        </div>
    )
}

export default Textarea