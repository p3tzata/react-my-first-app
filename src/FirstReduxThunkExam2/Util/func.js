import * as AjaxActionCreator from '../store/actions/FrameWorkActionCreator/AjaxActionCreator'
import * as AccountActionCreator from '../store/actions/FrameWorkActionCreator/AccountActionCreator'
import * as CustomError from '../Error/CustomError'
import * as Const from '../Config/constant'



export function wrappedFetch(dispatch, url, requestOptions) {
    dispatch(AjaxActionCreator.begin_ajax())

    return fetch(url,requestOptions)
    .then(handleErrors)
    .then(response => {
          dispatch(AjaxActionCreator.finish_ajax())
          return(response)
    })
    //.catch((err) => {dispatch(fail_ajax()); console.log(err);return err})
    .catch((err) => {
      dispatch(AjaxActionCreator.fail_ajax());
      if (err instanceof CustomError.TokenExpired) {
        dispatch(AccountActionCreator.auth_token_expired())
        throw new CustomError.TokenExpired()

      }

      throw new Error(err.message)
    })

}


 function handleErrors(response) {

if (!response) {

     throw new CustomError.NoResponse('error');
}

    const loginUrl = `${Const.api_url}/login`

    if (response.status === 403 && loginUrl!==response.url) {

     console.log('Should logout')
      throw new CustomError.TokenExpired()

    }

    return {statusCodeIsOk: response.ok, statusCode: response.status, data: response.json().catch( (err)=>{ return err } )    } ;
  //  return {resposneStatusIsOk: response.ok, statusCode: response.status, data: response.json().catch( (err)=>{ throw new CustomError.NoValidJson()  } )    } ;
}

export function generatePageableString(pageable) {
  //return 'page='+ pageable.pageNumber +'&' + 'size='+pageable.pageSize
  return `page=${pageable.RequestPageNumber}&size=${pageable.pageSize}`
}

export function addRequestParamToQueryString(queryString,paramObj) {
  //return 'page='+ pageable.pageNumber +'&' + 'size='+pageable.pageSize
  return  queryString+'&'+paramObj.name+'='+paramObj.value;
}


export function consolidateAfterDeleting(sourceArray,fndFunction,executeSetState) {

  const fndIndex = sourceArray.findIndex( fndFunction  );
  console.log(fndIndex);
  if (Number(fndIndex)>=0) {
  let newArray;
  newArray=[...sourceArray.slice(0,fndIndex), ...sourceArray.slice(fndIndex+1)  ]
  executeSetState(newArray)

}
}

export function consolidateAfterEditing(sourceArray,fndFunction,executeSetState,object) {

  const fndIndex = sourceArray.findIndex( fndFunction  );
  console.log(fndIndex);
  if (Number(fndIndex)>=0) {
  let newArray;
  newArray=[...sourceArray.slice(0,fndIndex), object , ...sourceArray.slice(fndIndex+1)  ]
  executeSetState(newArray)

  }
}
