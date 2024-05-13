import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { ProductsReducer } from "./ProductsReducer";
export const rootReducer = combineReducers({
    user: UserReducer,
    reducedProducts: ProductsReducer
});
export type AppState = ReturnType<typeof rootReducer>;