import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

//@material-ui
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'

//views
import Login from 'views/login/Login'

const Home = (props) => {
  const {classes} = props

  return (
      <React.Fragment>
        <CssBaseline/>
        <main className={classes.layout}>
          <Login onSignIn={props.onSignIn}/>
        </main>
      </React.Fragment>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  onSignIn: PropTypes.func.isRequired,
}

export default withStyles(styles)(Home)
