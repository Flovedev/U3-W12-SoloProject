import { PLAY_SONG } from "../actions";

const initialState = {
  play: [],
};

const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        play: action.payload,
      };

    default:
      return state;
  }
};

export default playReducer;
