import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({children}) => {
    return ( 
        <>
            <Header />
<<<<<<< HEAD
                <main>
                    {children}
                </main>
=======
            <main>
                {children}
            </main>
>>>>>>> aef15129692cf50e32bc16d267762d284c38005c
            <Footer />
        </>
     );
}
 
export default Layout;