let users = [];

const addUser = (id, username, room) => {
    const user = {id, username, room};
    users.push(user);
    return user;
}


const getUser = id => {
    return users.find(user => user.id === id);
}

const removeUser = id => {
    users = users.filter(user => user.id !== id)
}

const getUsernameList = room => {
    let userList = users.filter(user => user.room === room);
    let usernameList = userList.map(user => user.username);
    return usernameList;
}

module.exports = {
    addUser,
    getUser,
    removeUser,
    getUsernameList,
};