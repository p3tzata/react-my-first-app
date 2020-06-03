import { combineReducers } from 'redux';


import {calculatorReducer,calculatorChangeOperationReducer,calculatorSetValueAReducer}  from './calculatorReducer'
import calculatorLogReducer from './calculatorLogReducer'

const rootReducer = combineReducers({
  calculatorReducer,
  calculatorChangeOperationReducer,
  calculatorSetValueAReducer,
  calculatorLogReducer
});
export default rootReducer;
