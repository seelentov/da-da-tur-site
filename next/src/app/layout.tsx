import type { Metadata } from "next";
import "../styles/styles.scss";
import { Inter } from 'next/font/google'
import { Header } from "@/components/modules/header/header";
import { Footer } from "@/components/modules/footer/footer";
import { ModalProvider } from "@/components/providers/modalProvider/modalProvider";

import 'swiper/css';
import { GET } from "@/core/api/api";
import { Contacts } from "@/components/modules/contacts/contacts";
import { YandexMap } from "@/components/modules/map/map";
import { BlockHeader } from "@/components/ui/blockHeader/blockHeader";
import { Reviews } from "@/components/modules/reviews/reviews";
import { Socials } from "@/components/modules/socials/socials";

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "DA-DA Тур",
  description: "Dada-тур - это туроператор с большим опытом. 11 лет на рынке туристических услуг. Более 10000 довольных туристов. Наш номер в официальном реестре туроператоров РТО 025899",
  metadataBase: new URL(process.env.APP_URL || ""),
  openGraph: {
    title: 'DA-DA Тур',
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


export interface IBasePageProps {
  searchParams: {
    city: string
  }
}

export default async function RootLayout(props: {
  children: React.ReactNode;
}) {

  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['contacts', 'map', 'reviews'] });

  const socialReviews = await GET<null, Social[]>("social/in_reviews");

  const reviews = await GET<null, Review[]>("review");

  const socialContacts = await GET<null, Social[]>("social/in_contacts")

  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
        <ModalProvider>
          <Header />
          <div className="wrapper">
            <main>
              {props.children}
              <div className="block" style={{ background: "rgb(251, 251, 251)" }}>
                <div className="container">
                  <BlockHeader header={options?.reviews_header} rightNode={<Socials socials={socialReviews} />} />
                  {reviews && <Reviews reviews={reviews} />}
                </div>
              </div>
              <div className="block">
                <div className="container">
                  <Contacts contacts={[
                    {
                      label: options?.contacts_number_label || "",
                      value: options?.contacts_number || "",
                      hrefBegin: "tel:"
                    },
                    {
                      label: options?.contacts_email_label || "",
                      value: options?.contacts_email || "",
                      hrefBegin: "mailto:"
                    },
                    {
                      label: options?.contacts_address_label || "",
                      value: options?.contacts_address || "",
                    },
                    {
                      label: options?.contacts_work_schedule_label || "",
                      value: options?.contacts_work_schedule || "",
                    },
                  ]}
                    socials={socialContacts || []}
                  />
                </div>
              </div>
              <YandexMap center={[Number(options?.map_pos1) || 55.159902, Number(options?.map_pos2) || 61.402554]} />
            </main>


          </div>
          <Footer />
        </ModalProvider>
      </body>
    </html >
  );
}
