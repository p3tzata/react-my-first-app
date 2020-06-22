import { combineReducers } from 'redux';


import {publicTaskReducer}  from './EntityReducer/publicTaskReducer'
import {ajaxReducer} from './FrameWorkReducer/ajaxReducer'
import {accountReducer} from './FrameWorkReducer/accountReducer'



const rootReducer = combineReducers({
  publicTask: publicTaskReducer,
  ajaxTask: ajaxReducer,
  account: accountReducer
});
export default rootReducer;
