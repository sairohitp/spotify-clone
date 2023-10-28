// For example, a Client Component with usePathname will be rendered into HTML on the initial page load.
// When navigating to a new route, this component does not need to be re-fetched.
// Instead, the component is downloaded once (in the client JavaScript bundle), and re-renders based on the current state.

"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react"

// importing react icons

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

// Components in the same folder use the standard pathname
import Box from "./Box";
interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = (
    {children
    }) => {

    // usePathname is a Client Component hook that lets you read the current URL's pathname.
    // usePathname intentionally requires using a Client Component. 
    // It's important to note Client Components are not a de-optimization.

    const pathname = usePathname();

    // array of possible routes in our application
    
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== "/search",
            href: "/"
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === "/search",
            href: "/search"
        }
    ], [pathname]);

    return(
        <div className="flex h-full">
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                "
            >
                <Box>
                    Sidebar Navigation
                </Box>
            </div>
        </div>
    )
}

export default Sidebar