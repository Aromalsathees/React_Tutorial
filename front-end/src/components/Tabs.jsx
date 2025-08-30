import React from 'react'
import {useState} from 'react'

const Tabs = () => {

  const [Datas ,SetDatas] = useState(null)

  
  return (
    <div>
      <div><button onClick={()=>{SetDatas('profile')}}>profile</button></div>
      <div><button onClick={()=>{SetDatas('contact')}}>contact</button></div>
      <div><button onClick={()=>{SetDatas('home')}}>home</button></div>

      {Datas == 'profile' && <p>THis is profile page</p>}
      {Datas == 'contact' && <p>THis is contact page</p>}
       
    </div>
  )
}

export default Tabs