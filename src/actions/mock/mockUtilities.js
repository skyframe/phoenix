import Authenticator from './authenticator/authenticator'

const dummyFetch = (url, request) => {
  const body = JSON.parse(request.body)
  const method = body.method
  const params = body.params[0]

  let jsonRpcResponse = {
    jsonRpc: '1.0',
    id: '1',
    result: undefined,
    error: undefined,
  }

  switch (method) {
    case 'Authenticator.Authenticate':
      const response = Authenticator.Authenticate(params)
      jsonRpcResponse.result = response.result
      jsonRpcResponse.error = response.error
      break
    default:
      jsonRpcResponse.error = 'Unknown method'
  }

  const fetchResponse = {
    json: () => jsonRpcResponse,
  }

  return new Promise((resolve, reject) => {
    resolve(fetchResponse)
  })

}

export function jsonRpcRequest({url, method, request, onStart, onSuccess, onError}) {
  onStart()

  let header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  })
  if (sessionStorage.getItem('accessToken')) {
    header.append('Authorization', sessionStorage.getItem('accessToken'))
  }
  let body = JSON.stringify({
    jsonrpc: '1.0',
    method: method,
    params: [request],
    id: '1',
  })

  return dummyFetch(
      url, {
        method: 'POST',
        headers: header,
        mode: 'cors',
        body: body,
      },
  ).then(responseObject => {
    return responseObject.json()
  }).then(response => {
    console.debug(method + ' jsonRpcRequest.response: ', response)
    if (response.result) {
      console.log(method + ' - success', response.result)
      onSuccess(response.result)
    } else {
      console.error(method + ' - error: ', response.error)
      if (response.error.message) {
        onError(response.error.message)
      } else {
        onError(response.error)
      }
    }
  }).catch(error => {
    console.error(method + ' jsonRpcRequest.error: ', error)
    onError('Unknown error for - ' + method)
  })
}
