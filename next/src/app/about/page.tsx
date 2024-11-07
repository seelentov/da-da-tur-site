import { GET } from "@/core/api/api";
import { IBasePageProps } from "../layout";
import { TextBlock } from "@/components/ui/textBlock/textBlock";
import { Metadata } from "next";
import { BlockHeader } from "@/components/ui/blockHeader/blockHeader";
import { Advantages } from "@/components/modules/advantages/advantages";

export const metadata: Metadata = {
  title: "О компании | DA-DA Тур",
  description: "Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899",
  metadataBase: new URL(process.env.APP_URL || ""),
  openGraph: {
    title: 'О компании | DA-DA Тур',
    description: 'Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899',
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function AboutPage({ }: IBasePageProps) {


  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['about', 'core', 'contacts', 'map'] });

  const advantages = await GET<null, Advantage[]>("advantage")


  return (
    <div style={{ marginTop: 20 }}>
      <div className="block">
        <div className="container">
          <TextBlock image_url={options?.about_image} imageAlt={options?.core_company_name} text={options?.about_desc} header={options?.about_header} />
        </div>
      </div>
      <div className="block" style={{ background: "#F5F7FA", zIndex: 2 }}>
        <div className="container">
          <TextBlock image_url={options?.about_image2} imageAlt={options?.core_company_name} text={options?.about_desc2} header={options?.about_header2} imagePos="right" />
        </div>
      </div>
      <div className="block" style={{ zIndex: 4 }}>
        <div className="container">
          <BlockHeader header={options?.advantages_header} />
          <Advantages advantages={advantages} />
        </div>
      </div>
    </div>
  );
}
