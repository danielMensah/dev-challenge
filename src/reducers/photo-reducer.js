import ActionTypes from '../constants/action-types'

const initialState = [];

export default function(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_PHOTOS:
      return [ ...state, ...action.payload ];

    default:
      return state;
  }
}