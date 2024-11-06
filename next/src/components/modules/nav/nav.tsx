import { DesktopNav } from "./desktopNav/desktopNav"
import { MobileNav } from "./mobileNav/mobileNav"

export interface IMenuProps {
    cities?: City[] | null
    header_search_placeholder?: string
    header_city_logo?: string
    menuItems?: Menu[] | null
}

export async function Nav(props: IMenuProps) {

    return (
        <>
            <DesktopNav {...props} />
            <MobileNav {...props} />
        </>
    )
}