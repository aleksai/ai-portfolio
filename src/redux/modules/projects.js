const PROJECTS = [
  {
    name:'social-studio',
    title: 'Social Studio',
    company: 'Salesforce',
    technology: 'Javascript, Backbone JS, HTML/CSS',
    imageUrl: '../../resources/images/social_studio.png'
  },
  {
    name: 'e-console',
    title: 'Log Harvester',
    company: 'Salesforce',
    technology: 'Adobe Flex, Javascript',
    imageUrl: '../../resources/images/harvester.png'
  },
  {
    name: 'k3-music',
    title: 'Klevrly Music',
    company: 'Independent',
    technology: 'Javascript, React JS, HTML/CSS',
    imageUrl: '../../resources/images/klevrly.png'
  },
  {
    name: 'ec',
    title: 'Engagement Console',
    company: 'Radian6',
    technology: 'Adobe Flex, Javascript',
    imageUrl: '../../resources/images/ec.png'
  }
];

const UPDATE_PROJECT  = 'ai-profile/projects/UPDATE_PROJECT';

export function updateProject(fieldName, value) {
  return { type: UPDATE_PROJECT, payload: { fieldName, value } };
}

const initialState = {
  projectList: PROJECTS
};

export default function reducer(state = initialState, action) {
  const { payload = {} } = action;
  switch (action.type) {
    case UPDATE_PROJECT:
      const newState = Object.assign({}, state);
      newState[payload.filename] = payload.value;
      return Object.assign({}, state, newState);

    default:
      return state
  }
}

