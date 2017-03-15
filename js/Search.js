import React from 'react'
import preLoad from '../public/data.json'
import ShowCard from './ShowCard'

// Spread opperator
// {...show} is equvalent to title={show.title} something={sow.something}

const Search = React.createClass({
  render () {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
        </header>
        <div>
          {preLoad.shows.map( show => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
          </div>
      </div>
    )
  }
})

export default Search
