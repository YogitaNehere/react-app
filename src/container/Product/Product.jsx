import React from "react";
import axios from "axios";
import "./Product.scss";
import { CONSTANTS } from "../../utils/constants";

import loaderImg from '../../assets/images/loader_img.gif';

class Product extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            productDetails: [],
            showLoader: false
        };
    }

    componentDidMount(){
        this.setState({showLoader:true});
        //access currently open url
        // window.location.pathname
        let path = window.location.pathname;
        console.log(path);
        path = path.split('/');
        const productID = path[2];

        axios
        .get(CONSTANTS.API_BASE_URL+'products/'+productID)
        .then((response) => {
            console.log(response.data);
            this.setState({
                productDetails: response.data,
                showLoader:false
            });
        })
        .catch(error => {
            console.log(error);
            this.setState({showLoader: false});
        });
    }

    render(){
        const productDetails = this.state.productDetails;
        return(
            
            <div className="product-details-container">
                {this.state.showLoader && <img src={loaderImg} alt="Loader" />}
                <img src={productDetails.image} alt={productDetails.title} />
                <div class="product-info">
                    <h1>{productDetails.title}</h1>
                    <h3>Category: {productDetails.category}</h3>
                    <p><b>Description: </b>{productDetails.description}</p>
                    <p><b>Price: </b>{productDetails.price}</p>
                    {
                        productDetails.rating && (
                            <div>
                                <span><b>Ratings:</b> {productDetails.rating.rate} / 5</span><br />
                                {productDetails.rating.count && (<span><b>Rated by:</b> {productDetails.rating.count} users</span>)}
                                
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Product;