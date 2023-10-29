import { twMerge } from "tailwind-merge";
interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return (
        // npm i tailwind-merge
        // tailwind merge is a way to enable the parent file that calling the component to be able to pass classNames to the classess present in the children components' elements, by overriding them ig?
        // we pass these classNames in the function "twMerge" which is reponsible for this overriding

        <div
            className={twMerge(`
                bg-neutral-900
                rounded-lg
                h-fit
                w-full
            `,
                className
            )}
        >
            {children}
        </div>
     );
}
 
export default Box;