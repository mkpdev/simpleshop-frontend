export const SET_USER = "SET_USER";
export const SET_USER_LOGIN = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_REGIONS = "GET_REGIONS";
export const GET_ORDERS = "GET_ORDERS";
export const SHOW_PRODUCT_DETAIL = "SHOW_PRODUCT_DETAIL";
export const CHECK_STATUS = "CHECK_STATUS";
export const CHECK_LOGIN_STATUS = "CHECK_LOGIN_STATUS";
export const BUY_NOW = "BUY_NOW";
export const ORDER_DETAIL = "ORDER_DETAIL";
export const USER_ID = "USER_ID";
export const GET_ORDERS_PRODUCT = "GET_ORDERS_PRODUCT";

export const setUser = (payload) => ({ type: SET_USER, payload });
export const setUserLogin = (payload) => ({ type: SET_USER_LOGIN, payload });
export const setToken = (payload) => ({ type: SET_TOKEN, payload });
export const getProduct = (payload) => ({ type: GET_PRODUCT, payload });
export const getRegions = (payload) => ({ type: GET_REGIONS, payload });
export const getOrder = (payload) => ({ type: GET_ORDERS, payload });
export const showProductDetail = (payload) => ({ type: SHOW_PRODUCT_DETAIL, payload });
export const checkStatus = (payload) => ({ type: CHECK_STATUS, payload });
export const checkLoginStatus = (payload) => ({ type: CHECK_LOGIN_STATUS, payload });
export const buyNow = (payload) => ({ type: BUY_NOW, payload });
export const userId = (payload) => ({ type: USER_ID, payload });
export const OrderDetail = (payload) => ({ type: ORDER_DETAIL, payload });
export const productRequestDetail = (payload) => ({ type: GET_ORDERS_PRODUCT, payload });









