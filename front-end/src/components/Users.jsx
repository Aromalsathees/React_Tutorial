import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Users = () => {
    const {id} = useParams()

    const [user , UserData] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((response)=>{
            console.log(response.data)
            UserData(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
    },[id])


  return (
  <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Users