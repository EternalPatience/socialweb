let initialState = {
    friends: [
        {
            id: 1,
            name: 'Eugene',
            age: 47,
            gender: 'm',
            avatar: 'https://cdn-icons-png.flaticon.com/512/146/146027.png'
        },
        {
            id: 2,
            name: 'Anna',
            age: 47,
            gender: 'm',
            avatar: 'https://cdn-icons-png.flaticon.com/512/146/146001.png'
        },
        {
            id: 3,
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