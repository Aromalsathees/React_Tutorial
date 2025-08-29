import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
  // Parent keeps the state
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass count & setCount to ChildA */}
      <ChildA count={count} setCount={setCount} />
      {/* Pass count to ChildB */}
      <ChildB count={count} />
    </div>
  )
}

export default Parent
