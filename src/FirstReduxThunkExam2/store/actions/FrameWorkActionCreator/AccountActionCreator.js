import * as ActionType  from '../../actions/ActionType'
import * as Const  from '../../../Config/constant'
import * as CustomError from '../../../Error/CustomError'
import * as AjaxActionCreator from './AjaxActionCreator'
import * as unitFunc from '../../../Util/func'

export function login_success(paylaod) {

  return {
    type: ActionType.LOGIN_SUCCESS,
    paylaod
  }
}

export function clear_redirect_to_home(){
  return {
    type: ActionType.CLEAR_REDIRECT_TO_HOME
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

return unitFunc.wrappedFetch(dispatch, url, requestOptions)


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
     return unitFunc.wrappedFetch(dispatch, url, requestOptions)

  };

}
