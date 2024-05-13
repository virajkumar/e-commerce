import React, { FC } from "react";
import "./HomeContainer.css";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import { Product } from "../store/ProductsReducer";
import ProductContainer from "./ProductContainer";

const HomeContainer: FC = () => {
    const initialProducts  = useSelector((state: AppState) => state.reducedProducts?.products);
    
    const randomProducts = [];

    const arrayLength = (initialProducts ? Object.values(initialProducts).length : 0)

    for (let i = 0; i < arrayLength; i++) {
        if (initialProducts) {
            randomProducts.push(Object.values(Object.values(initialProducts)[0])[Math.floor(Math.random() * arrayLength)]);
        }
    }

    // if (initialProducts) {
    //     console.log(Object.values(Object.values(initialProducts)[0])[3]);
    // }

    return (<div>
            <div id="container1" className="flexer">
                <div id="container1.1" className="flexer">
                    <div id="container1.1.1" className="flexer">
                        {/* <ProductContainer 
                        id={randomProducts[0].id} 
                        name={randomProducts[0].name} 
                        pictureLink={randomProducts[0].pictureLink}
                        stock={randomProducts[0].stock}
                        price={randomProducts[0].price}
                        deliveryETA={randomProducts[0].deliveryETA}/> */}
                        <ProductContainer id={1} name="belt" pictureLink="../initializeStoreProducts/belt.png" stock={20} price="Rs 650" deliveryETA="3 days"/>
                    </div>
                    <div id="container1.1.2" className="flexer">

                    </div>
                </div>
                <div id="container1.2" className="flexer">

                </div>
            </div>
            <div id="container2" className="flexer">
                <div id="container2.1" className="flexer">

                </div>
                <div id="container2.2" className="flexer">

                </div>
            </div>
        </div>
    );
};
export default HomeContainer;