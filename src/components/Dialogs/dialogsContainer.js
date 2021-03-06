import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        messagesPage: state.messagesPage,
    }
}


export default compose(
    connect(mapStateToProps,
        {addMessage,}), withAuthRedirect
)(Dialogs)