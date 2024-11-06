'use client'

import { useState } from 'react'
import { CitySelect } from '../../citySelect/citySelect'
import { Menu } from '../../menu/menu'
import { Search } from '../../search/search'
import styles from './mobileNav.module.scss'
import Hamburger from 'hamburger-react'
import { IMenuProps } from '../nav'

export function MobileNav({ cities, header_search_placeholder, header_city_logo, menuItems }: IMenuProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Check if the click originated from within the nav element
        if (event.target === event.currentTarget) {
            setIsOpen(false);
        }
    };

    return (
        <div className={styles.main}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} color='#E13A8D' />
            <div className={`${styles.wrapper} ${isOpen ? styles.isOpen : ""}`} onClick={handleWrapperClick}>
                <div className={`${styles.menu} ${isOpen ? styles.isOpenMenu : ""}`}>
                    {cities && <CitySelect cities={cities} iconUrl={header_city_logo} />}
                    <Search placeholder={header_search_placeholder} />
                    <div onClick={() => setIsOpen(false)} className={styles.menuWrapper}>
                        <Menu items={menuItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}
