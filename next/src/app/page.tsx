import { GET } from "@/core/api/api";
import styles from "./page.module.css";



export default async function Home() {


  const data = await GET<null, Tour[]>("tour");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {data && JSON.stringify(data[0].start_date)}
      </main>
    </div>
  );
}
