import { GET_REGIONS } from "../actions";

const intialState = {
  region: [],
}

const getRegions = (state = intialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return {
        ...state,
        region: action.payload,
      };

    default:
      return state;
  }
}
export default getRegions;