
const GET_ARTIST_INFO  = 'k3/artist/GET_ARTIST_INFO';
const INFO_LOADING = 'k3/artist/INFO_LOADING';

const initialState = {
  infoLoading: false,
  info: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ARTIST_INFO:
      return Object.assign({}, state, { info: action.payload.info, infoLoading: false });

    case INFO_LOADING:
      return Object.assign({}, state, { infoLoading: true });
  }
  return state;
}

function setInfoLoading(value) {
  return { type: INFO_LOADING, payload: { infoLoading: value } };
}

function setInfo(info) {
  return { type: GET_ARTIST_INFO, payload: { info: info} };
}

export function fetchArtistInfo(mbid) {
  return (dispatch) => {
    dispatch(setInfoLoading(true));

    const API = 'http://ws.audioscrobbler.com/2.0/';
    const API_METHOD = mbid.length === 36 ? 'mbid=' + mbid : 'artist=' + mbid;
    const ARTIST_INFO = '?method=artist.getInfo&' + API_METHOD + '&api_key=50255a0265dc1cc8d8b325c940f4ecd0&format=json&limit=50';

    console.log(API_METHOD);

    const options = {
      url: API + ARTIST_INFO,
      success: (response) => {
        dispatch(setInfo(response.artist));
      }
    };
    return $.ajax(options);
  }
}
