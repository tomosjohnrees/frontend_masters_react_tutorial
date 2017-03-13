import React from 'react'

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        // props: properties passed in by the parent component
        // styles are passed through in an object
        h1({ style: { color: this.props.color } }, this.props.title)
      )
    )
  }
})

// ES6 model.
// When someone requests this model, give them MyTitle. Default is there due to us being able to export multiple things.
export default MyTitle
