import { useRouter } from "next/router";

interface HeaderProps {
    children: React.ReactNode
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default Header;