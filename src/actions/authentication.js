import {
  AUTHENTICATE_ERROR,
  AUTHENTICATE_STARTED,
  AUTHENTICATE_SUCCESS,
  LOGOUT,
} from './actionTypes'

import config from 'react-global-configuration'
import {jsonRpcRequest} from 'actions/mock/mockUtilities'

export function authenticateFailed(error) {
  return {type: AUTHENTICATE_ERROR, error}
}

export function authenticateSuccess(result) {
  return {type: AUTHENTICATE_SUCCESS, result}
}

export function authenticateStart() {
  return {type: AUTHENTICATE_STARTED}
}

export function authenticate(username, password) {
  console.log('authenticate = ', username, password)

  sessionStorage.removeItem('accessToken')
  return dispatch => {
    jsonRpcRequest({
      url: config.get('apiUrl'),
      method: 'Authenticator.Authenticate',
      request: {
        username,
        password,
      },
      onStart: () => dispatch(authenticateStart()),
      onSuccess: result => {
        dispatch(authenticateSuccess(result))
      },
      onError: error => dispatch(authenticateFailed(error)),
    })
  }
}

export function logout() {
  return {type: LOGOUT}
}
