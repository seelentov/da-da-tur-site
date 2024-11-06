'use client'

import { Option, Select } from '@/components/ui/select/select';
import { useMemo, useState } from 'react';
import styles from './citySelect.module.scss'
import Image from 'next/image';
interface ICitySelect {
    cities: City[],
    iconUrl?: string
}

export function CitySelect({ cities, iconUrl }: ICitySelect) {

    const options = useMemo(() => cities.map(el => { return { value: el.slug, label: el.name } }), [cities])

    const [selected, setSelected] = useState<Option | null>(options[0])

    return (
        <div className={styles.main}>
            {iconUrl && <Image
                src={iconUrl}
                alt={selected?.value || ""}
                className={styles.logo}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }} />}
            <Select options={options} selectedValue={selected} onChange={(value) => setSelected(value)} />
        </div>

    )
}