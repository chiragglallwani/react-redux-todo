import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //handling redux dev tools extension

ReactDOM.render(<Provider store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>
    <App /></Provider>, document.querySelector('#root'));