import React from 'react'

const ChildA = ({ count, setCount }) => {
  return (
    <div>
      <h2>Child A</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default ChildA
