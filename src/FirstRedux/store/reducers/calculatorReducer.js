import * as ActionType  from '../actions/ActionType'

export  function calculatorReducer(state=0,action)
{
  switch (action.type) {
    case ActionType.ADD:
     return  Number(action.valueA) + Number(action.valueB)
     case ActionType.SUBTRACK:
      return Number(action.valueA) - Number(action.valueB)
    default:
      return state;
  }
}

export function calculatorChangeOperationReducer(state='',action)
{
  switch (action.type) {
    case ActionType.CHANGE_OPERATION:
     return action.value
    default:
      return state;
  }
}

export function calculatorSetValueAReducer(state={valueA:0,valueB:0},action)
{
  let newState={}
  switch (action.type) {
    case ActionType.SET_VALUE_INPUT_A:
     newState = {valueA:Number(action.value),valueB:Number(state.valueB)}
     return newState;
     case ActionType.SET_VALUE_INPUT_B:
        newState = {valueA:Number(state.valueA),valueB:Number(action.value)}
      return newState;

    default:
      return state;
  }
}
