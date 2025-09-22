import React from 'react'
import {useState , useEffect} from 'react'


const Shoping = () => {
    const [price , totalprice] = useState(0)
    const [type ,typedData] = useState({name : '', price : ''})
    const [Datas ,setDatas ] = useState(()=>{
        const saved_data = localStorage.getItem('setdata')
        if(saved_data){
            return JSON.parse(saved_data)
        }else{
            return []
        }
    })
    const [edit , editDatas] = useState(null)

    function hanldeadd(){
        if(edit !== null){
            const update_data = [...Datas]
            update_data[edit] = type
            setDatas(update_data)
            typedData({name:'', price:''})
            

        }else{

        // if(type.trim() !== ''){
            setDatas([...Datas , type])
            typedData({name:'', price:''})
            
        // }
      }
    }
    function handledelete(ind){
        const filterd = Datas.filter((item , i)=>i !== ind)
        setDatas(filterd)
        typedData({name:'' , price:''})
    }
    function handleupdate(ind){
        editDatas(ind)
        typedData(Datas[ind])
    }
    function handlechange(e){
        const {name , value} = e.target
        typedData((prev)=>({
            ...prev , [name]:value
        }))
    }

  

    useEffect(()=>{
        const total_price = Datas.reduce((acc, item)=> acc + Number(item.price),0)
        totalprice(total_price)
        localStorage.setItem('setdata' , JSON.stringify(Datas))
    },[Datas])


  return (
    <div>
        <div>

            <h1>Add Products</h1>
            <div>

            <div>
            <input type="text" onChange={handlechange} value={type.name} name='name'/>
            <input type="text" onChange={handlechange} value={type.price} name='price' />
            </div>

            <button onClick={hanldeadd}>{edit !== null ? 'Update':'Add'}</button>
            </div>
            
            <div>
                {Datas.map((val , ind)=>(
                    <div key={ind}>
                        <h1>{val.name}</h1>
                        <h1>{val.price}</h1>
                        <button onClick={()=>handledelete(ind)}>Delete</button>
                        <button onClick={()=>handleupdate(ind)}>Update</button>
                    </div>
                ))}
            </div>
            <div>{price}</div>

        </div>
    </div>
  )
}

export default Shoping