
import { href } from "react-router-dom";
import CardDestaque from "../components/CardDestaque";
import IconDestaque from "../components/IconDestaque";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

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

  const title = "Melhores ofertas personalizadas";
  const titleAlign = "left";
  const link = {
    text: "Queima de estoque da Nike🔥",
    href: "www.google.com"
  };

  const products = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 2,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 3,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 4,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 5,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 6,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 7,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 8,
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
  ]

  return (
    <>
      <main className="bg-main">
        <Section>
          <div className="w-full h-[681px] bg-light-gray-3 flex items-center justify-between px-24">
            <div className="max-w-[600px] flex flex-col gap-6">
              <div className={`text-amber-500 text-base font-bold font-['Inter'] leading-normal tracking-wide
                ${titleAlign === 'center' ? 'justify-start': 'justify-between'}`}>
                {title}
              </div>
              <h1 className="text-dark-gray text-6xl font-extrabold leading-[66px] tracking-wide">
                {link && (
                  <a href={link.href}>{link.text}</a>)}
              </h1>
              <div className="w-[495px] justify-start text-zinc-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">
                Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
              </div>

              <button className="primary-button text-neutral-100 font-bold text-base tracking-wide">
                Ver ofertas
              </button>
            </div>
          </div>
        </Section>
        {/* PRIMEIRA SECTION DPOIS DO CARROSEL*/}
        <Section>
          <div className="h-100 w-full px-4 md:px-0">
            <div className="ml-20 text-zinc-700 text-2xl font-bold font-['Inter'] leading-9 tracking-wide">
            Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-x-auto md:overflow-visible justify-center">
              {arrayDestaque.map((item, index) => (
                <CardDestaque key={index} {...item} className="w-full md:w-64 flex-shrink-0" />
              ))}
            </div>
          </div>
        </Section>

        {/*SEGUNDA SECTION DEPOIS DA PRIMEIRA*/}
        <Section className="w-full">
        <div className="w-full">
          <div className="h-50 flex flex-col items-center w-full md:px-9">
            <div className="flex justify-center textdark-gray-2 text-2xl font-bold font-['Inter'] leading-9 tracking-wide mb-6">
              Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto md:overflow-visible px-4">
              {arrayIconDestaque.map((item, idx) => (
                <IconDestaque key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
        </Section>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              priceDiscount={product.priceDiscount}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
