import { GET_LOADING, GET_SONGS, GET_ERROR } from "../actions";

const initialState = {
  songs: [],
  isLoading: true,
  isError: false,
};

const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };

    case GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default displayReducer;
