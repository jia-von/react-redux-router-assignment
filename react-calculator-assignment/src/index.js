import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import addNewResultLine from './actions/addNewResultLine';
import resultReducer from './reducers/resultreducer';





 /**
 * Redux Store
 * Store is the full representation of our state. It is a complex object that
 * keeps track of the state data, and will help us operate on it using defined
 * reducers/actions.
 */

 const store = createStore(resultReducer);

 /**
 * Redux Dispatch
 * Dispatch is used for us to send commands for mutation/manipulation/reads from
 * our store/state data.
 */

 store.dispatch(addNewResultLine("testing1"));
 store.dispatch(addNewResultLine("testing2"));
 store.dispatch(addNewResultLine("testing3"));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);