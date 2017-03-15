import React from 'react'
import { Link } from 'react-router'
console.log("out out");
const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
        <Link to='/search'>Search</Link>
      </div>
    )

  }
})

export default Landing
