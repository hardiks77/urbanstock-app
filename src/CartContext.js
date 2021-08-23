
import React from "react";

export const CartContext = React.createContext();


export const CartProvider = (props) => {



    let  [cartItem, setCartItem] = React.useState([]);

    function addToCart(newItem, actionTaken){
        if(actionTaken == "addItem"){

            let existOrNOt = cartItem.filter(eachItem => eachItem.productId != newItem.productId);
            let diff = cartItem.length - existOrNOt.length;
            if(diff == 0){
                setCartItem([...cartItem, newItem]);
            }

            
            
        }
        else if(actionTaken == "removeItem"){
            
            setCartItem(cartItem.filter(eachItem => eachItem.productId != newItem.productId));
        }
        
    }

    return(
        <CartContext.Provider value={ [cartItem, addToCart] }>
            {props.children}
        </CartContext.Provider>
    )
}