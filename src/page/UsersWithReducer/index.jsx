import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";

const UsersWithReducerPage = ({}) => {
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

  return (
    <div>
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
