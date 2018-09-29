import React from 'react'
import {bindActionCreators} from 'redux'
import Login from './Login'
import {authenticate} from 'actions/authentication'
import {connect} from 'react-redux'

class LoginContainer extends React.Component {
  render() {
    return <Login onAuthenticate={this.props.authenticate}/>
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    authenticate,
  }, dispatch)
}

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default LoginContainer
