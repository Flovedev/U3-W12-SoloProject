import { GET_SEARCH } from "../actions";

const initialState = {
  result: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
