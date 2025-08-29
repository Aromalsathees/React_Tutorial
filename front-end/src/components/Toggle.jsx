// import React from 'react'
// import {useState} from 'react'

// const Toggle = () => {

//     const [Datas , SetData] = useState(false)

//     const Data = [
//         {
//         name : 'banner',
//         role : 'hul smash'
//     },
// {
//     name : 'bruce',
//     role : 'batman'
// },
// {
//     name : 'stark',
//     role : 'ironman'
// }]

// function handleClick(e){
//     SetData(prev => !prev)
// }



//   return (
//     <div>
//          {Data.map((val,ind)=>(
//             <div key={ind}>
//                 <h1>{val.name}</h1>
//                 <h1>{val.role}</h1>
//                 <button onClick={handleClick}>

//                    {Datas ? 'Liked':'NOTLIKED'}

//                 </button>
//             </div>
//          ))}
//     </div>
//   )
// }

// export default Toggle





// For indvdual Toggle use below code and for signle list toggle use above toggle code

// import React, { useState } from 'react'

// const Toggle = () => {
//   const Data = [
//     { name: 'banner', role: 'hul smash' },
//     { name: 'bruce', role: 'batman' },
//     { name: 'stark', role: 'ironman' }
//   ]

//   // liked status store cheyyan object form
//   const [liked, setLiked] = useState({})

//   function handleClick(name) {
//     setLiked(prev => ({
//       ...prev,
//       [name]: !prev[name]   // name key toggle
//     }))
//   }

//   return (
//     <div>
//       {Data.map((val) => (
//         <div key={val.name}>
//           <h1>{val.name}</h1>
//           <h1>{val.role}</h1>
//           <button onClick={() => handleClick(val.name)}>
//             {liked[val.name] ? 'liked' : 'not liked'}
//           </button>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Toggle
