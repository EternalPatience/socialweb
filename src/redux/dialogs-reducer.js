const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    dialogs: [
        {id: 1, name: 'Andrew', avatar: 'https://cdn-icons-png.flaticon.com/512/146/146035.png'},
        {id: 2, name: 'Andy', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'},
        {id: 3, name: 'Alfred', avatar: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png'},
        {id: 4, name: 'Antony', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147140.png'},
        {id: 5, name: 'Ashley', avatar: 'https://cdn-icons-png.flaticon.com/512/146/146029.png'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'FFS!'},
        {id: 5, message: 'What is going on?'},
    ],
    newMessageText: '',

}


const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            break;
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            break;
        default:
            return state
    }

    return state
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})

export default dialogsReducer