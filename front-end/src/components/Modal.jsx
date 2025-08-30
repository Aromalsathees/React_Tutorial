import React from 'react'
import {useState} from 'react'
import Cards from './Cards'

const Modal = () => {
    
    const data = [{
        name : 'bruce',
        role : 'batman'
    },
{
    name : 'stark',
    role : 'ironman'
},
{
    name : 'thanos',
    role : 'villain'
}]


    const [Datas ,SetDatas] = useState(null)


    function handleClick(){
        if(Datas){
            SetDatas(null)
        }else{
            SetDatas(data)
        }
    }

   
  return (
    <div>
        <div>
            <button onClick={handleClick}>
                {Datas? 'show':'hide'}
            </button>
        </div>
         <div>
        {Datas && Datas.map((val, i) => (
          <Cards
            key={i}
            name={val.name}
            role={val.role}
          />
        ))}
      </div>
    </div>
  )
}

export default Modal

