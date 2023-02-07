import React from 'react';
//import {Link} from "react-router-dom";

const Movie = props => {
    return(
       <section style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <iframe src="https://www.youtube.com/embed/0cLHKUK9_rQ"
                style={{alignContent: "center"}}  
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>    
            </iframe>
        </section>
    );
}; export default Movie;