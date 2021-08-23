import React from "react";
import { CartContext } from "../../CartContext";
import "./CartContent.css";

function CartContent() {

    let [cartItem, addToCart] = React.useContext(CartContext);
    



    return(
            
            cartItem.length ? 
            <div className="item-wrapper">{

            
            cartItem.map((item) => <div className="each-item">
            <div className="img-wrapper">
                <img src={item.searchImage}/>
            </div>
            <div className="content-wrapper">
                <h3 className="brand-name">{item.brand}</h3>
                <h4 className="brand-desc">{item.additionalInfo}</h4>
                <h5>
                    <span className="final-price">Rs. {item.price}</span>
                    { item.discountDisplayLabel ? <span className="price">{item.mrp}</span> : null }
                    
                    <span className="discount">{item.discountDisplayLabel}</span>
                </h5>
                <button className="add-to-cart-btn" onClick={() => addToCart(item, "removeItem")}>Remove</button>
            </div>
        </div>)
        }
        </div>
        :

        <h1 className="nothing">Nothing in cart</h1>
    )
}

export default CartContent;