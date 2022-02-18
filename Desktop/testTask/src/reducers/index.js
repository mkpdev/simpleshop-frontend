import { combineReducers } from "redux";
import registration from "./registration";
import login from "./login";
import token from "./token";
import getProducts from "./product";
import getOrders from "./orders";
import getRegions from "./region";
import buyNow from "./buyNow";

const reducer = combineReducers({
    registration,
    login,
    token,
    getProducts,
    getRegions,
    getOrders,
    buyNow,
})

export default reducer;