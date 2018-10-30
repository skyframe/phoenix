import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PeopleIcon from '@material-ui/icons/People'
import BarChartIcon from '@material-ui/icons/BarChart'
import LayersIcon from '@material-ui/icons/Layers'
import AssignmentIcon from '@material-ui/icons/Assignment'
import {Link, NavLink, withRouter} from 'react-router-dom'

const mainListItems = props => (
    <div>
      <ListItem button onClick={() => props.history.push('/users')}>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText>
          Dashboard
        </ListItemText>
      </ListItem>

      <ListItem button onClick={() => props.history.push('/orders')}>
        <ListItemIcon>
          <ShoppingCartIcon/>
        </ListItemIcon>
        <ListItemText>
          Orders
        </ListItemText>
      </ListItem>

      <ListItem button onClick={() => props.history.push('/customers')}>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Customers"/>
      </ListItem>

      <ListItem button onClick={() => props.history.push('/reports')}>
        <ListItemIcon>
          <BarChartIcon/>
        </ListItemIcon>
        <ListItemText primary="Reports"/>
      </ListItem>

      <ListItem button onClick={() => props.history.push('/integrations')}>
        <ListItemIcon>
          <LayersIcon/>
        </ListItemIcon>
        <ListItemText primary="Integrations"/>
      </ListItem>

    </div>
)
export const MainRoutes = withRouter(mainListItems)

export const secondaryListItems = (
    <div>
      <ListSubheader inset>Saved reports</ListSubheader>

      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Current month"/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Last quarter"/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Year-end sale"/>
      </ListItem>

    </div>
)
