import { GET } from "@/core/api/api";
import { IBasePageProps } from "../layout";
import { Schedule } from "@/components/modules/schedule/schedule";
import { Metadata } from "next";
import { OpenModalBtn } from "@/components/modules/openModalBtn/openModalBtn";

export const metadata: Metadata = {
  title: "Расписание туров | DA-DA Тур",
  description: "Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899",
  metadataBase: new URL(process.env.APP_URL || "https://vsegda-dada.ru"),
  openGraph: {
    title: 'Расписание туров | DA-DA Тур',
    description: 'Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899',
    url: process.env.APP_URL || "https://vsegda-dada.ru",
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function ToursPage({ searchParams }: IBasePageProps) {

  const tours = await GET<IndexTourRequest, Tour[]>("tour", {
    city: searchParams.city
  })

  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['schedule_page'] });

  return (
    <div>
      <div className="block">
        <div className="container text">
          <h1>{options?.schedule_page_header}</h1>
          {tours && <Schedule tours={tours} />}
        </div>
      </div>
      <div className="container text" style={{ display: 'flex', justifyContent: 'center' }}>
        <OpenModalBtn header={"Забронировать тур"}>Забронировать без предоплаты</OpenModalBtn>
      </div>
    </div>
  );
}
