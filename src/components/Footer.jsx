import Logo from "./Logo";
import React from "react";

const InfoColuna = ({ title, informations }) => {
  return (
    <div>
      <h3 className="text-white font-bold mb-5">{title}</h3>
      <ul className="space-y-1">
        {informations.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-white white-space-nowrap hover:underline text-sm"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const infoData = [
    {
      title: "Informações",
      informations: [
        { text: "Sobre a Drip Store", link: "/about" },
        { text: "Segurança", link: "/security" },
        { text: "Whishlist", link: "/wishlist" },
        { text: "Blog", link: "/blog" },
        { text: "Trabalhe conosco", link: "/work_with_us" },
        { text: "Meus pedidos", link: "/my_orders" },
      ],
    },
    {
      title: "Categorias",
      informations: [
        { text: "Camisetas", link: "/tshirts" },
        { text: "Calças", link: "/pants" },
        { text: "Bonés", link: "/hats" },
        { text: "Headphones", link: "/headphones" },
        { text: "Tênis", link: "/sneakers" },
      ],
    },
    {
      title: "Contato",
      informations: [
        {
          text: `Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161`,
          link: "#",
        },
        { text: "(85) 3051-3411", link: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark-gray basis-auto">
      <div className="flex flex-col md:flex-row justify-between text-white p-12 md:gap-20 lg:gap-70">
        <div className="flex flex-col gap-4 p-8 max-w-full lg:max-w-90">
          <div className="flex items-center md:scale-75 lg:scale-100 lg:pt-7">
            <Logo location="footer" />
          </div>
          <p className="p-1 lg:p-3 text-balance text-sm text-justify lg:-ml-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            eveniet laboriosam magnam dignissimos et itaque tempore, architecto
            nisi iste, enim explicabo aliquid maxime ea illo ad eius laborum
            odit quis.
          </p>
          <div className="flex ml-2 lg:ml-2 mt-6 gap-5 lg:gap-10 rounded-full">
            <img
              src="./src/assets/facebook.svg"
              alt="facebook-icon"
              className="social-icon"
            />
            <img
              src="./src/assets/instagram.svg"
              alt="instagram-icon"
              className="social-icon"
            />
            <img
              src="./src/assets/twitter.svg"
              alt="twitter-icon"
              className="social-icon"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-16 md:mx-4 lg:ml-8">
          {infoData.map((section, idx) => (
            <InfoColuna key={idx} {...section} />
          ))}
        </div>
      </div>

      <hr className="border-t border-white mx-12 md:mx-20" />
      <p className="text-center text-white text-xs p-6">
        &copy; 2024 Digital Store
      </p>
    </footer>
  );
};

export default Footer;
