import React from 'react'
import {useState} from 'react'

const Numbers = () => {
    
    const [form , Dataform] = useState({})
    const [Data , SetData] = useState({
        name : '',
        number1 : '',
        number2 : '',
        number3 : ''
    })

    function Onchange(e){
         const {name , value} = e.target
         SetData(function(prev){
            return{
                ...prev , [name]:value
            }
         })
    }


    function handlesubmit(e){
        e.preventDefault()
        Dataform(Data)
    }


    function ClearName(e){
        SetData(function(prev){
            return{
                ...prev , name:''
            }
        })
    }



  return (
    <div>

        <div>
            <form onSubmit={handlesubmit}>
                <h1>name</h1>
                <input type="text" name="name" onChange={Onchange} value={Data.name}/>
                <button onClick={ClearName}>REMOVE</button>

                 <h1>number 1</h1>
                <input type="text" name="number1" onChange={Onchange} value={Data.number1}/>
         
                 <h1>number 2</h1>
                <input type="text" name="number2" onChange={Onchange} value={Data.number2}/>

                 <h1>number 3</h1>
                                 <input type="text" name="number3" onChange={Onchange} value={Data.number3}/>


                     <button type='submit'>submit</button>

                </form>
        </div>


         <h1>
            {form.name}
        </h1> 
        <h1>
            {form.number1}
        </h1>
          <h1>
            {form.number2}
        </h1>
        <h1>
            {form.number3}
        </h1>
    </div>
  )
}

export default Numbers