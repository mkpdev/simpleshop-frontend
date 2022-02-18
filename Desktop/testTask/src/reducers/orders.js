import { GET_ORDERS, GET_ORDERS_PRODUCT } from "../actions";

const intialState = {
  order: [],
  orderDetail:{}
}

const getOrders = (state = intialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        order: action.payload,
      };
      case GET_ORDERS_PRODUCT:
      return {
        ...state,
        orderDetail: action.payload,
      };

    default:
      return state;
  }
}
export default getOrders;