import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import users from './user-reducer'
import albums from './album-reducer'
import photos from './photo-reducer'
import userAlbum from './user-album-reducer'
import albumPhotos from './album-photos-reducer'

export default combineReducers({
  routing,
  users,
  albums,
  userAlbum,
  photos,
  albumPhotos

})
