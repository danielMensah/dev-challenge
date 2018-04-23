import ActionTypes from '../constants/action-types';
import Routes from '../constants/routes';
import ajax from '../util/ajax';

export function getUsers() {
  return (dispatch) => {
    let request = ajax(Routes.GET_USERS, 'GET');

    request.then((response) => {
      dispatch({
        type: ActionTypes.GET_USERS,
        payload: response
      })
    }).catch(e => {
      throw new Error(`Exception status ${e.status}. Response => ${e.responseText}`)
    });

    return request;

  }
}

export function getAlbums() {
  return (dispatch) => {
    let request = ajax(Routes.GET_ALBUMS, 'GET');

    request.then((response) => {
      dispatch({
        type: ActionTypes.GET_ALBUMS,
        payload: response
      })
    }).catch(e => {
      throw new Error(`Exception status ${e.status}. Response => ${e.responseText}`)
    });

    return request;

  }
}

export function setUserAlbum(albums, name) {
  return dispatch => {
    dispatch({
      type: ActionTypes.GET_USER_ALBUM,
      payload: { albums, name}
    });
  }
}

export function getPhotos() {
  return (dispatch) => {
    let request = ajax(Routes.GET_PHOTOS, 'GET');

    request.then((response) => {
      dispatch({
        type: ActionTypes.GET_PHOTOS,
        payload: response
      })
    }).catch(e => {
      throw new Error(`Exception status ${e.status}. Response => ${e.responseText}`)
    });

    return request;

  }
}

export function setAlbumPhotos(photos) {
  return dispatch => {
    dispatch({
      type: ActionTypes.SET_ALBUM_PHOTOS,
      payload: photos
    });
  }
}

export function reset() {
  return dispatch => {
    dispatch({
      type: ActionTypes.RESET,
    });
  }
}