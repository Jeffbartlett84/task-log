import * as React from 'react';
import { render } from 'react-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import combineReducers from './reducers/index';
// import registerServiceWorker from './registerServiceWorker';


const store = createStore(combineReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
