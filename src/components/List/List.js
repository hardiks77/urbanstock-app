import React, { useEffect } from "react";
import Product from "../Product/Product";
import "./List.css";

function List(){

    let [data, setData] = React.useState(null);

    useEffect(async () => {
        let result = await fetch("https://demo7242716.mockable.io/products");
        let data = await result.json();
        setData(data.products);
    }, [])
    return (
        <div className="item-wrapper">
            {
                data ? data.map((eachItem) => <Product id={eachItem.productId} item={eachItem} key={eachItem.productId} />) : <div className="loading">Loading...</div>
            }
        </div>
    )
}

export default List;