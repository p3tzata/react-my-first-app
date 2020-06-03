import * as ActionType  from '../actions/ActionType'

const initState = {
  arrayInput:[{ inputName:'Test name' }],
  editModeIndex:-1

}

export function inputReducer(state=initState,action)
{
  let newArrayInput;
  switch (action.type) {
    case ActionType.ADD:

     newArrayInput=[...state.arrayInput, Object.assign({},{  inputName:'Default name' } ) ]

     const result =Object.assign( {} , state, state.arrayInput=[...newArrayInput])
     console.log(result)
    return result

case ActionType.REMOVE:

     newArrayInput = [...state.arrayInput.slice(0, state.arrayInput.length-1 )]

    return Object.assign( {} , state, state.arrayInput=newArrayInput )


case ActionType.SET_EDIT_MODE:

return Object.assign({} , state, state.editModeIndex= Number(action.index))


case ActionType.CANCEL_EDIT_MODE:
return Object.assign({} , state, state.editModeIndex= -1)


case ActionType.SAVE:
console.log(action.payload.index)

 newArrayInput=[...state.arrayInput.slice(0,action.payload.index), Object.assign({},{  inputName:action.payload.stringName } ), ...state.arrayInput.slice(action.payload.index+1) ]

return Object.assign( {} , state, state.arrayInput=newArrayInput,state.editModeIndex=-1 )


    default:
      return state;

  }



}
