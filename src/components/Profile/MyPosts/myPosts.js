import classes from "./myPosts.module.css";
import Post from "./Post/post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {FormControl} from "../../common/formControls/formControls";


const MyPosts = React.memo(props => {
    let postElements = props.posts.map(post =>
        <Post message={post.text} likesCount={post.likesCount} key={post.id}/>
    )

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div>
                <div className={classes.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
})


const Textarea = FormControl("textarea")
let maxLength30 = maxLengthCreator(30)

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       placeholder={'Enter new post text'}
                       validate={[required, maxLength30, ]}
                />
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}


const AddPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(AddPostForm)


export default MyPosts