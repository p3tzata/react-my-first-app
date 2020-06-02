import * as ActionType  from '../actions/ActionType'

export default function calculatorReducer(state=0,action)
{
  switch (action.type) {
    case ActionType.ADD:
     return state + action.value
     case ActionType.SUBTRACK:
      return state - action.value
    default:
      return state;
  }
}
