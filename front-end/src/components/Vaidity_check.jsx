import React from 'react'
import {useState} from 'react'


const Vaidity_check = () => {
    const [data ,SetData] = useState(false)

    function handleclick(){
        SetData(!data)
    }

  return (

    <div>
        <button onClick={handleclick}>
                { data ? 'Logout':'Login' } 
        </button>
    </div>
  )
}

export default Vaidity_check