import React from 'react';
import { useState, useEffect } from 'react'
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Cart from './Cart'
import '../css/Shop.css'

function Shop(props) {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  return (
    <>
  <ul className="componentNav">
            <li className="activePage">Rick's Shop</li>
            <li className="inactivePage" onClick={() => props.moveToOne(1)}>HOME</li>
            <li className="inactivePage" onClick={() => props.moveToTwo(2)}>PLANETS</li>
            <li className="inactivePage" onClick={() => props.moveToThree(3)}>LOVEFINDERZZ</li>
  </ul>
   <div className="shopContainer">
   <Cart cart={cart} updateCart={updateCart}/>
   <ShoppingList cart={cart} updateCart={updateCart} />
   </div>
   </>
  );
}

export default Shop;
