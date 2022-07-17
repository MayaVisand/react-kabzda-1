export const ADD_MASSAGE = 'ADD_MASSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


export const dialogsReducer = (state, action) =>
{
    switch (action.type){
        case ADD_MASSAGE:
            let body = state.newMessageText
            console.log(body)
        let newMessage = {
            id: 5,
            message: body,
        }
            state.newMessageText = ''
            state.messages.push(newMessage)

            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            console.log(action.newMessageText)
            return state

//если не один из кейсов не отработал, нам нужен дефолт, иначе будет ошибка,
// по дефорлту возвращает просто стейт
        default:
            return state
    }
}

//ACTIONS
export const addMessageActionCreator = () => ({type: ADD_MASSAGE})
export const updateNewMessageTextAction = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text })


export default dialogsReducer