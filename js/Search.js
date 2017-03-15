import React from 'react'
import preLoad from '../public/data.json'
import ShowCard from './ShowCard'

// Spread opperator
// {...show} is equvalent to title={show.title} something={sow.something}

// React doesn't have two way data binding, hence we need the onChange on the input value

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is the default string'
    }
  },
  handleSearchValueChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input onChange={this.handleSearchValueChange}  value={this.state.searchTerm} type='text' placeholder='Search' />
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
