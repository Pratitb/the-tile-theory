import type { BtnVariations, ButtonProps } from "../utils/types"

const Button = ({ trailingIcon, btnName, leadingIcon, variation = 'primary', getActionFn }: ButtonProps) => {
    const btnStyle: Record<BtnVariations, string> = {
        primary: 'w-fit bg-buttonBg border-2 border-black rounded-full text-white md:text-lg px-4 py-2 md:px-8 md:py-2 capitalize font-semibold tracking-wide cursor-pointer hover:bg-gray-300 hover:text-black',
    }
    return (
        <div className={`${btnStyle[variation]}`} onClick={getActionFn}>
            {trailingIcon && <span>{trailingIcon}</span>}
            {btnName && <span>{btnName}</span>}
            {leadingIcon && <span>{leadingIcon}</span>}
        </div>
    )
}

export default Button