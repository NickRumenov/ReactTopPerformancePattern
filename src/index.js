import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import {loadHomePage} from './middleware';

const middleware = applyMiddleware(thunk);
const devToolExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(
    rootReducer,
    compose(middleware, devToolExtension)
);

store.dispatch(
    loadHomePage()
);


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));