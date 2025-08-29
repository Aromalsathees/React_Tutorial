// import React from 'react'
// import {useState} from 'react'

// const Faq = () => {

//     const [Datas ,SetDatas] = useState({})

//      const Data = [
//         {
//          name : 'banner',
//         role : 'hul smash'
//     },
//     {     name : 'bruce',
//      role : 'batman'
//     },
//    {
//     name : 'stark',
//     role : 'ironman'
//  }]


//  function handleClick(e){
//       SetDatas(Data)
//  }


//   return (
//     <div>
//         {Data.map((val , ind)=>(
//             <div key={ind}>
//                 {val.name}
//                 <button onClick={handleClick}>
//                       show 
//                 </button>
//             </div>
//         ))}

//         <div>
//             {Datas && <p>{Datas.role}</p>}
//         </div>
//      </div>  
//   )
// }

// export default Faq



import React, { useState } from 'react';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const Data = [
    {
      name: 'banner',
      role: 'hul smash'
    },
    {
      name: 'bruce',
      role: 'batman'
    },
    {
      name: 'stark',
      role: 'ironman'
    }
  ];

  function handleClick(item) {
    // toggle: if same item clicked, close it
    if (selected?.name === item.name) {
      setSelected(null);
    } else {
      setSelected(item);
    }
  }

  return (
    <div>
      {Data.map((val, ind) => (
        <div key={ind}>
          <span>{val.name}</span>
          <button onClick={() => handleClick(val)}>
            {selected?.name === val.name ? 'hide' : 'show'}
          </button>

          {selected?.name === val.name && (
            <p>{val.role}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
