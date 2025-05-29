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
      img: "/t-shirt.svg",
    },
    {
      title: "Calças",
      img: "/pants.svg",
    },
    {
      title: "Bonés",
      img: "/hat.svg",
    },
    {
      title: "Headphones",
      img: "/headphone.svg",
    },
  ];

  const title = "Melhores ofertas personalizadas";
  const titleAlign = "left";
  const link = {
    text: "Queima de estoque da Nike🔥",
    href: "www.google.com",
  };

  const products = [
    {
      id: 1,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 2,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 3,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 4,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 5,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 6,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 7,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 8,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: "$200",
      priceDiscount: "$100",
      image: "/k-swiss-v8-masc.png",
    },
  ];

  return (
    <>
      <main className="bg-main">
        <Section>
          <div className="w-full h-[681px] bg-light-gray-3 flex items-center justify-between px-24">
            <div className="max-w-[600px] flex flex-col gap-6">
              <div
                className={`text-amber-500 text-base font-bold font-['Inter'] leading-normal tracking-wide
                ${
                  titleAlign === "center" ? "justify-start" : "justify-between"
                }`}
              >
                {title}
              </div>
              <h1 className="text-dark-gray text-6xl font-extrabold leading-[66px] tracking-wide">
                {link && <a href={link.href}>{link.text}</a>}
              </h1>
              <div className="w-[495px] justify-start text-zinc-700 text-lg font-normal font-['Inter'] leading-loose tracking-wide">
                Consequat culpa exercitation mollit nisi excepteur do do tempor
                laboris eiusmod irure consectetur.
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
            <div className="lex justify-center text-dark-gray-2 text-2xl font-bold font-['Inter'] leading-9 tracking-wide mb-6">
              Coleções em destaque
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 overflow-x-auto md:overflow-visible justify-center">
              {arrayDestaque.map((item, index) => (
                <CardDestaque
                  key={index}
                  {...item}
                  className="w-full md:w-64 flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </Section>

        {/*SEGUNDA SECTION DEPOIS DA PRIMEIRA*/}
        <Section className="w-full">
          <div className="w-full">
            <div className="h-50 flex flex-col items-center w-full md:px-9">
              <div className="flex justify-center text-dark-gray-2 text-2xl font-bold font-['Inter'] leading-9 tracking-wide mb-6">
                Coleções em destaque
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 overflow-x-auto md:overflow-visible object-contain px-4">
                {arrayIconDestaque.map((item, idx) => (
                  <IconDestaque key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto w-4/5">
            <div className="w-[88%] ml-20 mb-6 items-center">
              <div className="flex justify-between items-center">
                <h5 className="text-dark-gray-2 text-2xl font-bold">Produtos em alta</h5>
                <a className="text-sm text-primary cursor-pointer font-normal flex items-center gap-1">
                  Ver todos <img src="./src/assets/Right-24px.svg" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  category={product.category}
                  name={product.name}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                  showDiscount={index < 2}
                />
              ))}
            </div>
          </div>
        </Section>

        <div className="w-full max-w-[1440px] h-[553px] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10 md:h-[553px] mx-auto">
          {/* ESQUERDA - imagem com o fundo circular */}
          <div className="relative w-full flex justify-center md:justify-start z-10">
            <div className="w-[300px] h-[300px] md:w-[466px] md:h-[466px] bg-gradient-to-b from-violet-700/25 to-white/0 rounded-full absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-0" />
            <img
              className="w-[250px] h-auto md:w-[573px] md:h-80 relative z-10"
              src="/air-jordan-1.PNG"
              alt="Air Jordan"
            />
          </div>

          {/* DIREITA - textos e botão */}
          <div className="flex flex-col gap-4 max-w-[589px] text-center md:text-left z-20">
            <h6 className="text-pink-600 text-sm font-bold font-['Inter'] leading-snug tracking-wide">
              Oferta especial
            </h6>
            <h1 className="text-zinc-700 text-3xl md:text-5xl font-bold font-['Inter'] leading-tight md:leading-[50px] tracking-wide">
              Air Jordan edição de <br className="hidden md:block" /> colecionador
            </h1>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <button className="primary-button w-fit mx-auto md:mx-0 mt-2">Ver Oferta</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
