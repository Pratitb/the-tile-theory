import type { BtnVariations, ButtonProps } from "../utils/types"

const Button = ({ trailingIcon, btnName, leadingIcon, variation = 'primary', getActionFn, btnType }: ButtonProps) => {
    const btnStyle: Record<BtnVariations, string> = {
        primary: 'w-fit bg-themeNavy text-sm text-themeGold rounded-full md:text-lg px-3 py-2 md:px-5 md:py-2 capitalize font-semibold tracking-wide cursor-pointer hover:bg-gray-300 hover:text-black',
    }
    return (
        <button type={btnType} className={`${btnStyle[variation]}`} onClick={getActionFn}>
            {trailingIcon && <span>{trailingIcon}</span>}
            {btnName && <span>{btnName}</span>}
            {leadingIcon && <span>{leadingIcon}</span>}
        </button>
    )
}

export default Button