import { GET_PRODUCT, SHOW_PRODUCT_DETAIL } from "../actions";

const intialState = {
  product: [],
  productdetail: [],
}

const getProducts = (state = intialState, action) => {

  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case SHOW_PRODUCT_DETAIL:
      return {
        ...state,
        productdetail: [...intialState.productdetail, action.payload],
      };

    default:
      return state;
  }
}
export default getProducts;