import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import withRoot from './withRoot'
import config from 'react-global-configuration'
import App from './base/app/App'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//@material-ui
import {withStyles} from '@material-ui/core/styles'

//pages
import PublicHome from 'pages/public/Home'
import Root from 'Root'

config.set({
  apiUrl: 'localhost:9006/api/v1',
})

// const Index = () => {
//   return (
//
//   )
// }
//
// Index.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

ReactDOM.render(<Root/>, document.querySelector('#root'))
