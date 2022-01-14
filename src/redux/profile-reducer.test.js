import profileReducer, {addPost, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, text: 'Hi, how are you?', likesCount: 12},
        {id: 2, text: 'It\'s my first post', likesCount: 23},
    ],
};


it('posts length should be incremented', () => {
    //1. test data
    let action = addPost('Mars is a cat')
    //2. action
    let newState = profileReducer((state), (action))
    //expectation
    expect(newState.posts.length).toBe(3)
})

it('post[2].text should be `Mars is a cat`', () => {
    //1. test data
    let action = addPost('Mars is a cat')
        //2. action
    let newState = profileReducer((state), (action))
    //expectation
    expect(newState.posts[2].text).toBe('Mars is a cat')
})

it('check decrementing posts length case', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer((state), (action))
    //expectation
    expect(newState.posts.length).toBe(1)
})

it('check decrementing posts length case with incorrect postID', () => {
    //1. test data
    let action = deletePost(10000)
    //2. action
    let newState = profileReducer((state), (action))
    //expectation
    expect(newState.posts.length).toBe(2)
})