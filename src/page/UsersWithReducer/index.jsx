import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";

const UsersWithReducerPage = ({}) => {
  useEffect(() => {
    const [users, setUsers] = useState([]);
    axios.get(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      {users.map(({ id, username }) => {
        return (
          <div key={id}>
            <p>
              {username}
              <button>✏</button>
              </p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersWithReducerPage;
