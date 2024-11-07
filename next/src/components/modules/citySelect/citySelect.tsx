'use client'

import { Option, Select } from '@/components/ui/select/select';
import { useMemo, useState } from 'react';
import styles from './citySelect.module.scss'
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { parseImageLink } from '@/core/utils/image/parseImageLink';
interface ICitySelect {
    cities: City[],
    iconUrl?: string
}

export function CitySelect({ cities, iconUrl }: ICitySelect) {

    const options = useMemo(() => cities.map(el => { return { value: el.slug, label: el.name } }), [cities])

    const searchParams = useSearchParams()

    const defaultOption = useMemo(() => options.find(el => el.value === searchParams.get('city')), [searchParams, options])

    const [selected, setSelected] = useState<Option>(defaultOption || options[0])

    function handleSelect(option: Option) {
        setSelected(option)
    }

    return (
        <div className={styles.main}>
            {iconUrl && <Image
                src={parseImageLink(iconUrl)}
                alt={selected?.value || ""}
                className={styles.logo}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: 'auto' }} />}
            <Select options={options} selectedValue={selected} onChange={(value) => handleSelect(value)} />
        </div>

    )
}