import * as ActionType  from '../../actions/ActionType'

const initState = {
  resultSet:[{  }],
  currentSelectedEnity:{},
  selectedId:-1

}

export function publicTaskReducer(state=initState,action)
{
  let newArray;
  switch (action.type) {

    case (ActionType.DATA_RECEIVED):

    return Object.assign({},state,state.resultSet=action.payload )

  case(ActionType.SET_SELECTED_PUBLICTASK):
    return Object.assign({},state,state.selectedId=action.id )

    case(ActionType.ENTITY_RECEIVED):
      return Object.assign({},state,state.currentSelectedEnity=action.payload )

      case(ActionType.RECEIVED_PERSISTED_ENTITY):

const fndIndex = state.resultSet.findIndex( e => Number(e.postId)===Number(action.payload.postId) );

newArray=[...state.resultSet.slice(0,fndIndex), Object.assign({},action.payload), ...state.resultSet.slice(fndIndex+1)  ]

  //console.log(newArray);

        return Object.assign({},state,state.resultSet=newArray )



    default:
      return state;

  }



}
