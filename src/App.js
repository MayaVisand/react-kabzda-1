import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {Routes, Route, BrowserRouter} from "react-router-dom";
import store from "./redux/state";


const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/dialogs'
                                   element={<Dialogs state={store.getState()}/>}/>
                            <Route path='/profile'
                                   element={<Profile state={store.getState()}/>}/>
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
    );
}

export default App;
