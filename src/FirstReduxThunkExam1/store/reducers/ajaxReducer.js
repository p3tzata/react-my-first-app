import * as ActionType  from '../actions/ActionType'


export function ajaxReducer(state={queries:0},action)
{

  switch (action.type) {

    case(ActionType.AJAX_START):
    console.log(state)
  return Object.assign({},state,state.queries=Number(state.queries)+1)

    case(ActionType.AJAX_FINISH):
    case(ActionType.AJAX_FAIL):
    
    return Object.assign({},state,state.queries=Number(state.queries)-1)

    default:
      return state;

  }



}
