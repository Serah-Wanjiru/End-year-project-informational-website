import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../Footer";
import Header from "../Navbar/header";
import About from '../about/about';
import Products from "../products/products";
import Values from "../Values/features"
import Team from "../Team/Team";
import Contact from "../Contacts";





const Layout =()=>{
    return(
        <div>
            <Navigation/>
            <Header/>
            <About/>
            < Products />
            < Values />
            <Team/>
            <Contact/>
            <Footer/>
           
            
            
        </div>
    )
}
export default Layout;