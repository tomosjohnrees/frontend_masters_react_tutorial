import React from 'react'
import preLoad from '../public/data.json'
import ShowCard from './ShowCard'

const Search = React.createClass({
  render () {
    return (
      <div className="search">
        {preLoad.shows.map( show => {
            return (
              <ShowCard key={show.imdbID} show={show} />
            )
          })}
      </div>
    )
  }
})

export default Search
