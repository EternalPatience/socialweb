import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hi, how are you?', likesCount: 12},
                {id: 2, text: 'It\'s my first post', likesCount: 23},
            ],
            newPostText: "it-kamasutra.com"
        },
        messagesPage: {
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

        },
        sidebar: {
            friends: [
                {
                    name: 'Eugene',
                    age: 47,
                    gender: 'm',
                    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146027.png'
                },
                {
                    name: 'Anna',
                    age: 47,
                    gender: 'm',
                    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146001.png'
                },
                {
                    name: 'Viktoria',
                    age: 47,
                    gender: 'm',
                    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146023.png'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store

window.store = store