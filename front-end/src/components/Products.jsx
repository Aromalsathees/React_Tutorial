// import React from 'react'
// import {useState , useEffect} from 'react'
// import axios from 'axios'

// const Products = () => {

//     const [Datas , SetDatas] = useState([])
//     const [Error , SetError] = useState('')
//     const [items , CartItems] = useState([])

//     const [price , totalprice] = useState(0)

//     function handleclick(val){
//          CartItems(prev => [...prev,val])
         
//          totalprice(prev => prev + val.price)
//     }



//     useEffect(()=>{
//         axios.get('https://api.escuelajs.co/api/v1/products').then((response)=>{
//             console.log(response.data)
//             SetDatas(response.data)
//         }).catch((error)=>{
//             console.log(error.message)
//             SetError(error.message)

//         })
//     },[])

//   return (
//     <div>
//         <div>
//              {Datas.map((val ,ind)=>(
//                 <div key={ind}>
//                 <h1>{val.title}</h1>
//                 <p>{val.price}</p>
//                 <button onClick={()=>{handleclick(val)}}>Add to Cart</button>
//                 </div>
//              ))}
//         </div>

//         <div>
//             <h1>Cart Items</h1>
//              {items.map((v,i)=>(
//                 <div key={i}>
//                 <h1>{v.title}</h1>
//                 <p>{v.id}</p>
//                 </div>
//              ))}
//         </div>

//         <div>
//             {price && <p>{price}</p>}
//         </div>
        
//         {Error && <p>{Error}</p>}
//     </div>
//   )
// }

// export default Products


import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Products = () => {
  const [Datas, SetDatas] = useState([])
  const [Error, SetError] = useState('')
  const [items, CartItems] = useState([])
  const [price, totalprice] = useState(0)

  function handleclick(val) {
    CartItems(prev => [...prev, val])
    totalprice(prev => prev + val.price)
  }

  function removeFromCart(index) {
    const itemToRemove = items[index];
    CartItems(prev => prev.filter((_, i) => i !== index))
    totalprice(prev => prev - itemToRemove.price)
  }

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        SetDatas(response.data)
      })
      .catch((error) => {
        SetError(error.message)
      })
  }, [])

  return (
    <div>
      <h1>Products</h1>
      {Datas.map((val, ind) => (
        <div key={ind}>
          <h2>{val.title}</h2>
          <p>Price: ${val.price}</p>
          <button onClick={() => handleclick(val)}>Add to Cart</button>
        </div>
      ))}

      <h1>Cart Items</h1>
      {items.map((v, i) => (
        <div key={i}>
          <h2>{v.title}</h2>
          <p>Price: ${v.price}</p>
          <button onClick={() => removeFromCart(i)}>Remove</button>
        </div>
      ))}

      <h2>Total Price: ${price}</h2>

      {Error && <p style={{ color: 'red' }}>{Error}</p>}
    </div>
  )
}

export default Products
