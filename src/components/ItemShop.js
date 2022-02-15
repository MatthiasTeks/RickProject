import CareScale from "./CareScale";
import '../css/ItemShop.css'

function handleClick(name) {
	alert(`Vous voulez acheter 1 ${name}? Excellent choix `)
}

function ItemShop ({cover, key, name, money, price, rarity}) {
    return(
        <li key={key} className="itemShopInd" onClick={() => handleClick}>
            <img className="shop-item-cover" src={cover} />
            <div className="itemsDetails">
                <span className="boldName">{name}: </span>
                <span> {price} crédits galactiques</span>
            <div className="scales">
                <CareScale careType='money' scaleValue={money} />
			    <CareScale careType='rarity' scaleValue={rarity} />
            </div>
            </div>
        </li>
    )
}

export default ItemShop