import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'hi, its my first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.', likesCount: 11},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas porttitor euismod. Fusce faucibus, arcu non facilisis posuere, eros mi pharetra erat, vel molestie quam justo id nisl. Suspendisse mattis interdum dui vitae lobortis.', likesCount: 66},
    {id: 3, message: 'Ikj Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget.', likesCount: 131},

]

let dialogsData = [
    {id: 1, name: 'Maya'},
    {id: 2, name: 'Mark'},
    {id: 3, name: 'Tony'},
    {id: 4, name: 'Alla'}
]

let messagesData = [
    {id: 1, message: 'hi, lorem ipsum'},
    {id: 2, message: 'hi, lorem ipsum gjhgfkj djf jhd jfhkjdsh '},
    {id: 3, message: 'Ikj djfhfsk sdk skdjkdfj sdwoels woewiqow odkk'},
    {id: 4, message: 'qwoo hakai hsdk aja lskdoqp qpwo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
