import React from "react";
import page404 from '../../assets/images/404_page.jpg';

const NotFound = () => {
    return(
        <div>
            <h1>Sorry!! The page you are looking is not there...</h1>
            <img src={page404} alt="page not found"/>
        </div>
    );
}

export default NotFound;