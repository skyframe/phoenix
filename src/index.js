import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import withRoot from './withRoot'
import App from 'app/App'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//@material-ui
import {withStyles} from '@material-ui/core/styles'

//pages
import PublicHome from 'pages/public/Home'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const Index = () => {
  return (
      <Router>
        <Switch>
          <Route path={'/login'} component={PublicHome}/>
          <Route path={'/'} component={App}/>
        </Switch>
      </Router>
  )
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

const Root = withRoot(withStyles(styles)(Index))

ReactDOM.render(<Root/>, document.querySelector('#root'))
