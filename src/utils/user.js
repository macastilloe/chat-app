const users = []

//addUser
const addUser = ({id, username, room}) =>{
    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    //check for exixting user
    const existingUser = users.find((user)=>{
        return user.room === room & user.username===username
    })

    //validate username
    if(existingUser){
        return {
            error: 'Username is in user'
        }
    }

    //store user
    const user = {id, username, room}
    users.push(user)
    return { user }
}
addUser({
    id: 21,
    username: 'Andrew',
    room: 'South'
})
console.log(users)

//removeUser
const removeUser = (id) =>{
    const index = users.findIndex((user)=> user.id===id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}


//getUser
const getUser = (id) =>{
   return users.find((user) => user.id === id)
    
}


//getUsersInRoom
const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room ===room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

