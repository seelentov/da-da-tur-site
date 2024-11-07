import { Button } from "@/components/ui/button/button";
import { IBasePageProps } from "./layout";
import Link from "next/link";
import styles from './pages.module.scss'

export default async function NotFoundPage({ }: IBasePageProps) {

    return (
        <div className={`${styles.main} text`}>
            <h1>404</h1>
            <p>СТРАНИЦА НЕ НАЙДЕНА</p>
            <Link href={"/"}><Button>НА ГЛАВНУЮ</Button></Link>
        </div>
    );
}
