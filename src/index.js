import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Test_ from './FirstExams/Test_'
//import ContactBook from './contactBook/ContactBook'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
   <Test_ dataName="Test" dataInt={3} />
  </React.StrictMode>,
  document.getElementById('root')
);

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
