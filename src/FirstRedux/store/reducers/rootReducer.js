import { combineReducers } from 'redux';


import calculatorReducer from './calculatorReducer'
import calculatorLogReducer from './calculatorLogReducer'

const rootReducer = combineReducers({
  calculatorReducer,
  calculatorLogReducer
});
export default rootReducer;
