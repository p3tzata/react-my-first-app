import * as ActionType  from '../../actions/ActionType'

const defaultState={isExpiredAuth: 0, isRedirectToHome:0, user:{}}

export function accountReducer(state=defaultState,action)
{

  switch (action.type) {

    case(ActionType.LOGIN_SUCCESS):

    const newState=Object.assign({},{isExpiredAuth:0},{isRedirectToHome:1},{user:action.paylaod})

    localStorage.setItem('account', JSON.stringify(action.paylaod));
    //return Object.assign({},{isExpiredAuth:0},{isRedirectToHome:1},{user:action.paylaod})
    return Object.assign({},newState);


    case(ActionType.LOGOUT):
    localStorage.setItem('account', JSON.stringify(defaultState));
    return Object.assign({},defaultState)

    case(ActionType.AUTH_TOKEN_EXPIRED):
    return Object.assign({},state,{isExpiredAuth: 1} )


    case(ActionType.CLEAR_REDIRECT_TO_HOME):
    return Object.assign({},state,{isRedirectToHome:0} )



    default:
      return state;

  }



}
