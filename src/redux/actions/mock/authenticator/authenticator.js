import moment from 'moment'

const authenticate = request => {
  if (request) {
    // if (request && request.username === 'admin' && request.password === 'admin') {
    return {
      result: {
        loginClaims: {
          username: request.username,
        },
        accessToken: 'aaa.' + btoa(JSON.stringify({
          exp: moment().add(1, 'h').unix(),
        })) + '.zzz',
      },
    }
  } else {
    return {
      error: {
        message: 'Invalid username or password: Must be admin admin',
      },
    }
  }
}

const Authenticator = {
  Authenticate: authenticate,
}

export default Authenticator
