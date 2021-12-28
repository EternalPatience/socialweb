let initialState = {
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


const sidebarReducer = (state=initialState, action) => {
    return state
}

export default sidebarReducer