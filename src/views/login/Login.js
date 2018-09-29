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

function Login(props) {
  const {classes} = props

  return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon/>
        </Avatar>
        <Typography variant="headline">Sign in</Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
          </FormControl>
          <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
              onClick={props.onSignIn}
          >
            Sign in
          </Button>
        </form>
      </Paper>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  onSignIn: PropTypes.func.isRequired,
}

export default withStyles(styles)(Login)
