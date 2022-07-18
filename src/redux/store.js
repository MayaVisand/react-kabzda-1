import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";


let store = {
    _state:
        {
            profilePage: {
                posts: [
                    {id: 1, message: 'hi, its my first post', likesCount: 11},
                    {id: 2, message: 'hi, where lorem ipsum gjhgfkj djf jhd jfhkjdsh ', likesCount: 66},
                    {id: 3, message: 'Ikj djfhfsk sdk skdjkdfj sdwoels woewiqow odkk', likesCount: 131},
                ],
                newPostText: 'blaBla bla'
            },
            messagesPage: {
                dialogs: [
                    {id: 1, name: 'Maya'},
                    {id: 2, name: 'Mark'},
                    {id: 3, name: 'Tony'},
                    {id: 4, name: 'Alla'}
                ],
                messages: [
                    {id: 1, message: 'hi, lorem ipsum'},
                    {id: 2, message: 'hi, lorem ipsum gjhgfkj djf jhd jfhkjdsh '},
                    {id: 3, message: 'Ikj djfhfsk sdk skdjkdfj sdwoels woewiqow odkk'},
                    {id: 4, message: 'qwoo hakai hsdk aja lskdoqp qpwo'}
                ],
                newMessageText: 'Hi, im new dialog text'
            },
            sideBar: {
                friends: [
                    {id: 1, name: 'Masha'},
                    {id: 2, name: 'Sasha'},
                    {id: 3, name: 'Dasha'},
                    {id: 4, name: 'Tasha'},
                    {id: 5, name: 'Pasha'},
                    {id: 6, name: 'Glasha'},
                ]
            }
        },

    _callSubscriber(state) {
        console.log( 'State changed')
        console.log('this state', this._state)
        console.log('state', state)

       // this._state.push(state)
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost(newPost) {
        //console.log(this._state)
        console.log(newPost)
        // ID KEY нужен уникальный айди для корректной работы
        let postData = {id: 5, message: newPost, likesCount: 0}
        this._state.profilePage.posts.push(postData);
        console.log(this._state)
        //this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //            message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber(this._state)
        // }
        // if (action.type === UPDATE_NEW_POST_TEXT)
        // {
        //     this._state.profilePage.newPostText = action.newPostText
        //     this._callSubscriber(this._state)
        // }
        //
        // if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.messagesPage.newMessageText = action.text
        //     console.log(action.text)
        //  this._callSubscriber(this._state)
        //     console.log(this._state.messagesPage.messages)
        //
        //     // let newMessage = {
        //     //     id: 5,
        //     //     message: this._state.messagesPage.newMessageText,
        //     // }
        //     // this._state.messagesPage.messages.push(newMessage)
        // }
        // if (action.type === ADD_MASSAGE) {
        //     let body = this._state.messagesPage.newMessageText
        //     this._state.messagesPage.messages.push({id: 5, message: body,})
        //     this._callSubscriber(this._state)
        // }
    }
}

// export const updateNewMessageTextAction = (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })

export default store;
window.store = store