import * as ActionType  from '../actions/ActionType'

export default function calculatorLogReducer(state=[],action)
{
  switch (action.type) {
    case ActionType.ADD_COMMENT:
    const newState = state.slice();
      return newState.push(action.text)
    default:
      return state;
  }

}
