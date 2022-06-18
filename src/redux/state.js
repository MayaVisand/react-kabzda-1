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
                ]
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

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    addPost(newPost) {
        this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {

    }
}

export default store;
window.store = store