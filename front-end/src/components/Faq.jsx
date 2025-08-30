// import React from 'react'
// import {useState} from 'react'


// const Faq = () => {

//   const [Datas ,SetData] = useState([])
 

//   const Data = [
//     {
//       name: 'banner',
//       role: 'hul smash'
//     },
//     {
//       name: 'bruce',
//       role: 'batman'
//     },
//     {
//       name: 'stark',
//       role: 'ironman'
//     }
//   ];

//   function handleClick(val){
//         SetData(prev => [...prev,val])
//   }


//   return (
//     <div>
//       {Data.map((val,ind)=>(
//         <div key={ind}>
//           <h1>{val.name}</h1>
//           <button onClick={()=>{handleClick(val)}}>
//             {val.name == Datas.name? 'show Less ': 'show More'}
//           </button>
//         </div>
//       ))}
   
//     <div>
          
//           {Datas.map((v,i)=>(
//             <div key={i}>
//             <h1>{v.name}</h1>
//             <h1>{v.role}</h1>
//             </div>
//           ))}

        
//     </div>
//   </div>
   
//   )
// }

// export default Faq



import React, { useState } from 'react'

const Faq = () => {
  const [Datas, SetData] = useState([])

  const Data = [
    { name: 'banner', role: 'hul smash' },
    { name: 'bruce', role: 'batman' },
    { name: 'stark', role: 'ironman' }
  ]

  function handleClick(val) {
    // already selected ആണെങ്കിൽ remove ചെയ്യുക
    if (Datas.some(item => item.name === val.name)) {
      SetData(prev => prev.filter(item => item.name !== val.name))
    } else {
      // otherwise add ചെയ്യുക
      SetData(prev => [...prev, val])
    }
  }

  return (
    <div>
      {Data.map((val, ind) => (
        <div key={ind}>
          <h1>{val.name}</h1>
          <button onClick={() => handleClick(val)}>
            {Datas.some(item => item.name === val.name) ? 'Show Less' : 'Show More'}
          </button>
        </div>
      ))}

      <div>
        {Datas.map((v, i) => (
          <div key={i}>
            <h1>{v.name}</h1>
            <h1>{v.role}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
