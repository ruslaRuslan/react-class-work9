const reducer = (users, action) => {
    switch (action.type) {
      case "getusers":
        return action.payload;
      case "adduser":
        return [...users, { id: users.length + 1, username: action.payload }];
      case "deleteFirst":
        return users.slice(1);
      case "deleteLast":
        return users.slice(0, -1);
      case "edit":
        return users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, username: prompt('enter new name') };
          }
          return user;
        });
      case "delete":
        return users.filter((user) => user.id !== action.payload);
      default:
        return users;
    }
  };
export default reducer;