  import axios from 'axios';
  import React, { useState, useEffect } from 'react';
  import { CONSTANTS } from '../../utils/constants.js'; 

  import ProductCard from "../../components/ProductCard/ProductCard";
  import './Home.scss';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  // import Slider from "react-slick";

  import loaderImg from '../../assets/images/loader_img.gif';

  const Home = () => {
    const [state, setState] = useState({
      currentProductIndex: 0,
      cartItems: 0,
      productList: [],
      productListCopy: [],
      showLoader:false
    });

    const onSearchValueChange = (e) => {
      // console.log(e);
      const searchKey = e.target.value;

      if(searchKey == ""){
        setState({...state, productListCopy:state.productListCopy});
        return;
      }
      const filteredList = state.productList.filter((product) => 
        product.title.toLowerCase().includes(searchKey.toLowerCase())
      );
      setState({...state, productList : filteredList});
    };

    const onPreviousClick = () => {
      setState({...state, currentProductIndex: state.currentProductIndex-1});
    };

    const onNextClick = () => {
      setState({...state, currentProductIndex: state.currentProductIndex+1});
    };

    const onQtyUpdate = (operation) => {
      // console.log('called from parent..');
      if(operation == 'INC'){
        setState({ ...state, cartItems:state.cartItems + 1 });
      }
      else if( operation == 'DEC' ){
        setState({ ...state, cartItems: state.cartItems - 1 });
      }
    };
    
    //ComponentDedMount
    useEffect(() => {
      setState({...state, showLoader:true});
      axios
      .get(CONSTANTS.API_BASE_URL+"products")
      .then((response) => {
        console.log(response.data);
        setState({
          ...state,
          productList:response.data,
          productListCopy:response.data,
          showLoader:false
        });
  
      })
      .catch((error) => {
        setState({...state, showLoader:false});
        console.log(error);
      });
    }, []);

    const productList = state.productList;
    return(
      <main className='Home'>
        <section className='cart'>
          Items in Cart: {state.cartItems}
        </section>
        {/* <Slider {...settings}>
        {productList.map((product) => {
          return (
            <ProductCard
              key={product.title}
              product={product}
              onQtyUpdate={this.onQtyUpdate}
            />
          );
        })}
        </Slider> */}
        <div>
          <input 
            type="text" 
            onChange={onSearchValueChange} 
            placeholder="Search with item name..." 
            className='search-box'/>
        </div>
        <section>
            <h2>Stationary</h2>
            <button onClick={onPreviousClick}>Previous</button>
            <button onClick={onNextClick}>Next</button>
            <div className='products-container'>
              {/* <ProductCard product={productDetails[this.state.currentProductIndex]} onQtyUpdate={this.onQtyUpdate} /> */}
              {state.showLoader && <img src={loaderImg} alt='loader'></img>}
                {state.productList.map((product) => {
                    return (
                    <ProductCard 
                      key={product.id}
                      id={product.id} 
                      product={product}
                      onQtyUpdate={onQtyUpdate}  
                    />
                    );
                })}
            </div>
            {/* <ProductCard product={productDetails} /> */}
        </section>

        <section>
            <h2>Electronics</h2>
            {/* <ProductCard /> */}
        </section>
    </main>
    )
  }

  export default Home;