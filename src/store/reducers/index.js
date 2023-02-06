import { combineReducers } from "redux";
import cartReducer from "./cart";

const rootReducers = combineReducers({
    cart: cartReducer,
});

export default rootReducers