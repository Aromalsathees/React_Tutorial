import React from 'react'
import {useState} from 'react'

const Buttons = () => {
  const [Count , setCount] = useState(0)


  function handleNum(e){
    if(e.target.id == 'in'){
          setCount(Count + 1)
    }else{
          setCount(Count - 1)
    }
  }


  return (
    <div>

    <button id = 'in' onClick={handleNum}>
        increase 
    </button>
    <button id = 'de' onClick={handleNum}>
      decrease
    </button>

    <h1>{Count}</h1>

     </div>
  )
}

export default Buttons