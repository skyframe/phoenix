import uuidv1 from 'uuid/v1'

export function jsonRpcRequest({url, method, request, onStart, onSuccess, onError}) {
  onStart()
  let id = uuidv1()
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
    id: id,
  })
  console.debug(method + ' jsonRpcRequest.body: ', JSON.parse(body))
  return fetch(
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
