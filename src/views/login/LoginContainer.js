import React from 'react'
import {bindActionCreators} from 'redux'
import Login from './Login'
import {authenticate} from 'redux/actions/authentication'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LoginContainer extends React.Component {
  render() {
    if (this.props.security && this.props.security.claims) {
      return <Redirect to={"/home"}/>
    }
    return <Login onAuthenticate={this.props.authenticate}/>
  }
}

const mapStateToProps = state => {
  return {
    security: state.security,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authenticate,
  }, dispatch)
}

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default LoginContainer
