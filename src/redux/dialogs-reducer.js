export const ADD_MASSAGE = 'ADD_MASSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initialState =
        {
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
        }

export const dialogsReducer = (state = initialState, action) =>
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
            console.log('REDUCER UPDATE POST', action.newMessageText)
            console.log(state)
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