import withRoot from 'withRoot'
import {withStyles} from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PublicHome from 'pages/public/Home'
import App from 'base/app/App'
import React from 'react'
import Base from 'base/Base'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const Root = withRoot(withStyles(styles)(() => {
  return <Base />
}))

export default Root
