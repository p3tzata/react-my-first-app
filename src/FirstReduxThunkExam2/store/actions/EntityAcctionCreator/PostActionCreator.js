
import * as Const  from '../../../Config/constant'

import * as unitFunc from '../../../Util/func'





export function getItems(user,payload) {
  return (dispatch) => {

    let queryString=''
    if (payload.pageable!=null) {
    queryString=unitFunc.generatePageableString(payload.pageable);
   //console.log(unitFunc.generatePageableString(payload.pageable))
  }
   if (typeof payload.querySearchString!=="undefined") {
     //queryString=queryString+'&'+payload.querySearchString
    queryString = unitFunc.addRequestParamToQueryString(queryString,{name: "querySearchString",value: payload.querySearchString})

   }
//console.log(queryString)

  const url = `${Const.api_url}/posts/getMyPost?${queryString}`
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': user.Authorization
      }
	};
     return unitFunc.wrappedFetch(dispatch, url, requestOptions)

  };

}

export function deleteItem(user,payload) {
  return (dispatch) => {
    const url = `${Const.api_url}/posts/${payload.postId}`
      const requestOptions = {
          method: 'delete',
          headers: { 'Content-Type': 'application/json','Accept':'application/json',
          'Authorization': user.Authorization
        }
    };
       return unitFunc.wrappedFetch(dispatch, url, requestOptions)

  }
}
