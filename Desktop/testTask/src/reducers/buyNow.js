import { BUY_NOW, ORDER_DETAIL, USER_ID} from "../actions";

const intialState = {
    user_id:"",
    order_total:'' ,
    addresses: {
        address:"",
        pincode:"",
        country: "",
        city:"",
        state:""
}
}

const buyNow = (state = intialState, action) => {
  switch (action.type) {
    case BUY_NOW:
      return {
        ...state,
        addresses: action.payload,
      }
      case ORDER_DETAIL:
        return {
        ...state,
        order_total :action.payload
      }
      case USER_ID:
        return {
        ...state,
        user_id :action.payload
      }
    default:
      return state;
  }
}
export default buyNow;