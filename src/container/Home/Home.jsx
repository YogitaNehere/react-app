import axios from 'axios';
import React from 'react';

import ProductCard from "../../components/ProductCard/ProductCard";
import './Home.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

import loaderImg from '../../assets/images/loader_img.gif';
import { json } from 'react-router-dom';


// const productList = [
//   {
//     image:
//       "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
//     title: "Box of Pencils",
//     price: 100,
//     tags: "Pens, Notebooks & More",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
//     title: "Cycle",
//     price: 10000,
//     tags: "Vehicles, bikes",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/image/200/200/krayqa80/book/k/b/b/guide-to-uttar-pradesh-up-nirikshak-platoon-commander-upsi-exam-original-imag54mwhwxgj6pj.jpeg?q=70",
//     title: "Book",
//     price: 200,
//     tags: "Study, books",
//   },
//   {
//     image:
//       "https://rukminim1.flixcart.com/image/200/200/light/h/9/h/imported-bicycle-rear-light-5-led-usb-rechargeable-waterproof-original-imaeq7hj3gppgcxz.jpeg?q=70",
//     title: "Cycle Lights",
//     price: 500,
//     tags: "Accessories, Vehicles",
//   },
// ];
class Home extends React.PureComponent{
  constructor() {
    super();
    this.state = {
      currentProductIndex: 0,
      cartItems: 0,
      // productDetails: productList,
      productList: [],
      productListCopy: [],
      showLoader:false
    };
  }
   componentDidMount(){
    this.setState({showLoader:true});
    axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      console.log(response.data);
      this.setState({
        productList:response.data,
        productListCopy:response.data,
        showLoader:false
      });

    })
    .catch((error) => {
      this.setState({showLoader:false});
      console.log(error);
    });
    // setTimeout(() => {
    //   console.log('Updating state value');
    //   this.setState({cartItems: 0});
    // }, 1000);
   }
    
    onPreviousClick = () => {
      this.setState({currentProductIndex: this.state.currentProductIndex-1});
    };

    onNextClick = () => {
      this.setState({currentProductIndex: this.state.currentProductIndex+1});
    };

    onQtyUpdate = (operation) => {
      console.log('called from parent..');
      if(operation == 'INC'){
        this.setState({ cartItems:this.state.cartItems + 1 });
      }
      else if( operation == 'DESC' ){
        this.setState({ cartItems: this.state.cartItems - 1 });
      }
    };

    onSearchValueChange = (e) => {
      // console.log(e);
      const searchKey = e.target.value;

      if(searchKey == ""){
        this.setState({productListCopy:this.state.productListCopy});
        return;
      }

      const filteredList = this.state.productList.filter((product) => 
        product.title.toLowerCase().includes(searchKey.toLowerCase())
      );
      this.setState({productList : filteredList});
    };

    render(){
         
        // const productDetails = {
        //     image: "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
        //     title: "Box of Pencils",
        //     price: 100,
        //     tags: "Pens, Notebooks & More"
        // };

        // const productDetails = [
        //     {
        //         image:
        //           "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
        //         title: "Box of Pencils",
        //         price: 100,
        //         tags: "Pens, Notebooks & More",
        //       },
        //       {
        //         image:
        //           "https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
        //         title: "Cycle",
        //         price: 10000,
        //         tags: "Vehicles, bikes",
        //       },
        //       {
        //         image:
        //           "https://rukminim1.flixcart.com/image/200/200/krayqa80/book/k/b/b/guide-to-uttar-pradesh-up-nirikshak-platoon-commander-upsi-exam-original-imag54mwhwxgj6pj.jpeg?q=70",
        //         title: "Book",
        //         price: 200,
        //         tags: "Study, books",
        //       },
        //       {
        //         image:
        //           "https://rukminim1.flixcart.com/image/200/200/light/h/9/h/imported-bicycle-rear-light-5-led-usb-rechargeable-waterproof-original-imaeq7hj3gppgcxz.jpeg?q=70",
        //         title: "Cycle Lights",
        //         price: 500,
        //         tags: "Accessories, Vehicles",
        //       },
          
        // ]

        // var settings = {
        //   dots: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
        //   arrows: true,
        //   autoplay: false,
        // };

        // console.log('Update from render');

        const productList = this.state.productList;
    
        return(
            <main className='Home'>
                <section className='cart'>
                  Items in Cart: {this.state.cartItems}
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
                    onChange={this.onSearchValueChange} 
                    placeholder="Search with item name..." 
                    className='search-box'/>
                </div>
                <section>
                    <h2>Stationary</h2>
                    <button onClick={this.onPreviousClick}>Previous</button>
                    <button onClick={this.onNextClick}>Next</button>
                    <div className='products-container'>
                      {/* <ProductCard product={productDetails[this.state.currentProductIndex]} onQtyUpdate={this.onQtyUpdate} /> */}
                      {this.state.showLoader && <img src={loaderImg} alt='loader'></img>}
                        {productList.map((product) => {
                            return (
                            <ProductCard 
                              key={product.id}
                              id={product.id} 
                              product={product}
                              onQtyUpdate={this.onQtyUpdate}  
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
        );
    }
}

export default Home;