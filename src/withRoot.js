import React from 'react'
import {create} from 'jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import CssBaseline from '@material-ui/core/CssBaseline'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'redux/reducers'
import {Provider} from 'react-redux'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
})

// Create a JSS instance with the default preset of plugins.
// It's optional.
const jss = create(jssPreset())

// The standard class name generator.
// It's optional.
const generateClassName = createGenerateClassName()

const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore)

const initialState = {}
const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

function withRoot(Component) {
  function WithRoot(props) {
    // JssProvider allows customizing the JSS styling solution.
    return (
        <Provider store={store}>
          <JssProvider jss={jss} generateClassName={generateClassName}>
            {/* MuiThemeProvider makes the theme available down the React tree thanks to React context. */}
            <MuiThemeProvider theme={theme}>
              {/*CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline/>
              <Component {...props} />
            </MuiThemeProvider>
          </JssProvider>
        </Provider>
    )
  }

  return WithRoot
}

export default withRoot
