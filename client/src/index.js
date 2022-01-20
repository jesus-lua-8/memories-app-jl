import React from 'react';
import ReactDOM from 'react-dom';

//Provider is going to keep track of that store which is a global state and that allows us to access that store
//from anywhere inside of the app, we don't have to be in a parent component or child component
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
    
    );