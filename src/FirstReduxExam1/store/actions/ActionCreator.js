import * as ActionType  from '../actions/ActionType'


export function add() {
  return {
    type: ActionType.ADD

  }
}


export function remove() {
  return {
    type: ActionType.REMOVE

  }
}

export function setEditMode(index) {
  return {
    type: ActionType.SET_EDIT_MODE,
    index

  }
}

export function cancelEditMode() {
  return {
    type: ActionType.CANCEL_EDIT_MODE
  }
}

export function save(payload) {
  return {
    type: ActionType.SAVE,
    payload
  }
}
