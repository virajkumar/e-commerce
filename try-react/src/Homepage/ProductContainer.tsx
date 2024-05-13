import React, { FC } from "react";
import { Product } from "../store/ProductsReducer";
import "./ProductContainer.css";
import belt from '../initializeStoreProducts/belt.png';

const ProductContainer: FC<Product> = ({ id,
    name,
    pictureLink,
    stock,
    price,
    deliveryETA
}: Product) => {
    return (<div id="belt">
        <img src={require('./../initializeStoreProducts/belt.png')} alt="image not available" width="400" height="400" />
        <div id="productDetails">
            <p>
                name: {name} price: {price}
            </p>
            <p>
                stock: {stock} delivery time: {deliveryETA}
            </p>
        </div>
    </div>);
};
export default ProductContainer;