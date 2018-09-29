import {combineReducers} from 'redux'
import {LOGOUT} from 'actions/actionTypes'
import security from 'reducers/security'

const appReducer = combineReducers({
  security,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
    sessionStorage.removeItem('accessToken')
  }

  return appReducer(state, action)
}

export default rootReducer
