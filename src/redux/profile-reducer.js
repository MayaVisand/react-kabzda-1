export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            console.log(newPost)
            state.posts.push(newPost)
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state

        //если не один из кейсов не отработал, нам нужен дефолт, иначе будет ошибка,
        // по дефорлту возвращает просто стейт
        default:
            return state
    }
}

//ACTIONS
export  const  addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer