import * as ActionType  from '../actions/ActionType'


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























export function set_selected_publicTask(id) {
  return {
    type: ActionType.SET_SELECTED_PUBLICTASK,
    id
  }

}

export function received_data(payload) {
  return {
    type: ActionType.DATA_RECEIVED,
    payload
  }
}

export function received_persisted_entity(payload) {
  return {
    type: ActionType.RECEIVED_PERSISTED_ENTITY,
    payload
  }
}

export function entity_received(payload) {
  return {
    type: ActionType.ENTITY_RECEIVED,
    payload
  }
}





export function fetchDataAll() {
  return (dispatch) => {
  //  const url = 'http://127.0.0.1:8080/publicTasks'
  const url = 'http://127.0.0.1:8080/posts/getMyPost'
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjIzMDc3OX0.9Fbcr9KZQINhFnzKqjFr5_yVsz-cgOqt_LxDBNDOvUonMN-FRDUblvpbDySnkBJ6Zmmuahm0uCSQU1FPs1DH-Q"
      }
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
  dispatch(begin_ajax())
    return fetch(url,requestOptions)
    .then(processResponse)
    .then(response => {

    //  console.log(response.data._embedded.publicTasks);
    //  dispatch(received_data(response.data._embedded.publicTasks));
      dispatch(received_data(response.data));
      dispatch(finish_ajax())
    })
    .catch(

      response => {
        dispatch(fail_ajax())
      if (response.data!=null) {
        console.log("Fail ")
      }}

      );}

}


export function fetchDataById(id) {
  return (dispatch) => {
  //  const url = 'http://127.0.0.1:8080/publicTasks'
  const url = 'http://127.0.0.1:8080/posts/'.concat(id)
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjIzMDc3OX0.9Fbcr9KZQINhFnzKqjFr5_yVsz-cgOqt_LxDBNDOvUonMN-FRDUblvpbDySnkBJ6Zmmuahm0uCSQU1FPs1DH-Q"
      }
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
  dispatch(begin_ajax())
    return fetch(url,requestOptions)
    .then(processResponse)
    .then(response => {
      dispatch(finish_ajax())
    //  console.log(response.data._embedded.publicTasks);
    //  dispatch(received_data(response.data._embedded.publicTasks));
      dispatch(entity_received(response.data));
    })
    .catch(

      response => {
        dispatch(fail_ajax())
      if (response.data!=null) {
        console.log("Fail ")
      }}

      );}

}

export function updateEntity(payload) {
  return (dispatch) => {
  //  const url = 'http://127.0.0.1:8080/publicTasks'
  const url = 'http://127.0.0.1:8080/posts/'.concat(payload.postId)
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MjIzMDc3OX0.9Fbcr9KZQINhFnzKqjFr5_yVsz-cgOqt_LxDBNDOvUonMN-FRDUblvpbDySnkBJ6Zmmuahm0uCSQU1FPs1DH-Q"
      },
      body: JSON.stringify({
                postId: payload.postId,
                description: payload.description,
                title: payload.title,
                url: payload.url })
	   //	body: JSON.stringify({ title: 'React POST Request Example' })

	};
  dispatch(begin_ajax())
    return fetch(url,requestOptions)
    .then(processResponse)
    .then(response => {
    dispatch(finish_ajax())

      dispatch(received_persisted_entity(response.data));
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




function processResponse(response) {

const contentType = response.headers.get("content-type");
if (contentType && contentType.indexOf("application/json") !== -1) {
return new Promise((resolve, reject) => {
// will resolve or reject depending on status, will pass both "status" and "data" in either case

let func;

   response.status < 400 ? func = resolve : func = reject;
 response.json().then(data => func({'status': response.status, 'data': data}));

})
} else {
return response;
}



}
