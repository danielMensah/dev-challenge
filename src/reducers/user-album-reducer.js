import ActionTypes from '../constants/action-types'

const initialState = [];

export default function(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_USER_ALBUM:
      const albums = action.payload.albums;
      const user = action.payload.name;
      return { albums, user };

    default:
      return state;
  }
}