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
        <div>
            {children}
        </div>
     );
}
 
export default Box;