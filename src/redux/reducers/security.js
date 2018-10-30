import moment from 'moment'
import {
  AUTHENTICATE_SUCCESS,
} from '../actions/actionTypes'

export default function security(state = {
  claims: parseToken(sessionStorage.getItem('accessToken')),
}, action) {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS:
      sessionStorage.setItem('accessToken', action.result.accessToken)
      return {
        ...state,
        claims: parseToken(action.result.accessToken),
        permissions: action.result.permissions,
      }
    default:
      return state
  }
}

let parseToken = (token) => {
  // Checking for string === "undefined" as storing an undefined value
  // in sessionStorage stores a string "undefined"
  // This case arises when queryString is unable to parse token from
  // url for some reason during registration
  if (token && !(token === 'undefined')) {
    try {
      let payloadData = token.substring(token.indexOf('.') + 1, token.lastIndexOf('.'))
      let payloadString = atob(payloadData)
      let payload = JSON.parse(payloadString)

      let expiry = moment.unix(payload.exp)
      let remaining = moment.duration(expiry.diff(moment()))
      console.log('Token parsed. It will expire in ' + remaining.as('minutes') + ' minutes')
      if (remaining <= 0) {
        sessionStorage.clear()
        return
      }
      return payload

    } catch (e) {
      console.error('Error while parsing token from local storage:', e)
    }
  }
  sessionStorage.clear()
}
