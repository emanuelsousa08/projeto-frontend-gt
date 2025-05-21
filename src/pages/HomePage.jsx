import { href } from "react-router-dom";
import ProductCard from "../components/ProductCard";
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

  return (
    <>
      <main>
        <Section>
          <div className="h-100 w-full px-4 md:px-0">
            <div className="justify-start text-zinc-700 text-2xl font-bold font-['Inter'] leading-9 tracking-wide">
            Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-x-auto md:overflow-visible">
              {arrayDestaque.map((item, index) => (
                <ProductCard key={index} {...item} className="w-full md:w-64 flex-shrink-0" />
              ))}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default HomePage;
