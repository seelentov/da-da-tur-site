import Image from 'next/image'
import styles from './header.module.scss'
import { GET } from '@/core/api/api';
import Link from 'next/link';
import { Nav } from '../nav/nav';

export async function Header() {

    const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['header'] });

    const cities = await GET<null, City[]>("city")

    const menu = await GET<null, Menu[]>("menu")

    return (
        <header className={styles.main}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <Image
                        src={options?.header_logo || ""}
                        alt={options?.core_company_name || ""}
                        className={styles.logo}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', height: 'auto' }} />
                </Link>
                <Nav cities={cities} header_city_logo={options?.header_city_logo} header_search_placeholder={options?.header_search_placeholder} menuItems={menu} />
            </div>
        </header>
    )
}