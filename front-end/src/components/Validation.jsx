// import React from 'react'
// import {useState} from 'react'

// const Validation = () => {
    
//     const [Error , SetError] = useState('')
//     const [Result , ResultStore] = useState('')
//     const [Data , SetData] = useState({
//         email: '',
//         password : ''
//     })

//     function handleChange(e){
//         const {name , value} = e.target

//         SetData(function(prev){
//             return{
//                 ...prev,[name]:value
//             }
//         })
//     }

//     function handleSubmit(e){
//         e.preventDefault()
        
//         if(Data.password.length >= 6 && Data.email.includes('@')){
//             alert('form submitted')
//             ResultStore('succcsfully LOgin')
//         }else{
//             SetError('check the email or password')
//             Data('')
//         }
//     }


//   return (
//     <div>
//         <div>
//         <form onSubmit={handleSubmit}>
//         <h1>email</h1>
//         <input 
//         type="text"
//         name="email"
//         value={Data.email}
//         onChange={handleChange} />


//         <h2>password</h2>
//         <input 
//         type="text"
//         name="password"
//         value={Data.password}
//         onChange={handleChange} />
//         <button type='submit' >submit</button>
//         </form>
//         </div>

//         {Error && <p>{Error}</p>}
//         {Result && <p>{Result}</p>}
//    </div>
   
//   )
// }

// export default Validation



import React, { useState } from 'react'

const Validation = () => {
  const [Error, SetError] = useState('')
  const [Result, ResultStore] = useState('')
  const [Data, SetData] = useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    SetData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (Data.password.length >= 6 && Data.email.includes('@')) {
      alert('form submitted')
      ResultStore('Successfully Login ✅')
      SetError('') // clear error
      SetData({ email: '', password: '' }) // reset form
    } else {
      SetError('❌ Check the email or password')
      ResultStore('') // clear success
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Email</h1>
        <input
          type="text"
          name="email"
          value={Data.email}
          onChange={handleChange}
        />

        <h2>Password</h2>
        <input
          type="password"
          name="password"
          value={Data.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Show validation messages */}
      {Error && <p style={{ color: 'red' }}>{Error}</p>}
      {Result && <p style={{ color: 'green' }}>{Result}</p>}
    </div>
  )
}

export default Validation
