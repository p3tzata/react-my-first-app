import * as ActionType  from '../actions/ActionType'
import * as Const  from '../../config/constant'
import * as CustomError from '../../Error/CustomError'
import { withRouter} from 'react-router-dom'

export function begin_ajax() {
  return {
    type: ActionType.AJAX_START
  }
}

export function finish_ajax() {
  return {
    type: ActionType.AJAX_FINISH
  }
}

export function fail_ajax() {
  return {
    type: ActionType.AJAX_FAIL
  }
}

export function login_success(paylaod) {

  return {
    type: ActionType.LOGIN_SUCCESS,
    paylaod
  }
}


export function logout() {

  return {
    type: ActionType.LOGOUT
  }
}

export function auth_token_expired() {

  return {
    type: ActionType.AUTH_TOKEN_EXPIRED
  }
}



export function register(payload) {
  return (dispatch) => {

  const url = `${Const.api_url}/register`
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json'
        //,'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjIzMDc3OX0.9Fbcr9KZQINhFnzKqjFr5_yVsz-cgOqt_LxDBNDOvUonMN-FRDUblvpbDySnkBJ6Zmmuahm0uCSQU1FPs1DH-Q"
      },
      body: JSON.stringify({
                username: payload.username,
                password: payload.password,
                confirmPassword: payload.confirmPassword })


	};

return wrappedFetch(dispatch, url, requestOptions)

  };

}






export function login(payload) {
  return (dispatch) => {

  const url = `${Const.api_url}/login`
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json'
        //,'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjIzMDc3OX0.9Fbcr9KZQINhFnzKqjFr5_yVsz-cgOqt_LxDBNDOvUonMN-FRDUblvpbDySnkBJ6Zmmuahm0uCSQU1FPs1DH-Q"
      },
      body: JSON.stringify({
                username: payload.username,
                password: payload.password})


	};
     return wrappedFetch(dispatch, url, requestOptions)

  };

}

export function getItems(auth,payload) {
  return (dispatch) => {

  const url = `${Const.api_url}/posts/getMyPost`
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': auth.Authorization
      }
	};
     return wrappedFetch(dispatch, url, requestOptions)

  };

}




function wrappedFetch(dispatch, url, requestOptions) {
    dispatch(begin_ajax())

    return fetch(url,requestOptions)
    .then(handleErrors)
    .then(response => {
          dispatch(finish_ajax())
          return(response)
    })
    //.catch((err) => {dispatch(fail_ajax()); console.log(err);return err})
    .catch((err) => {dispatch(fail_ajax());
      if (err instanceof CustomError.TokenExpired) {
      throw new CustomError.TokenExpired()
      }

      throw new Error('UnHandlered error: ' + err)
    })

}


 function handleErrors(response) {

if (!response) {

     throw new CustomError.NoResponse('error');
}

    const loginUrl = `${Const.api_url}/login`

    if (response.status === 403 && loginUrl!=response.url) {

      console.log('Should logout')
      throw new CustomError.TokenExpired()
    }

    return {statusCodeIsOk: response.ok, statusCode: response.status, data: response.json().catch( (err)=>{ return err } )    } ;
  //  return {resposneStatusIsOk: response.ok, statusCode: response.status, data: response.json().catch( (err)=>{ throw new CustomError.NoValidJson()  } )    } ;
}
