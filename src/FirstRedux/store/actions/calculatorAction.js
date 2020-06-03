import * as ActionType  from '../actions/ActionType'


export function add(valueA,valueB) {
  return {
    type: ActionType.ADD,
    valueA: Number(valueA),
    valueB: Number(valueB)
  }
}

export function subtrack(valueA,valueB) {
  return {
    type: ActionType.SUBTRACK,
    valueA: Number(valueA),
    valueB: Number(valueB)
  }
}


export function changeOperation(value) {
    return {
      type: ActionType.CHANGE_OPERATION,
      value: value
}
}

export function set_value_input_a(value) {
    return {
      type: ActionType.SET_VALUE_INPUT_A,
      value: value
}
}

export function set_value_input_b(value) {
    return {
      type: ActionType.SET_VALUE_INPUT_B,
      value: value
}
}
