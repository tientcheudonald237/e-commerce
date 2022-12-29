import React from "react";
import Article from "./Article";



function ArticleBox(props){
    return(
        <>
            <div className="div container">
                <Article image={props.image1} nom={props.nom1} prix={props.prix1} alt={"image "+props.nom1}/>
                <Article image={props.image2} nom={props.nom2} prix={props.prix2} alt={"image "+props.nom2}/>
                <Article image={props.image3} nom={props.nom3} prix={props.prix3} alt={"image "+props.nom3}/>
            </div>
        </>
    );
}

export default ArticleBox;