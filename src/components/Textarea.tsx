
interface TextareaProps {
    areaType?: string
}

const Textarea = ({ areaType }: TextareaProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={areaType} className="contact_label">{areaType}</label>
            <textarea name={areaType} id={areaType} className="contact_textarea"></textarea>
        </div>
    )
}

export default Textarea