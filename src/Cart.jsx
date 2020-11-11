import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Cart.css';
import CartProduct from './CartProduct';
import Button from '@material-ui/core/Button';

const Cart = () => {
    return (
        <div className="cart">
            <Button>
                <ArrowBackIosIcon className="backArrow" />
            </Button>
            <CartProduct />
        </div>
    )
}

export default Cart
