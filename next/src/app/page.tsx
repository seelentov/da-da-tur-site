import { Advantages } from "@/components/modules/advantages/advantages";
import { Banners } from "@/components/modules/banners/banners";
import { ToursSlider } from "@/components/modules/tours/toursSlider";
import { BlockHeader } from "@/components/ui/blockHeader/blockHeader";
import { TextBlock } from "@/components/ui/textBlock/textBlock";
import { GET } from "@/core/api/api";
import { IBasePageProps } from "./layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DA-DA Тур",
  description: "Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899",
  metadataBase: new URL(process.env.APP_URL || "https://vsegda-dada.ru"),
  openGraph: {
    title: 'DA-DA Тур',
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

export default async function HomePage({ searchParams }: IBasePageProps) {

  const tours = await GET<IndexTourRequest, Tour[]>("tour", {
    city: searchParams.city
  })

  const banners = await GET<null, Banner[]>("banner")

  const advantages = await GET<null, Advantage[]>("advantage")

  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['about', 'core', 'advantages', 'reviews', 'schedule', "last_minute_deal", "discount"] });

  return (
    <div>
      {banners && < Banners banners={banners} />}
      <div className="block">
        <div className="container">
          <BlockHeader header={options?.schedule_header} button={{ text: options?.schedule_button || "", link: "/tours" }} />
        </div>
        <div className="container">
          {tours && <ToursSlider tours={tours.filter(t => t.popular)} />}
        </div>
      </div>
      <div className="block" style={{ background: "rgb(251, 251, 251)" }}>
        <div className="container">
          <BlockHeader header={options?.last_minute_deal_header} button={{ text: options?.last_minute_deal_button || "", link: "/hot" }} />
        </div>
        {tours && <ToursSlider tours={tours.filter(t => t.last_minute_deal)} itemType={1} />}
      </div>
      <div className="block">
        <div className="container">
          <TextBlock image_url={options?.discount_image} imageAlt={options?.core_company_name} text={options?.discount_desc} header={options?.discount_header} button={{ text: options?.discount_button || "", link: "https://mrqz.me/67c864abefe05f001926b2fb" }} blank />
        </div>
      </div>
      <div className="block">
        <div className="container">
          <TextBlock image_url={options?.about_image} imageAlt={options?.core_company_name} text={options?.about_desc} header={options?.about_header} button={{ text: options?.about_button || "", link: "/about" }} imagePos="right" />
        </div>
      </div>
      <div className="block" style={{ background: "#F5F7FA", zIndex: 2 }}>
        <div className="container">
          <BlockHeader header={options?.advantages_header} />
          <Advantages advantages={advantages} />
        </div>
      </div>
    </div>
  );
}
