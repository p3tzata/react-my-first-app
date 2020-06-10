import { combineReducers } from 'redux';


import {publicTaskReducer}  from './publicTaskReducer'
import {ajaxReducer} from './ajaxReducer'



const rootReducer = combineReducers({
  publicTask: publicTaskReducer,
  ajaxTask: ajaxReducer
});
export default rootReducer;
