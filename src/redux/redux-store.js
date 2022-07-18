import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

let appReducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sideBar: sideBarReducer
    }
)

let store = createStore(appReducers)

//функция редакса combineReducers обьединяет редьюсеры,
// после этого мы отдаем редбюсеры через функцию createStore
// которая создает стор от редакс
export default store;