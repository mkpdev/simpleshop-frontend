import { SET_TOKEN } from "../actions";
const getToken = () => {
    const token = localStorage.getItem('token') || ""
    return token;
}

const intialState = {
    token: getToken()
}

const token = (state = intialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        default:
            return state;
    }
}
export default token;