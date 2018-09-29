import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

//@material-ui
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'

class Login extends React.Component {
  state = {
    username: localStorage.getItem('username'),
    password: undefined,
    rememberMe: localStorage.getItem('rememberMe') === "true",
  }

  constructor(props) {
    super(props)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMe = this.handleRememberMe.bind(this)
    this.handleAuthenticate = this.handleAuthenticate.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleRememberMe(event) {
    const checked = event.target.checked
    localStorage.setItem('rememberMe', checked)
    this.setState({rememberMe: checked})
  }

  handleAuthenticate() {
    if (this.state.rememberMe) {
      localStorage.setItem('username', this.state.username)
    }
    this.props.onAuthenticate(this.state.username, this.state.password)
  }

  render() {
    const {classes} = this.props

    return (
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon/>
          </Avatar>
          <Typography variant="headline">Sign in</Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleUsernameChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handlePasswordChange}
              />
            </FormControl>
            <FormControlLabel
                control={
                  <Checkbox
                      checked={this.state.rememberMe}
                      onChange={this.handleRememberMe}
                      value="checkedB"
                      color="primary"

                  />
                }
                label={'Remember me'}
            />
            <Button
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
                onClick={this.handleAuthenticate}
            >
              Sign in
            </Button>
          </form>
        </Paper>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  onAuthenticate: PropTypes.func.isRequired,
}

export default withStyles(styles)(Login)
