import React from "react";
import Navbar from "./small/Navbar";
import Footer from "../components/small/Footer";
import "../css/about.css";

function About(){

    return(
        <>
            <Navbar about="active" />
            <div id="principa">
                
                <div className="text">
                    <h1>Mr Miel Shop</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima enim cum provident error, atque voluptas officia aliquid obcaecati temporibus dolor totam similique impedit quo ad excepturi, eveniet doloremque qui aliquam, pariatur laudantium eos modi possimus reiciendis. Reiciendis in provident aliquid repellendus obcaecati alias iusto? Tempora beatae laudantium est ullam architecto ut cumque dolor quam nobis nulla nemo soluta ipsam perferendis omnis, reiciendis corrupti modi neque quaerat assumenda facere dolorem placeat sed animi numquam. A nemo magni similique voluptates aliquam? Placeat, voluptate quis?</p>
                </div>
                
            </div>
            <Footer/>
        </>
    );
}

export default About ;