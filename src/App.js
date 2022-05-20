import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {Routes, Route, BrowserRouter} from "react-router-dom";


const App = (props) => {
    console.log(props)
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                            <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                        </Routes>
                    </BrowserRouter>

                </div>
            </div>
    );
}

export default App;
