import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";

const reducer = (users, action) => {
  switch (action.type) {
    case "getusers":
      return action.payload;
    case "deleteLast":
      return users.slice(1, -1);
    case "edit":
      return users.map((user) => {
        if (user.id === action.payload) {
          return { ...user, username: prompt("yeni adi daxil edin") };
        }
        return user;
      });
    case "delete":
      return users.filter((user) => user.id !== action.payload);

  }
};

const UsersWithReducerPage = ({}) => {
  const [users, dispatcher] = useReducer(reducer, []);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatcher({ type: "getusers", payload: data });
    });
  }, []);

  const onEdit = (id) => {
    dispatcher({ type: "edit", payload: id });
  };
  const onDelete = (id) => {
    dispatcher({ type: "delete", payload: id });
  };

  const onAddUser = () => {
    setUsers([
      ...users,
      { id: +users.length + 1, username: prompt("yeni user elave et") },
    ]);
  };

  const onDeleteFirst = () => {
    dispatcher({ type: "deleteFirst" });
    
  };

  const onDeleteLast = () => {
    dispatcher({ type: "deleteLast" });
    
  };



  return (
    <div>
      <button onClick={onDeleteFirst}>delete first</button>
      <button onClick={onDeleteLast}>delete Last</button>
      <button onClick={onAddUser}>user elave et</button>
      {users.map(({ id, username }) => {
        return (
          <div key={id}>
            <p>
              {username}
              <button
                onClick={() => {
                  onEdit(id);
                }}
              >
                ✏
              </button>
              <button
                onClick={() => {
                  onDelete(id);
                }}
              >
                ❌
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersWithReducerPage;
