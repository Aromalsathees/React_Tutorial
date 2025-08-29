import React from 'react'
import Cards from './Cards'


const Props_page = () => {


    const datas = [
        {
            'title':'aromal',
        'description':'typical intelligetn'
       },

        {
            'title':'bruce',
            'description':'billionaire'
        },
        {
           'title':'stark',
            'description':'philantrhopist' 
        }
    
    ]


  return (
    <div>
        {datas.map((c,index) =>(
            <Cards
            key={index}
            title={c.title}
            description={c.description}
            />
        ))}
    </div>
  )
}

export default Props_page