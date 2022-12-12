import React from "react";
import axios from "axios";

class Product extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            productDetails: {}
        };
    }

    componentDidMount(){
        //access currently open url
        // window.location.pathname
        let path = window.location.pathname;
        console.log(path);
        path = path.split('/');
        const productID = path[2];

        axios
        .get('https://fakestoreapi.com/products/'+productID)
        .then((response) => {
            console.log(response.data);
            this.setState({productDetails: response.data});
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        const productDetails = this.state.productDetails;
        return(
            
            <div className="product-details-container">
                <img scr={productDetails.image} alt={productDetails.title} />
            </div>
        );
    }
}

export default Product;