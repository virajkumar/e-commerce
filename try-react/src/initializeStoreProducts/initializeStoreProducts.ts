import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { PRODUCTS_TYPE, Products, Product } from "../store/ProductsReducer";

const initializeStoreProducts = (): Products | null => {
    let storeProducts: Products = {products: []};
    
    let o = storeProducts.products?.push({
        id: 1,
        name: "School Bag",
        pictureLink: "school-bag.png",
        stock: 10,
        price: "Rs 500",
        deliveryETA: "3 days"
    });

    //console.log(o);

    storeProducts.products?.push({
        id: 2,
        name: "Water Bottle",
        pictureLink: "water-bottle.png",
        stock: 20,
        price: "Rs 200",
        deliveryETA: "2 days"
    });

    //console.log(storeProducts);

    storeProducts.products?.push({
        id: 3,
        name: "Notebook",
        pictureLink: "notebook.png",
        stock: 22,
        price: "Rs 100",
        deliveryETA: "1 day"
    });

    storeProducts.products?.push({
        id: 4,
        name: "Car",
        pictureLink: "car.png",
        stock: 5,
        price: "Rs 2000000",
        deliveryETA: "5 days"
    });

    storeProducts.products?.push({
        id: 5,
        name: "Bucket",
        pictureLink: "bucket.png",
        stock: 100,
        price: "Rs 300",
        deliveryETA: "3 days"
    });

    storeProducts.products?.push({
        id: 6,
        name: "Hat",
        pictureLink: "hat.png",
        stock: 24,
        price: "Rs 500",
        deliveryETA: "1 day"
    });

    storeProducts.products?.push({
        id: 7,
        name: "Camera",
        pictureLink: "camera.png",
        stock: 12,
        price: "Rs 70000",
        deliveryETA: "2 days"
    });

    storeProducts.products?.push({
        id: 8,
        name: "Saucepan",
        pictureLink: "saucepan.png",
        stock: 40,
        price: "Rs 4000",
        deliveryETA: "7 days"
    });

    storeProducts.products?.push({
        id: 9,
        name: "Belt",
        pictureLink: "belt.png",
        stock: 45,
        price: "Rs 6000",
        deliveryETA: "2 days"
    });

    storeProducts.products?.push({
        id: 10,
        name: "Tie",
        pictureLink: "tie.png",
        stock: 25,
        price: "Rs 2000",
        deliveryETA: "9 days"
    });

    return storeProducts;
};
export default initializeStoreProducts;