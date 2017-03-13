import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    const style = { color: this.props.color }

    // curly braces with {this.props.title} is equivalent to <%= @props.title %> in erb
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

// ES6 model.
// When someone requests this model, give them MyTitle. Default is there due to us being able to export multiple things.
export default MyTitle
