import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';



ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);
//@ts-ignore
window.store = store

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
