import { IBasePageProps } from "./layout";
import styles from './pages.module.scss'
import { Loading } from "@/components/ui/loading/loading";

export default async function LoadingPage({ }: IBasePageProps) {

    return (
        <div className={`${styles.main} text`}>
            <Loading />
        </div>
    );
}
