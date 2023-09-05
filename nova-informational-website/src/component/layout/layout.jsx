import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../Footer";
import Header from "../Navbar/header";
import About from '../about/about';
import Products from "../products/products";
import Values from "../Values/features"





const Layout =()=>{
    return(
        <div>
            <Navigation/>
            <Header/>
            <About/>
            < Products />
            < Values />
            <Footer/>
            
            
        </div>
    )
}
export default Layout;