import type { BtnVariations, ButtonProps } from "../utils/types"

const Button = ({ trailingIcon, btnName, leadingIcon, variation = 'primary' }: ButtonProps) => {
    const btnStyle: Record<BtnVariations, string> = {
        primary: 'w-fit bg-buttonBg border border-black rounded-lg text-white md:text-lg px-4 py-[10px] md:px-8 md:py-[14px] capitalize font-semibold tracking-wide cursor-pointer hover:bg-transparent hover:text-black',
    }
    return (
        <div className={`${btnStyle[variation]}`}>
            {trailingIcon && <span>{trailingIcon}</span>}
            {btnName && <span>{btnName}</span>}
            {leadingIcon && <span>{leadingIcon}</span>}
        </div>
    )
}

export default Button