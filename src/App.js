import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {mainListItems, secondaryListItems} from './app/listItems'
import SimpleLineChart from './app/SimpleLineChart'
import SimpleTable from './app/SimpleTable'

//@material-ui
import {withStyles} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {FaUser} from 'react-icons/fa'
import Menu from '@material-ui/core/Menu/Menu'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import {bindActionCreators} from 'redux'
import {logout as onLogout} from 'actions/authentication'
import connect from 'react-redux/es/connect/connect'
import {Redirect} from 'react-router-dom'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
})

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
      return <Redirect to={"/login"}/>
    }

    return (
        <React.Fragment>
          <CssBaseline/>
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
            <Drawer
                variant="permanent"
                classes={{
                  paper: classNames(classes.drawerPaper,
                      !this.state.open && classes.drawerPaperClose),
                }}
                open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon/>
                </IconButton>
              </div>
              <Divider/>
              <List>{mainListItems}</List>
              <Divider/>
              <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.appBarSpacer}/>
              <Typography variant="display1" gutterBottom>
                Orders
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <SimpleLineChart/>
              </Typography>
              <Typography variant="display1" gutterBottom>
                Products
              </Typography>
              <div className={classes.tableContainer}>
                <SimpleTable/>
              </div>
            </main>
          </div>
        </React.Fragment>
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
