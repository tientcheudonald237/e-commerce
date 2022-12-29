import React from "react";
import "../../css/footer.css";
import{Link} from "react-router-dom";

function Footer(){

    return(
        <>
            <footer>
            <div className="box-content">
                <div className="box">
                    <ul>
                        <li><h3>Contact</h3></li>
                        <li>+237 656138785</li>
                        <li><a href="mailto:tientcheudonald237@gmail.com">tientcheudonald237@gmail.com</a></li>
                        <li>BP : 246 Yaounde Emombo </li>
                    </ul>
                </div>
                <div className="box">
                    <li><h3>follow us on the networks</h3></li>
                    <div className="d-inline d-flex justify-content-center gap-3">
                        <a href="https://twitter.com/DonaldLucie237?t=H8SG7tMrXgChSVcXCfaG_w&s=35"><i className="bi-twitter ico rounded-circle ico-twit"  ></i></a>
                        <a href="https://www.instagram.com/invites/contact/?i=995zxmg1l8ht&utm_content=nycif7m" ><i className="bi-instagram ico ico-insta"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100079032859888"><i className="bi-facebook ico ico-fac " ></i></a>
                        <a href="https://t.me/angels210404"><i className="bi-telegram ico"></i></a>
                        <a href="https://wa.me/message/Y5IZ7EUAEW7AP1"><i className="bi-whatsapp ico ico-what" ></i></a>
                        
                    </div>
                </div>
                <div>
                    <li><h3>Did you know ?</h3></li>
                    <p>imagine a platform allowing you to sell  products and also to buy them.<br /> it's really superb, you just have to register.</p>
                </div>
            </div>
            </footer>
            <div id="footer" className="bg-dark container-fuild text-center">
                <ul >
                    <li><Link to="/">home  </Link></li> 
                    <li><Link to="/about"> about  </Link></li> 
                    <li><Link to="/contact"> contact  </Link></li>  
                    <li><Link to="/shop"> shop</Link></li>
                </ul>
                <div className="text-center ff" >
                    <p className="text-light text-center"> &copy; Copyright 2022 <span id="afooter"> Mr Miel shop </span></p>
                </div>
            </div>
            
        </>
    );
	
}

export default Footer;