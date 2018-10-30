import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconButton from '@material-ui/core/IconButton/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import Divider from '@material-ui/core/Divider/Divider'
import List from '@material-ui/core/List/List'
import {MainRoutes, secondaryListItems} from 'base/app/listItems'
import Drawer from '@material-ui/core/Drawer/Drawer'
import {withStyles} from '@material-ui/core'
import styles from './styles'

class Sidebar extends React.Component {
  render() {
    const {classes, open, handleDrawerClose} = this.props

    return (
        <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper,
                  !open && classes.drawerPaperClose),
            }}
            open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>

          <Divider/>
          <List>
            <MainRoutes/>
          </List>

          <Divider/>
          <List>{secondaryListItems}</List>
        </Drawer>
    )
  }
}

Sidebar.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

Sidebar = withStyles(styles)(Sidebar)
export default Sidebar
