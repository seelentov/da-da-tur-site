import { ToursList } from "@/components/modules/tours/toursList";
import { GET } from "@/core/api/api";
import { IBasePageProps } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Горящие туры | DA-DA Тур",
  description: "Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899",
  metadataBase: new URL(process.env.APP_URL || "https://vsegda-dada.ru"),
  openGraph: {
    title: 'Горящие туры | DA-DA Тур',
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

export default async function HotPage({ searchParams }: IBasePageProps) {

  const tours = await GET<IndexTourRequest, Tour[]>("tour", {
    city: searchParams.city,
    last_minute_deal: 1
  })
  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['last_minute_deal_page'] });

  return (
    <div>
      <div className="block">
        <div className="container text">
          <h1>{options?.last_minute_deal_page_header}</h1>
          {tours && <ToursList tours={tours} itemType={1} />}
        </div>
      </div>
    </div>
  );
}
