// import React from 'react'
// import {useState } from 'react'
// import {useNavigate} from 'react-router-dom'

// const Login = () => {

//     const [Datas , SetDatas] = useState({
//         email : '',
//         password : ''
//     })

//     const Navigate = useNavigate()

//     function handleChange(e){
//          const{name , value} = e.target
//          SetDatas(function(prev){
//             return{
//                 ...prev , [name]:value
//             }
//          })
//     }

//     function handleSubmit(e){
//         e.preventDefault()
//         alert('form submitted')
//         Navigate('/dashboard')

//     }


//   return (
//     <div>
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="">Email</label>
//                     <input type="text" name="email" onChange={handleChange} value={Datas.email} />
//                 </div>

//                 <div>
//                     <label htmlFor="">Password</label>
//                     <input type="text" name="password" onChange={handleChange} value={Datas.password} />
//                 </div>
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
  const [form, setForm] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (form.email === 'test@test.com' && form.password === '1234') {
      setIsLoggedIn(true)  // ✅ this will work now
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
