import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

const Layout = ({children}) => {
    return ( 
        <>
            <Header />
            <main>
                <Section />
                {children}
            </main>
            <Footer />
        </>
     );
}
 
export default Layout;