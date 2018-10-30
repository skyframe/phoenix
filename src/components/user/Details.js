import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField/TextField'

import {withStyles} from '@material-ui/core'
import classNames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import Grid from '@material-ui/core/Grid/Grid'

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.grey['100'],
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
})

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

class UserDetails extends React.Component {
  state = {
    firstName: 'Erick',
    lastName: 'Van Der Linde',
    identityNumber: '8707216548083',
    email: 'erick@skyframe.io',
    password: '12345',
    multiline: 'Controlled',
    currency: 'EUR',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const {classes} = this.props

    return (
        <form noValidate autoComplete="off" className={classes.container}>
          <Grid container >
            <Grid item xs={6}>
              <TextField
                  id="first-name"
                  label="First Name"
                  className={classes.textField}
                  value={this.state.firstName}
                  onChange={this.handleChange('firstName')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                  id="last-name"
                  label="Last Name"
                  className={classes.textField}
                  value={this.state.lastName}
                  onChange={this.handleChange('lastName')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                  id="identity-number"
                  label="Identity Number"
                  className={classes.textField}
                  value={this.state.identityNumber}
                  onChange={this.handleChange('identityNumber')}
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                  id="email-input"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                  id="password-input"
                  label="Password"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
              />
            </Grid>
          </Grid>
        </form>
    )
  }
}

UserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(UserDetails)
