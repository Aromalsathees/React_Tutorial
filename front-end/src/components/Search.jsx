import React, { useState } from 'react'

const Search = () => {
  const datas = [
    { name: 'aromal', role: 'billionaire' },
    { name: 'stark', role: 'ironman' }
  ]

  const [queryResults, setQueryResults] = useState([]) // start with full list
  const [noData, setNoData] = useState('')

  function handleChange(e) {
    const q = e.target.value.toLowerCase()

    const found = datas.filter(
      item =>
        item.name.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q)
    )

    if (found.length > 0) {
      setQueryResults(found)
      setNoData('')
    } else {
      setQueryResults([])
      setNoData('No search results')
    }
  }

  return (
    <div>
      <div>
        <h1>search here</h1>
        <input type="text" name="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </div>

      <div>
        {queryResults.map((item, index) => (
          <p key={index}>
            {item.name} - {item.role}
          </p>
        ))}
      </div>

      {noData && <p>{noData}</p>}
    </div>
  )
}

export default Search
