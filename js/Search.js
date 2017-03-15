import React from 'react'
import preLoad from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className="search">
        <h1> Search page</h1>
        <pre>
          <code>{JSON.stringify(preLoad, null, 4)})</code>
        </pre>
      </div>
    )
  }
})

export default Search
