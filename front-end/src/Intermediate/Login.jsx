import React from 'react'
import {useEffect , useState} from 'react'
import {useNavigate} from 'react-router-dom'



const Login = () => {
    const [form ,Setform] = useState({
        email:'',
        password:''
    })
    const Navigate = useNavigate()

    function handlechange(e){
        const {name , value} = e.target
        Setform(function(prev){
            return{
               ...prev,[name]:value
            }
        })
    }


    function handlesubmit(e){
          localStorage.setItem('token')
          e.preventDefault()
            Navigate('/')
    }

  return (
    <div>

        <form onSubmit={handlesubmit}>
        <label htmlFor="">Email</label>
        <input type="text" name='email' value={form.email} onChange={handlechange} />

        <label htmlFor="">password</label>
        <input type="text" name='password' value={form.password} onChange={handlechange} />
        <button type='submit'>submit</button>
        </form>


    </div>
  )
}

export default Login