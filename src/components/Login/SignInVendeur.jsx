import React from "react";
import "../../css/login.css";
import { Link } from "react-router-dom";

function SignInVendeur(){

    return(
        <>
            <section className="d-flex  justify-content-between">

                <div className="image image-sv" >
                    
                </div>
                
                <div className="" id="principal">
                    
                    <div>
                        <button type="email" id="email" className="form-control " placeholder="Email"> </button>
                        <label htmlFor="email">Enter your Email</label>
                    </div>

                    <div>
                        <button type="password" id="password" className="form-control" placeholder="PassWord"></button>
                        <label htmlFor="password">Enter your PassWord</label>
                    </div>

                    <div>
                        <p>Create Account ? <Link to="/sign-up-client" id="Link">Create my count </Link> </p>
                    </div>
                </div>

                
            </section>

        </>
    );
}

export default SignInVendeur ; 