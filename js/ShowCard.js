import React from 'react'
const { shape, string } = React.PropTypes

const ShowCard = React.createClass({
  // propTypes are optional. Helpful for people to instantly see
  // the contract i.e. what they need to pass the component
  // to use it.

  // React only checks propTypes in dev
  propTypes: {
      poster: string,
      title: string,
      year: string,
      description: string
  },
  render () {
    // destucturing allows a much cleaner component
    const { poster, title, year, description } = this.props

    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})

export default ShowCard
