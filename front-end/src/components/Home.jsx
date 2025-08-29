import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1>
                <Link to='/aroma/1'>user1</Link>
        </h1>
        <h1>
                <Link to='/users/2'>user2</Link>
        </h1>
        <h1>
                <Link to='/Users/3'>user3</Link>
        </h1>
    
    </div>
  )
}

export default Home