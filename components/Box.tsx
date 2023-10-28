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