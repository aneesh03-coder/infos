import React from 'react';
import './CartProduct.css';
import Checkout from './Checkout';
import ExtraNote from './ExtraNote';
import Product from './Product';
import Subtotal from './Subtotal';

const CartProduct = () => {
    return (
        <div className='cartProduct'>
            <Product title="Chicken Sandwich" calorie={1102} price={1.500} src="https://media.istockphoto.com/photos/turkey-sandwich-picture-id157431311?k=6&m=157431311&s=612x612&w=0&h=AHxozU3EVhaym-0rJhg00sY4_L2UQl8MNUalaQjfIGY="/>
            <Product title="Egg Grill Sandwich" calorie={902} price={1.200} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Egg_Sandwich.jpg/220px-Egg_Sandwich.jpg" />
            <ExtraNote />
            <Subtotal />
            <Checkout />
        </div>
    )
}

export default CartProduct
