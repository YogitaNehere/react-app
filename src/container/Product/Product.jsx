import React from "react";
import axios from "axios";
import "./Product.scss";
import { CONSTANTS } from "../../utils/constants";

import loaderImg from '../../assets/images/loader_img.gif';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
    const [state, setState] = useState({
        productDetails: [],
        showLoader: false
    });

    const { id } = useParams();

    useEffect(() => {
        setState({...state, showLoader:true});
        //access currently open url: window.location.pathname
        // let path = window.location.pathname;
        // console.log(path);
        // path = path.split('/');
        // const productID = path[2];
        // const { id } = useParams();

        axios
        .get(CONSTANTS.API_BASE_URL+'products/'+id)
        .then((response) => {
            console.log(response.data);
            setState({
                ...state,
                productDetails: response.data,
                showLoader:false
            })
        })
        .catch((error) => {
            console.log(error);
            setState({
                ...state,
                showLoader:false
            })
        });
    }, []);

    return(
        
        <div className="product-details-container">
            {state.showLoader && <img src={loaderImg} alt="Loader" />}
            <img src={state.productDetails.image} alt={state.productDetails.title} />
            <div class="product-info">
                <h1>{state.productDetails.title}</h1>
                <h3>Category: {state.productDetails.category}</h3>
                <p><b>Description: </b>{state.productDetails.description}</p>
                <p><b>Price: </b>{state.productDetails.price}</p>
                {
                    state.productDetails.rating && (
                        <div>
                            <span><b>Ratings:</b> {state.productDetails.rating.rate} / 5</span><br />
                            {state.productDetails.rating.count && (<span><b>Rated by:</b> {state.productDetails.rating.count} users</span>)}
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Product;