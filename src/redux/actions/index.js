export const PLAY_SONG = "PLAY_SONG";
export const GET_SONGS = "GET_SONGS";
export const GET_SEARCH = "GET_SEARCH";
export const GET_LIKED = "GET_LIKED";
export const REMOVE_LIKED = "REMOVE_LIKED";
export const GET_LOADING = "GET_LOADING";
export const GET_ERROR = "GET_ERROR";

export const addPlaySong = (song) => {
  return {
    type: PLAY_SONG,
    payload: song,
  };
};

export const searchAction = (e) => {
  return {
    type: GET_SEARCH,
    payload: e,
  };
};

export const displayLiked = (e) => {
  return {
    type: GET_LIKED,
    payload: e,
  };
};

export const removeLiked = (e) => {
  return {
    type: REMOVE_LIKED,
    payload: e,
  };
};

export const getLoading = (e) => {
  return {
    type: GET_LOADING,
    payload: e,
  };
};

export const getError = (e) => {
  return {
    type: GET_ERROR,
    payload: e,
  };
};

export const getAlbums = (endpoint) => {
  const url =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + endpoint;

  return async (dispatch, getState) => {
    try {
      let res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        // console.log(data);
        dispatch({
          type: GET_SONGS,
          payload: data,
        });
        dispatch(getLoading(false));
      } else {
        dispatch(getLoading(false));
        dispatch(getError(true));
      }
    } catch (error) {
      dispatch(getLoading(false));
      dispatch(getError(true));
    }
  };
};
