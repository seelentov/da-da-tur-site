import { getMonthName } from '@/core/utils/date/getMonthName';
import styles from './schedule.module.scss'
import Link from 'next/link';

interface IScheduleProps {
    tours: Tour[]
}

export function Schedule({ tours }: IScheduleProps) {

    const categorizedTours: { [key: number]: { [key: number]: Tour[] } } = {};



    tours.forEach(tour => {
        const category = tour.category_id;
        const month = new Date(tour.start_date).getMonth() + 1;

        if (!categorizedTours[category]) {
            categorizedTours[category] = {};
        }

        if (!categorizedTours[category][month]) {
            categorizedTours[category][month] = [];
        }

        categorizedTours[category][month].push(tour);
    });

    const allMonts = Array.from(new Set(Object.keys(categorizedTours[1]).concat(Object.keys(categorizedTours[2])))).sort().map(el => Number(el))

    return (
        <div className={styles.main}>
            <div className={`text ${styles.part}`}>
                <h2>Автобусные туры</h2>
                <h2>Авиа - туры</h2>
            </div>
            {allMonts.map(month =>
                <div key={month} className={styles.monthPart}>
                    <div className={`text ${styles.part}`}>
                        <h3>{getMonthName(month)}</h3>
                        <h3>{getMonthName(month)}</h3>
                    </div>
                    <div className={`text ${styles.part}`}>
                        <ul>
                            {categorizedTours[1].hasOwnProperty(month) && categorizedTours[1][month].map(tour => <li key={tour.id}><Link href={"/tours/" + tour.slug}>{tour.name}</Link></li>)}
                        </ul>
                        <ul>
                            {categorizedTours[2].hasOwnProperty(month) && categorizedTours[2][month].map(tour => <li key={tour.id}><Link href={"/tours/" + tour.slug}>{tour.name}</Link></li>)}
                        </ul>
                    </div>
                </div>
            )}

        </div>
    )
}