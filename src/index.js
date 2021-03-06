import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';



//import Test_ from './FirstExams/Test_'
//import ContactBook from './contactBook/ContactBook'
//import App from './exam1/App'
//import App from './exam1a/App'
//import App from './eventsExamL/App'
//import App from './firstRouter/App'
//import App from './PostNonRedux/App'

//import App from './FirstReduxExam1/App'
//import AppStore from './FirstReduxExam1/store/AppStore'
import App from './FirstReduxThunkExam2/App'
import AppStore from './FirstReduxThunkExam2/store/AppStore'





ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
        <Router>
            <App />
        </Router>
    </Provider>



  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*


ReactDOM.render(
  <React.StrictMode>
   <ContactBook />
  </React.StrictMode>,
  document.getElementById('root')
);

*/






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
