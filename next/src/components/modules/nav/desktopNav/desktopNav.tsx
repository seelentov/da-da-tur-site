import { Search } from '@/components/modules/search/search';
import { Menu } from '@/components/modules/menu/menu';
import { CitySelect } from '@/components/modules/citySelect/citySelect';
import styles from './desktopNav.module.scss'
import { IMenuProps } from '../nav';



export function DesktopNav({ cities, header_search_placeholder, header_city_logo, menuItems }: IMenuProps) {

    return (
        <div className={styles.main}>
            <div className={styles.search}>
                <Search placeholder={header_search_placeholder} />
            </div>
            <div className={styles.menu}>
                <Menu items={menuItems} />
            </div>
            <div className={styles.cities}>
                {cities && <CitySelect cities={cities} iconUrl={header_city_logo} />}
            </div>
        </div>
    )
}