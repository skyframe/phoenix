import React from 'react'
import {bindActionCreators} from 'redux'
import connect from 'react-redux/es/connect/connect'
import App from 'base/app/App'
import Public from 'base/public/Public'

class Base extends React.Component {
  render() {
    const {security} = this.props
    if (security && security.claims) {
      return <App/>
    }
    return <Public/>
  }
}

const mapStateToProps = state => {
  return {
    security: state.security,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
}

Base = connect(mapStateToProps, mapDispatchToProps)(Base)
export default Base
