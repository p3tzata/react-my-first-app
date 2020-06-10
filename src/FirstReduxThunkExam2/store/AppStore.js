import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'




const AppStore = createStore(rootReducer,applyMiddleware(thunk));
export default AppStore;
