
import * as Const  from '../../../Config/constant'

import * as unitFunc from '../../../Util/func'





export function getItems(user,payload) {
  return (dispatch) => {

  const url = `${Const.api_url}/posts/getMyPost`
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json','Accept':'application/json',
        'Authorization': user.Authorization
      }
	};
     return unitFunc.wrappedFetch(dispatch, url, requestOptions)

  };

}
