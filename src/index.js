import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';


let rerenderEntireTree = (state) => {
debugger
    ReactDOM.render(
        <React.StrictMode>
            {/*<Provider store={store}>*/}
            {/*    <App />*/}
            {/*</Provider>*/}
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


