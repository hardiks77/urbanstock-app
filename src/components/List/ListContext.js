import React from "react";

export const ListContext = React.createContext();

export const ListProvider = (props) => {

    let [showCart, setShowCart] = React.useState(false);

    function cartShowChange(){
        setShowCart(showCart ? false : true);
        console.log("cart clicked: ", showCart);
    }

    return (
        <ListContext.Provider value={[showCart, cartShowChange]}>
            {props.children}
        </ListContext.Provider>
    )
}