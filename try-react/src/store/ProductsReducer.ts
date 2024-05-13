export const PRODUCTS_TYPE = "PRODUCTS_TYPE";

export interface Product {
    id: number,
    name: string,
    pictureLink: string,
    stock: number,
    price: string,
    deliveryETA: string
}

export interface Products {
    products: Array<Product>;
}

export interface ProductsAction {
    type: string,
    payload: Products | null
}

export const ProductsReducer = (state: Products | null = null,
    action: ProductsAction): Products | null => {
    switch (action.type) {
        case PRODUCTS_TYPE:
            return action.payload;
        default:
            return state;
    }
};