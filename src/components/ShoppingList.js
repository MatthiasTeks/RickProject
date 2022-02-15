import { useState } from 'react';
import { itemList } from '../datas/itemList';
import React from "react";
import Categories from './Categories';
import ItemShop from "./ItemShop";

function ShoppingList({ cart, updateCart}) {
  const [activeCategory, setActiveCategory]=useState('')
  const categories = itemList.reduce(
		(acc, item) =>
			acc.includes(item.category) ? acc : acc.concat(item.category),
		[]
	)

function addToCart(name, price) {
  const currentItemAdded = cart.find((item) => item.name === name)
  if (currentItemAdded) {
    const cartFilteredCurrentItem = cart.filter(
      (item) => item.name !== name
    )
    updateCart([
      ...cartFilteredCurrentItem,
      {name, price, amount: currentItemAdded.amount + 1}
    ])
  } else {
    updateCart([...cart, {name, price, amount:1}])
  }
}
    
    return(
      <div className='shopping-list'>
          <Categories
            categories={categories}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />

          <ul className='itemshop-list'>
            {itemList.map(({ cover, key, name, price, money, rarity, category }) => 
                !activeCategory || activeCategory === category ? (
                    <div className='itemInd' key={key}>
                      <ItemShop 
                        cover={cover}
                        name={name} 
                        money={money} 
                        rarity={rarity} 
                        price={price} 
                      />
                      <button className="button-shop" onClick={() => addToCart(name,price)}>Ajouter</button>
                    </div>
                  ) : null
            )}
          </ul>
      </div>
    )
}

export default ShoppingList