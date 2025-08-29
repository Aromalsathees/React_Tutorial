// import React from 'react'
// import {useState,useEffect} from 'react'
// import axios from 'axios'

// import Cards from './Cards'


// const Fetch_data = () => {

//   const [Data , SetData] = useState([])
//   const [Error , SetError] = useState('')
//   const [Show , DataShow] = useState('')

//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
//       console.log(response.data)
//       SetData(response.data)
//     }).catch((error)=>{
//       console.log(error.message)
//       SetError(error.message)
//     })
//   },[])


//   return (
//     <div>
//         {Data.map((val,ind)=>(
//           <div key={val.id}>
//               <p>{val.name}</p>
//               <button onClick={()=>{DataShow(val.id)}}>show Details</button>
//               {Show && <Cards name={val.name}/>}
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Fetch_data



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'

const Fetch_data = () => {
  const [Data, SetData] = useState([])
  const [Error, SetError] = useState('')
  const [Show, DataShow] = useState('') // store selected user's id

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data)
        SetData(response.data)
      })
      .catch((error) => {
        console.log(error.message)
        SetError(error.message)
      })
  }, [])

  return (
    <div>
      {Error && <p style={{ color: 'red' }}>{Error}</p>}

      {Data.map((val, ind) => (
        <div key={val.id}>
          <p>{val.name}</p>
          <button onClick={() => DataShow(val.id)}>Show Details</button>

          {/* Show details only for the clicked user */}
          {Show === val.id && <Cards name={val.name} />}
        </div>
      ))}
    </div>
  )
}

export default Fetch_data
