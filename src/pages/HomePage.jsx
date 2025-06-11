import { href, Link } from "react-router-dom";
import CardDestaque from "../components/CardDestaque";
import IconDestaque from "../components/IconDestaque";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

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


const slidesData = [
  {
    label: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    text: "Adquira já um de nossos modelos e exale estilo!",
    image: "/white-red-nike.png",
    buttonText: "Ver Ofertas",
    backgroundColor: "bg-slide-1",
    labelColor: "text-warning",
    titleColor: "text-dark-gray",
    textColor: "text-dark-gray-2",
    highlight: true,
    onButtonClick: () => console.log("Ver ofertas Nike")
  },
  {
    label: "Novidades em sneakers",
    title: "Nike Air Jordan 2",
    text: "O clássico que nunca sai de moda, agora com novas cores.",
    image: "/ai-jordan-2.png",
    buttonText: "Ver Mais",
    backgroundColor: "bg-slide-2",
    labelColor: "text-error",
    titleColor: "text-dark-gray",
    textColor: "text-dark-gray-2",
    onButtonClick: () => console.log("Ação ver mais")
  },
  {
    label: "Lançamento exclusivo",
    title: "Nike Air Force 1 Classic",
    text: "O tênis mais icônico da Nike em sua versão clássica.",
    image: "/nike-air-force.png",
    buttonText: "Explorar",
    backgroundColor: "bg-slide-3",
    labelColor: "text-primary",
    titleColor: "text-dark-gray",
    textColor: "text-dark-gray-2",
    highlight: true,
    onButtonClick: () => console.log("Explorar Air Force")
  }
];

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
           <Carousel 
              width="w-full"
              height="681" 
              radius="0px"
              slides={slidesData}
              className=""
            />
        </Section>
        {/* PRIMEIRA SECTION DPOIS DO CARROSEL*/}
        <Section>
          <div className="w-full px-4 md:px-0">
            <h4 className="flex text-dark-gray-2 text-2xl font-bold font-['Inter'] leading-9 tracking-wide lg:ml-20 mt-24 mb-6">
              Coleções em destaque
            </h4>
            <div className="flex flex-col md:flex-row gap-6 overflow-x-auto md:overflow-visible items-center justify-center">
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
        <Section>
          <div className="w-full">
            <div className="flex flex-col items-center w-full py-8 md:px-9">
              <div className="flex justify-center text-dark-gray-2 text-2xl font-bold font-['Inter'] leading-9 tracking-wide mt-4 mb-6">
                Coleções em destaque
              </div>
              <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible">
                  <IconDestaque />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto w-3/4">
            <div className="my-8 mx-20 lg:my-8 justify-center items-center">
              <div className="flex justify-between items-center">
                <h5 className="text-dark-gray-2 text-2xl font-bold">Produtos em alta</h5>
                <Link to={'/products'} className="text-sm text-primary cursor-pointer font-normal flex items-center gap-1">
                  Ver todos <img src="./src/assets/Right-24px.svg" />
                </Link>
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

        <div className="w-full max-w-[1440px] h-[553px] bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-6 md:h-[553px] mx-auto my-20">
          {/* ESQUERDA - imagem com o fundo circular */}
          <div className="relative w-full flex justify-center md:justify-start z-10">
            <div className="w-[300px] h-[300px] md:w-[466px] md:h-[466px] bg-gradient-to-b from-violet-700/25 to-white/0 rounded-full absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-0" />
            <img
              className="w-[250px] h-auto md:w-[480px] md:h-90 object-contain relative z-10"
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
            <button className="primary-button w-full lg:w-fit mx-auto md:mx-0 mt-2">Ver Oferta</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
