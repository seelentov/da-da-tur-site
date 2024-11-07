import { GET } from "@/core/api/api";
import { IBasePageProps } from "@/app/layout";
import { notFound } from "next/navigation";
import styles from './page.module.scss'
import { convertDBDateToString } from "@/core/utils/date/convertDBDateToString";
import Image from "next/image";
import { parseImageLink } from "@/core/utils/image/parseImageLink";
import { OpenModalBtn } from "@/components/modules/openModalBtn/openModalBtn";
import { Metadata } from "next";
import { stripHTML } from "@/core/utils/html/stripHTML";

export async function generateMetadata(
  { params }: ITourPageProps
): Promise<Metadata> {

  const tour = await GET<null, Tour>(`tour/${params.tour}`)

  if (!tour) {
    notFound();
  }

  return {
    title: `${tour.name} | DA-DA Тур`,
    description: stripHTML(tour.description || ""),
    openGraph: {
      title: `${tour.name} | DA-DA Тур`,
      description: stripHTML(tour.description || ""),
      url: process.env.APP_URL || "",
      siteName: 'DA-DA Тур',
      images: [
        {
          url: '/favicon.png',
          width: 500,
          height: 500,
        },
      ],
      locale: 'ru',
      type: 'website',
    },
  }
}


interface ITourPageProps extends IBasePageProps {
  params: {
    tour: string
  }
}

export default async function TourPage({ params }: ITourPageProps) {

  const tour = await GET<null, Tour>(`tour/${params.tour}`)

  if (!tour) {
    notFound();
  }

  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['tour_page'] });

  const discount = tour.old_price ? Math.ceil((tour.old_price - tour.price) / tour["old_price"] * 100) : null;

  return (
    <div>
      <div className="block">
        <div className="container text">
          <h1>{tour.name}</h1>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <div className={styles.stats}>
                <p className={`${styles.price} ${styles.line}`}><strong>{options?.tour_page_price} </strong> <span>{tour.price}</span> ₽ {tour.old_price && <span><span>{tour.old_price} ₽</span> <span> -{discount}% </span></span>}</p>
                <p className={styles.line}><strong>{options?.tour_page_date} </strong> <span>{convertDBDateToString(tour.start_date)}</span> - <span>{convertDBDateToString(tour.end_date)}</span></p>
              </div>
              {tour.description &&
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: tour.description }}></div>}
            </div>
            <div className={styles.headerImage}>
              <Image
                src={parseImageLink(tour.image_url || "")}
                alt={tour.name}
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
              />
              <OpenModalBtn style={{ width: '100%' }} header={"Забронировать тур"} defaultTheme={tour.name}>Забронировать</OpenModalBtn>
            </div>
          </div>
        </div>
      </div>
      {tour.text &&
        <div className="block">
          <div className="container">

            <div className="text">
              <h2>
                {options?.tour_page_desc}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: tour.text }}></div>
            </div>
          </div>
        </div>}
    </div>
  );
}
