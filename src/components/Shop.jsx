import React from "react";
import Navbar from "./small/Navbar";
import Footer from "./small/Footer";
import "../css/shop.css";
import {Link} from "react-router-dom";
import image1 from "../images/image1.jfif";

import ArticleBox from "./article/ArticleBox";


function Shop(){

    return(
        <>
            <Navbar shop="active" />
            <div className="main">
                <div className="section1">
                    <div className="btn btn-warning">
                        <Link to="/sign-in-client" className="link">Sign In</Link>
                    </div>
                    <div  className="btn btn-success">
                        <Link className="link">My Basket</Link>
                    </div>
                </div>
                <div className="section2">
                    <ArticleBox image1={image1} nom1="voiture" prix1="2000" image2={image1} nom2="voiture" prix2="2000"  image3={image1} nom3="voiture" prix3="2000"/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Shop ;