import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import withRoot from '../withRoot'
import SignIn from './sign-in/SignIn'
import Dashboard from './dashboard/Dashboard'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

class Index extends React.Component {
  state = {
    signedIn: false,
  }

  render() {
    const {classes} = this.props

    return (
        <div>
          {this.state.signedIn &&
          <Dashboard/>
          }
          {!this.state.signedIn &&
          <SignIn onSignIn={() => this.setState({signedIn: true})}/>
          }
        </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
