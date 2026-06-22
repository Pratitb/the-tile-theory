
interface InputProps {
    inpId?: string,
    getLabel?: string
    inpType?: string,
    inpName?: string,
    getPlaceHolder?: string,
    toggleAutoComp?: string
}

const Input = ({ inpId, getLabel, inpType, inpName, getPlaceHolder, toggleAutoComp }: InputProps) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={inpId} className="contact_label">{getLabel}</label>
            <input type={inpType} name={inpName} id={inpId} placeholder={getPlaceHolder} autoComplete={toggleAutoComp} required className="contact_input" />
        </div>
    )
}

export default Input