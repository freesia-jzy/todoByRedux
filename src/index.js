import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppComponent from './container/index';
import todoApp from './reducers';

console.log(0)
const store = createStore(todoApp);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppComponent/>
  </Provider>,
  document.getElementById('app')
);
