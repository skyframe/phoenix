import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

//@material-ui

//icons

//styles
import LoginContainer from 'views/login/LoginContainer'

const Public = props => {
  return (
      <Router>
        <Switch>
          <Route path={'/welcome'} component={LoginContainer}/>
          <Route path={'/'} component={LoginContainer}/>
        </Switch>
      </Router>
  )
}

Public.propTypes = {}
export default Public
