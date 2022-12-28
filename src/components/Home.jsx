import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./small/Navbar";
import Footer from "./small/Footer";

import "../css/home.css";
function Home(){

    return(
        <>
            <Navbar home="active" />
            <div className="container-fluid d-flex justify-content-center bg-dark flex-column" id="principale" >
                <div className="d-flex justify-content-center gap-5">
                    <Link className="btn  btn-success btn-lg" to="/sign-in-client"> Client </Link>
                    <Link className="btn btn-warning btn-lg"to="/sign-in-vendeur">Vendeur</Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home ;