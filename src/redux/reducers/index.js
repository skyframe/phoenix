import {combineReducers} from 'redux'
import {LOGOUT} from 'redux/actions/actionTypes'
import security from 'redux/reducers/security'

const appReducer = combineReducers({
  security,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
    sessionStorage.clear()
  }

  return appReducer(state, action)
}

export default rootReducer
