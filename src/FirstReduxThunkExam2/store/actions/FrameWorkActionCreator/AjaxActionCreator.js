import * as ActionType  from '../ActionType'


export function begin_ajax() {
  return {
    type: ActionType.AJAX_START
  }
}

export function finish_ajax() {
  return {
    type: ActionType.AJAX_FINISH
  }
}

export function fail_ajax() {
  return {
    type: ActionType.AJAX_FAIL
  }
}
