import cartLogo from "../../images/cart1.png";
import "./Cart.css";
import { CartContext } from "../../CartContext";
import React from "react";
import { ListContext } from "../List/ListContext";

function Cart() {

    let [cartItem, addToCart] = React.useContext(CartContext);

    let [showCart, cartShowChange] = React.useContext(ListContext);

    return (
        <div className="cart-wrapper">
            <img src={cartLogo} id="cart-img" onClick={cartShowChange}/>
            <span>{cartItem.length}</span>
        </div>
    )
}

export default Cart;