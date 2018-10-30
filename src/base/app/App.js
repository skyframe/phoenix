import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {bindActionCreators} from 'redux'
import {logout as onLogout} from 'redux/actions/authentication'
import connect from 'react-redux/es/connect/connect'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

//@material-ui
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'

//icons
import {FaUser} from 'react-icons/fa'

//styles
import styles from './styles'
import UserOverview from 'views/users/Overview'
import Home from 'views/home/System'
import Sidebar from 'components/sidebar/Sidebar'

class App extends React.Component {
  state = {
    open: true,
  }

  handleDrawerOpen = () => {
    this.setState({open: true})
  }

  handleDrawerClose = () => {
    this.setState({open: false})
  }

  openAvatar = event => {
    this.setState({anchorEl: event.currentTarget})
  }

  closeAvatar = event => {
    this.setState({anchorEl: null})
  }

  handleLogout = event => {
    this.props.onLogout()
    this.setState({anchorEl: null})
  }

  render() {
    const {classes, security} = this.props
    const {anchorEl} = this.state
    const open = Boolean(anchorEl)

    if (!security || !security.claims) {
      return <Redirect to={'/login'}/>
    }

    return (
        <Router>
          <div className={classes.root}>
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                        classes.menuButton,
                        this.state.open && classes.menuButtonHidden,
                    )}
                >
                  <MenuIcon/>
                </IconButton>
                <Typography variant="title" color="inherit" noWrap className={classes.title}>
                  Dashboard
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon/>
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={this.openAvatar}>
                  <FaUser/>
                </IconButton>
                <Menu
                    id="menu-avatar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.closeAvatar}
                >
                  <MenuItem onClick={this.closeAvatar}>Profile</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>

              </Toolbar>
            </AppBar>

            <Sidebar
                open={this.state.open}
                handleDrawerClose={this.handleDrawerClose}
            />

            <main className={classes.content}>
              <div className={classes.appBarSpacer}/>

              <Switch>
                <Route path={'/users'} component={UserOverview}/>
                <Route path={'/'} component={Home}/>
              </Switch>


              {/*<Typography variant="display1" gutterBottom>*/}
              {/*Orders*/}
              {/*</Typography>*/}
              {/*<Typography component="div" className={classes.chartContainer}>*/}
              {/*<SimpleLineChart/>*/}
              {/*</Typography>*/}
              {/*<Typography variant="display1" gutterBottom>*/}
              {/*Products*/}
              {/*</Typography>*/}
              {/*<div className={classes.tableContainer}>*/}
              {/*<SimpleTable/>*/}
              {/*</div>*/}
            </main>

          </div>
        </Router>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    security: state.security,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    onLogout,
  }, dispatch)
}

App = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App))
export default withStyles(styles)(App)
