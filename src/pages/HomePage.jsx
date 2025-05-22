import { href } from "react-router-dom";
import CardDestaque from "../components/CardDestaque";
import IconDestaque from "../components/IconDestaque";
import Section from "../components/Section";

const HomePage = () => {
  const arrayDestaque = [
    {
      title: "30% off",
      imagePath: "/collection-1.png",
    },
    {
      title: "30% off",
      imagePath: "/collection-2.png",
    },
    {
      title: "30% off",
      imagePath: "/collection-3.png",
    },
  ];

  const arrayIconDestaque = [
    {
      title: "Camisas",
      img: "/t-shirt.svg"
    },
    {
      title: "Calças",
      img: "/pants.svg"
    },
    {
      title: "Bonés",
      img: "/hat.svg"
    },
    {
      title: "Headphones",
      img: "/headphone.svg"
    }
  ];

  return (
    <>
      <main className="bg-light-gray-3">

        <Section>
          <div className="h-100 w-full px-4 md:px-6">
            <div className="ml-13 text-zinc-700 text-2xl font-bold font-['Inter'] leading-9 tracking-wide">
            Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-x-auto md:overflow-visible justify-center">
              {arrayDestaque.map((item, index) => (
                <CardDestaque key={index} {...item} className="w-full md:w-64 flex-shrink-0" />
              ))}
            </div>
          </div>
        </Section>

        <Section className="w-full">
          <div className="h-50 flex flex-col items-center w-full md:px-9">
            <div className="flex justify-center text-zinc-700 text-2xl font-bold font-['Inter'] leading-9 tracking-wide mb-6">
              Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto md:overflow-visible px-4">
              {arrayIconDestaque.map((item, idx) => (
                <IconDestaque key={idx} {...item} />
              ))}
            </div>
          </div>
        </Section>
        
      </main>
    </>
  );
};

export default HomePage;
