import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef <HTMLButtonElement, ButtonProps> (({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, refs) => {
    return (
        <button
            type = {type},
            className = {twMerge(`
                w-full
                rounded-full
                
            `)}
        >

        </button>
    )
})

Button.displayName = "Button";

export default Button