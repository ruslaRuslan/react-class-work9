import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";

const UsersWithStatePage = ({}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const onEdit = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, username: prompt("yeni adi daxil edin") };
        }
        return user;
      })
    );
  };
  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onAddUser = () => {
    setUsers([
      ...users,
      { id: +users.length + 1, username: prompt("yeni user elave et") },
    ]);
  };

  const onDeleteLast = () => {
    setUsers(users.slice(1));
  };

  const onDeleteFirst = () => {
    setUsers(users.slice(1));
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

export default UsersWithStatePage;
