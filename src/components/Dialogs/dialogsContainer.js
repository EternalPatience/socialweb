import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../storeContext";


function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            { store => {
                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let onNewMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action)
                }
                return <Dialogs updateNewMessageText={onNewMessageChange}
                                sendMessage={onSendMessage}
                                state={store.getState().messagesPage}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer