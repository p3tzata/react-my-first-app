import * as ActionType  from '../actions/ActionType'
import * as Const  from '../../config/constant'

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
  dispatch(begin_ajax())
    return fetch(url,requestOptions)
  //  .then(processResponse)
    .then(response => {
    dispatch(finish_ajax())
    return(response)
    })

    .catch(

      response => {
        dispatch(fail_ajax())
      if (response.data!=null) {
        console.log("Fail ")
      }}

    );


  };

}
