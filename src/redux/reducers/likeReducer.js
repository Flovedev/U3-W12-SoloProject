import { GET_LIKED, REMOVE_LIKED } from "../actions";

const initialState = {
  liked: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIKED:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };

    case REMOVE_LIKED:
      return {
        ...state,
        liked: state.content.filter((e, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default likeReducer;
