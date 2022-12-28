import React from "react";
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';



function Navbar(props){
   
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand " href="#">
                    <img src={logo} alt="" width="100" height="100"/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link  className={props.home+" nav-link"}  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.about+" nav-link"} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.contact+" nav-link"} to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={props.shop+" nav-link"} to="/shop">Shop</Link>
                    </li>
                </ul>
            </div>
        </nav>
      
    );
}

export default Navbar ;