import React from "react";
import Footer from "./small/Footer";
import Navbar from "./small/Navbar";
import "../css/contact.css";
function Contact(){

    return(
        <>
            <Navbar contact="active"/>
            <section id="service" class="container" >
                <div class="text-uppercase">
                    <h1 >services</h1>
                </div>
                <p>for more information or for service needs you can leave me an email on my account to make an appointment or find me using the maps where we can meet and chat in all security.</p>
                <div className="" id="service-div">
                    <article id="article" className="container rounded-3 " >
                        <h2 >localisation</h2>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe  id="gmap_canvas" src="https://maps.google.com/maps?q=emombo%20cameroun&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"  marginheight="0" marginwidth="0"></iframe>
                                <a href="https://123movies-to.org"></a><br/>
                                <a href="https://www.embedgooglemap.net"></a>
                            </div>
                        </div>
                    </article>
                    <form action="" id="form" className="rounded-3 p-3 d-flex flex-column gap-5" >
                        
                            <div className="col-md-6 form-group">
                              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                        
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                        </div>
                        <div class="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="text-center"><button  type="submit" className="btn btn-outline-primary">Send Message</button></div>
                    </form>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Contact ;