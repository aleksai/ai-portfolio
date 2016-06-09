
const CHANGE_THEME  = 'ai-profile/theme/CHANGE_THEME';

const initialState = {
  name: 'dark'
};

export default function reducer(state = initialState, action) {
  const { payload = {} } = action;
  switch (action.type) {
    case CHANGE_THEME:
      return Object.assign({}, state, { name: payload.theme });

    default:
      return state
  }
}

export function changeTheme(theme) {
  return { type: CHANGE_THEME, payload: { theme } };
}
