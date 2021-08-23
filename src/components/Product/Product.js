import "./Product.css";
import React from "react";
import { CartContext } from "../../CartContext";

const Product = (props) => {
    let { item } = props;
    let [cartItem, addToCart] = React.useContext(CartContext);
    

    

    return (
        <div className="each-item" id={props}>
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
                <button className="add-to-cart-btn" id={["btn", item.productId].join("")} onClick={() => addToCart(item, "addItem")}>Add to Cart</button>
            </div>
        </div>
    )
}


export default Product;