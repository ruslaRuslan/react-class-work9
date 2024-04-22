import axios from "axios";
import { useReducer, useEffect } from "react";
import usersReducer from "../../reducers/usersReducer";
const url = "https://jsonplaceholder.typicode.com/users/";

const UsersWithReducerPage = ({}) => {
  const [users, dispatcher] = useReducer(usersReducer, []);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatcher({ type: "getusers", payload: data });
    });
  }, []);

  const onEdit = (id) => dispatcher({ type: "edit", payload: id });
  const onDelete = (id) => dispatcher({ type: "delete", payload: id });
  const onAddUser = () => {
    const user = prompt("ad daxil edin");
    dispatcher({ type: "adduser", payload: user });
  };
  const onDeleteFirst = () => dispatcher({ type: "deleteFirst" });
  const onDeleteLast = () => dispatcher({ type: "deleteLast" });
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