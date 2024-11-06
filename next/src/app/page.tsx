import { Advantages } from "@/components/modules/advantages/advantages";
import { Banners } from "@/components/modules/banners/banners";
import { Contacts } from "@/components/modules/contacts/contacts";
import { Reviews } from "@/components/modules/reviews/reviews";
import { Socials } from "@/components/modules/socials/socials";
import { ToursSlider } from "@/components/modules/tours/toursSlider";
import { BlockHeader } from "@/components/ui/blockHeader/blockHeader";
import { TextBlock } from "@/components/ui/textBlock/textBlock";
import { GET } from "@/core/api/api";

export default async function Home() {

  const options = await GET<IndexOptionRequest, { [key: string]: string }>("option", { category: ['about', 'core'] });

  const banners = await GET<null, Banner[]>("banner")
  const tours = await GET<IndexTourRequest, Tour[]>("tour", {

  })

  const advantages = await GET<null, Advantage[]>("advantage")

  const socialReviews = await GET<null, Social[]>("social/in_reviews");

  const reviews = await GET<null, Review[]>("review");

  return (
    <main>
      {banners && < Banners banners={banners} />}
      <div className="block">
        <div className="container">
          <BlockHeader header={"РАСПИСАНИЕ ТУРОВ"} button={{ text: "ВСЕ ТУРЫ", link: "/shedule" }} />
        </div>
        <div className="container">
          {tours && <ToursSlider tours={tours} />}
        </div>
      </div>
      <div className="block">
        <div className="container">
          <BlockHeader header={"ГОРЯЩИЕ ТУРЫ"} button={{ text: "ВСЕ ТУРЫ", link: "/hot" }} />
        </div>
        {tours && <ToursSlider tours={tours} itemType={1} />}
      </div>
      <div className="block">
        <div className="container">
          <TextBlock image_url={options?.about_image} imageAlt={options?.core_company_name} text={options?.about_desc} header={options?.about_header} button={{ text: options?.about_button || "", link: "/about" }} />
        </div>
      </div>
      <div className="block" style={{ background: "#F5F7FA", zIndex: 2 }}>
        <div className="container">
          <BlockHeader header={"ПРЕИМУЩЕСТВА DA-DA ТУР"} />
          <Advantages advantages={advantages} />
        </div>
      </div>
      <div className="block">
        <div className="container">
          <BlockHeader header={`Отзывы о нас в интернете говорят сами за себя`} rightNode={<Socials socials={socialReviews} />} />
          {reviews && <Reviews reviews={reviews} />}
        </div>
      </div>
      <div className="block">
        <div className="container">
          <Contacts contacts={[
            {
              label: "Номер телефона:",
              value: "+7 (902) 23-43-12",
              hrefBegin: "tel:"
            },
            {
              label: "Email:",
              value: "example@com",
              hrefBegin: "mailto:"
            },
            {
              label: "Адрес:",
              value: "улица Труда, 156В, Челябинск",
            },
            {
              label: "График работы:",
              value: "Пн - пт, 9:00 - 18:00",
            },
          ]} />
        </div>
      </div>
    </main>
  );
}
