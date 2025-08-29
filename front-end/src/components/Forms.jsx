import React from 'react'
import {useState} from 'react'


const Forms = () => {
    const [Name , SetName] = useState({
        email : '',
        password : ''
    })

    const [error , SetError] = useState('')


    function handleSubmit(e){
        e.preventDefault()

        if(!Name.email.includes('@')){
            SetError('the email is not proper')
        }else{


        alert(`Form submitted!\nEmail: ${Name.email}\nPassword: ${Name.password}`)
        console.log(Name) // form values check cheyyan
        }
    }



    function onChange(e){
        const {name , value} = e.target
        SetName(function(prev){
            return{
                ...prev,[name]:value
            }
        })
    }

  return (

    <div>
        <form onSubmit={handleSubmit} noValidate>
            
            <input 
  type="text" 
  name="email"
  value={Name.email}
  onChange={onChange}

/>


            <input 
            type="password" 
            name = "password"
            value = {Name.password}
            onChange={onChange}/>
            <button type='submit'>submit</button>
            
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
        
    </div>
  )
}

export default Forms