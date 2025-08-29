import React from 'react'
import {useState} from 'react'

const Login = () => {
    const [data ,SetData] = useState({
        email : '',
        password : ''
    })

    function handleSubmit(e){
        e.preventDefault()
        if(!data.email){
            alert('email required')
            return;
        }
        if(!data.email.includes('@')){
            alert('enter proper email address')
            return;
        }

        alert('form submitted')
    }


    function handleChange(e){
        const {name , value} = e.target

        SetData(function(prev){
            return{
                ...prev , [name] : value

            }
            
        })
    }

  return (


    <div>

   <form onSubmit={handleSubmit}>
        <label htmlFor="">email address</label>
        <input 
        type="text"
        name = "email"
        value = {data.email}
        onChange={handleChange} />

          
        <label htmlFor="">password</label>
        <input 
        type="text"
        name = "password"
        value = {data.password}
        onChange={handleChange} />

        <button type='submit'>submit</button>
    </form>

    </div>


  )
}

export default Login