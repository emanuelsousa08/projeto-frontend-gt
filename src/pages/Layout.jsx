import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

const Layout = ({children}) => {
    return ( 
        <>
            <Header />
            <main>
                <Section titleAlign="center"></Section>
                <ProductCard />
                {children}
            </main>
            <Footer />
        </>
     );
}
 
export default Layout;