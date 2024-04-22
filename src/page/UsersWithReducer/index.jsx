import axios from "axios"
import { useEffect } from "react"
const url = 'https://jsonplaceholder.typicode.com/users/'


const UsersWithReducerPage = ({}) => {
  useEffect(()=>{
axios.get(url)
  },[])
  return (
    <div>UsersWithReducerPage</div>
  )
}

export default UsersWithReducerPage