
const GET_TOP_TRACKS  = 'k3/charts/GET_TOP_TRACKS';
const GET_TOP_ARTISTS  = 'k3/charts/GET_TOP_ARTISTS';
const GET_TOP_ALBUMS  = 'k3/charts/GET_TOP_ALBUMS';

const TRACKS_LOADING = 'k3/charts/TRACKS_LOADING';

const initialState = {
  topTracks: [],
  topArtists: [],
  topAlbums: [],
  tracksLoading: false,
  artistsLoading: false,
  albumsLoading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_TRACKS:
      return Object.assign({}, state, { topTracks: action.payload.tracks.track });

    case GET_TOP_ARTISTS:
      return state;

    case GET_TOP_ALBUMS:
      return state;
      break;

    case TRACKS_LOADING:
      return Object.assign({}, state, { tracksLoading: action.payload.isLoading });
      break;
  }
  return state;
}

function setTracks(tracks) {
  return { type: GET_TOP_TRACKS, payload: { tracks: tracks} };
}

function tracksLoading(isLoading) {
  return { type: TRACKS_LOADING, payload: { isLoading: isLoading} };
}

export function fetchTopTracks() {
  return (dispatch) => {
    dispatch(tracksLoading(true));

    const API = 'http://ws.audioscrobbler.com/2.0/';
    const TOP_TRACKS = '?method=chart.gettoptracks&api_key=50255a0265dc1cc8d8b325c940f4ecd0&format=json&limit=50';

    const options = {
      url: API + TOP_TRACKS,
      success: (response) => {
        dispatch(setTracks(response.tracks));
      }
    };
    return $.ajax(options);
  }
}