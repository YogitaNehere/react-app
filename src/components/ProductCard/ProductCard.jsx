import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

const ProductCard = (props) => {
    
    // const [qty, setQty] = useState(0);
    // const [availableQty, setAvailableQty] = useState(5);
    // const [isOutOfStock, setIsOutOfStock] = useState(false);

    const [state, setState] = useState({
        qty: 0,
        availableQty:5,
        isOutOfStock: false
    });
    const product = props.product;

    const onQtyChange = (type) => {
        console.log(type);
        let newQty = state.qty;
        let newAvailableQty = state.availableQty;

        if(type === 'INC'){
            newQty++;
            newAvailableQty--;
        }else if(type === 'DEC'){
            newQty--;
            newAvailableQty++;
        }
        setState({
            ...state,
            qty: newQty,
            availableQty: newAvailableQty,
            isOutOfStock: (newAvailableQty == 0)
        });
        props.onQtyUpdate(type);
    }
    return(
        <div className='product-card'>
            <Link to={"product/"+product.id}>
            <img src={product.image} alt=""/>
            <div className='product-info'>
                <h5 className='title'>{product.title}</h5>
                <p className='price'>Price Rs {product.price}</p>
                <p className='category'>{product.tags}</p>
            </div>
            </Link>
            <div className='cta'>
                <button disabled={state.qty ===0 ? true:false} onClick={ () => onQtyChange('DEC') }>-</button>
                {state.qty}
                <button disabled={state.isOutOfStock} onClick={() => onQtyChange('INC') }>+</button>
            </div>
            {state.isOutOfStock && <span className='ooo'>Out of Stock</span>}
            {/* {this.state.isOutOfStock ? (<span className='ooo'>Out of Stock</span>): null} */}
        </div>
    );
}

export default ProductCard;