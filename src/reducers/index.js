import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import ActionTypes from '../constants/action-types'

const initialState = [];

export default combineReducers({
  routing,
  users,
  albums,
  userAlbum,
  photos,
  albumPhotos,

})

function users(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_USERS:
      return [ ...state, ...action.payload ];

    default:
      return state;
  }
}

function albums(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_ALBUMS:
      return [ ...state, ...action.payload ];

    default:
      return state;
  }
}

function photos(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_PHOTOS:
      return [ ...state, ...action.payload ];

    default:
      return state;
  }
}

function userAlbum(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.GET_USER_ALBUM:
      const albums = action.payload.albums;
      const user = action.payload.name;
      return { albums, user };

    default:
      return state;
  }
}

function albumPhotos(state = initialState, action = {}) {
  switch(action.type) {

    case ActionTypes.SET_ALBUM_PHOTOS:
      return [ ...action.payload ];

    case ActionTypes.RESET:
      return [];

    default:
      return state;
  }
}
