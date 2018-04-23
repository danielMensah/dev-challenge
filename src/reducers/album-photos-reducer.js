import ActionTypes from '../constants/action-types'

const initialState = [];

export default function(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.SET_ALBUM_PHOTOS:
      return [ ...action.payload ];

    case ActionTypes.RESET:
      return [];

    default:
      return state;
  }
}