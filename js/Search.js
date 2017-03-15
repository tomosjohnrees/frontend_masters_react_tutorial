import React from 'react'
import preLoad from '../public/data.json'
import ShowCard from './ShowCard'

// Spread opperator
// {...show} is equvalent to title={show.title} something={sow.something}

const Search = React.createClass({
  render () {
    return (
      <div className="search">
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
