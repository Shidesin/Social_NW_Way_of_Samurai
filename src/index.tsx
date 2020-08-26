import * as serviceWorker from './serviceWorker';
import state, {
    addMessage,
    addPost,
    RootStateType,
    sudscribe,
    updateNewMessageText,
    updateNewPostText
} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

let rerenderEntireTree  = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

sudscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
