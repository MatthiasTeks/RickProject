import { useState, useEffect } from 'react';
import '../css/Cart.css'

function Cart({cart, updateCart}) {
	
	const [isOpen, setIsOpen] = useState(true)
	const total= cart.reduce(
		(acc, itemType) => acc + itemType.amount * itemType.price,
		0
	)

	return isOpen ? (
		<div className='shop-cart'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
			<div>
				<h2>Panier</h2>
					<ul>
						{cart.map(({name,price,amount}, index) => (
							<div key={`${name}-${index}`}>
								{name} {price} crédits galactiques x {amount}
							</div>
						))}
					</ul>
					<h3>Total:{total} crédits galactiques</h3>
					<button className="cleanBasket" onClick={() => updateCart([])}> Vider le panier</button>

			</div>

			) : (
				<div> Votre panier est vide </div>
			)}

		</div>

	) : (
		<div className='cart-closed'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)

}

export default Cart