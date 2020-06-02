import * as ActionType  from '../actions/ActionType'

export function add(value) {
  return {
    type: ActionType.ADD,
    value: value
  }
}

export function subtrack(value) {
    return {
      type: ActionType.SUBTRACK,
      value: value
}

}
