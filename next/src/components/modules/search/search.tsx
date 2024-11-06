'use client'


import { Input } from "@/components/ui/input/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './search.module.scss'
import { GET } from "@/core/api/api";
import { Loading } from "@/components/ui/loading/loading";
import Link from "next/link";
import { useDebounce } from "@/core/hooks/useDebounce";


interface ISearchProps {
    placeholder?: string
}

export function Search({ placeholder }: ISearchProps) {

    const [input, setInput] = useState<string>("")
    const [searchElems, setSearchElems] = useState<Tour[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const debouncedInput = useDebounce(input, 500);

    useEffect(() => {
        if (debouncedInput !== "") {
            updateList(debouncedInput)
        }
    }, [debouncedInput]);

    async function updateList(value: string) {
        setIsLoading(true)

        const tours = await GET<IndexTourRequest, Tour[]>("tour", {
            name: value,
            text: value
        })

        setIsLoading(false)

        if (tours) {
            setSearchElems(tours)
        }
    }

    return (
        <div className={styles.main}>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
            {input !== "" &&
                <div className={styles.list}>
                    {isLoading ? <Loading min /> : searchElems.length > 0 ? searchElems.map(el =>
                        <Link key={el.id} className={styles.item} href={el.slug}>
                            <h3>
                                {el.name}
                            </h3>
                            <Image
                                src={el.image_url || ""}
                                alt={el.name}
                                className={styles.itemImage}
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        </Link>) : <p>Ничего не найдено</p>}
                </div>}
        </div>
    )
}