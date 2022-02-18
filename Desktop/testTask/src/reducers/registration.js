import { SET_USER, CHECK_STATUS } from "../actions";

const intialState = {
  userdetail: {
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
  },
  response: false
}

const registration = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userdetail: action.payload,
      }
    case CHECK_STATUS:
      return {
        ...state,
        response: action.payload,
      };

    default:
      return state;
  }
}
export default registration;