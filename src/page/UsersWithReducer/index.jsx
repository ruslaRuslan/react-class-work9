import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";

const UsersWithReducerPage = ({}) => {
  useEffect(() => {
    const [users, setUsers] = useState([]);
    axios.get(url).then(({ data }) => {
setUsers(data)
    });
  }, []);
  return <div>UsersWithReducerPage</div>;
};

export default UsersWithReducerPage;
