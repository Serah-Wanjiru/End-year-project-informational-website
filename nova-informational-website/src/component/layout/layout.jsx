import React from "react";
import Navigation from "../navigation/navigation";
import Footer from "../Footer";
import Header from "../Navbar/header";
import About from '../about/about'





const Layout =()=>{
    return(
        <div>
            <Navigation/>
            <Header/>
            <About/>
            <Footer/>
            
            
        </div>
    )
}
export default Layout;