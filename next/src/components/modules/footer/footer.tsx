import { InputForm } from '@/components/ui/inputForm/inputForm'
import styles from './footer.module.scss'
import Image from 'next/image'
import { Socials } from '../socials/socials'
import { GET } from '@/core/api/api'
import Link from 'next/link'

export async function Footer() {

    const socials = await GET<null, Social[]>("social/in_footer")
    const menu = await GET<null, Menu[]>("menu")

    return (
        <div className={styles.main}>
            <div className={`${styles.container} container`}>
                <div className={styles.part}>
                    <Image
                        src={'/storage/seed/logo_white.svg'}
                        alt={"Submit"}
                        className={styles.logo}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                    <p>Copyright © 2024 Da-Da tur.</p>
                    <p>All rights reserved</p>
                    <div className={styles.socials}>
                        <Socials socials={socials} />
                    </div>
                </div>
                <div className={styles.part}>

                </div>
                <div className={styles.part}>
                    <ul>
                        {menu && menu.map(el => <li key={el.id}><Link href={el.link}>{el.name}</Link></li>)}
                    </ul>
                </div>
                <div className={styles.part}>
                    <p>
                        Будьте в курсе нового
                    </p>
                    <InputForm placeholder='Ваш e-mail' />
                </div>
            </div>
        </div>
    )
}