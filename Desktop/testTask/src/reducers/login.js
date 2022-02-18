import { SET_USER_LOGIN, CHECK_LOGIN_STATUS } from "../actions";

const intialState = {
    userloginDetail: {
        email: "",
        password: "",
    },
    res: false,
}

const login = (state = intialState, action) => {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                userloginDetail: action.payload,
            }
        case CHECK_LOGIN_STATUS:
            return {
                ...state,
                res: action.payload,
            };

        default:
            return state;
    }
}
export default login;