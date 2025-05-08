import Logo from "./Logo";
import React from "react";

const InfoColuna = ({ title, informations }) => {
    return(
    <div>
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <ul className="space-y-1">
        {informations.map((item, index) => (
            <li key={index}>
               <a href={item.link} className="text-white hover:underline text-sm">
                    {item.text}
                </a>      
            </li>
      ))}
        </ul>
    </div>
    )
}

const Footer = () => {
    const infoData = [
        {
            title:"Informações",
            informations: [
                {text: "Sobre a Drip Store", link: "/about"},
                {text: "Segurança", link: "/security"},
                {text: "Whishlist", link: "/wishlist"},
                {text: "Blog", link: "/blog"},
                {text: "Trabalhe conosco", link: "/work_with_us"},
                {text: "Meus pedidos", link: "/my_orders"},
            ]
        },
        {
            title: "Categorias",
            informations:  [
                {text: "Camisetas", link: "/tshirts"},
                {text: "Calças", link: "/pants"},
                {text: "Bonés", link: "/hats"},
                {text: "Headphones", link: "/headphones"},
                {text: "Tênis", link: "/sneackers"},
            ]
        },
        {
            title: "Contato",
            informations: [
                { text: "Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161", link: "#"},
                { text: "(85) 3051-3411", link:"#"},
            ]
        },
    ]

    return ( 
        <footer className="bg-dark-gray basis-auto">
            <div className="flex flex-col md:flex-row justify-around text-white p-12 gap-80">
                <div className="flex flex-col gap-4 p-8 max-w-sm">
                    <Logo location="footer" />
                    <p className="p-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet laboriosam magnam dignissimos et itaque tempore, architecto nisi iste, enim explicabo aliquid maxime ea illo ad eius laborum odit quis.</p>
                    <div className="flex my-6 gap-10">
                        <img src="./src/assets/facebook.svg" alt="facebook-icon" />
                        <img src="./src/assets/instagram.svg" alt="inastagram-icon" />
                        <img src="./src/assets/twitter.svg" alt="twitter-icon" />
                    </div>
                </div>
                <div className="flex flex-row md:flex-row gap-12 md:gap-24">
                        {infoData.map((section, idx) => (
                            <InfoColuna key={idx} {...section} />
                        ))}
                    </div>
            </div>

            <hr className="border-t border-white"/>
            <p className="text-center text-white text-xs p-6">© 2024 Digital Store</p>

        </footer>
     );
}
 
export default Footer;