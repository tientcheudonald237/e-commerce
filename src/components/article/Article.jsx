import React from "react";


function Article(props){
    return(
        <>
            <div className="card" >
                <img src={props.image} className="card-img-top" alt={props.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{props.nom}</h5>
                    <p className="card-text">prix : <span className=" font-weight-bold">{props.prix}</span> Fcfa</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </>
    );
}

export default Article;