import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


let rerenderEntireTree  = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree();

store.sudscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
