import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFactory = React.createFactory(MyTitle)

// Components named with Pascal Case.
var MyFirstComponent = React.createClass({
  // render has to be a pure function
  render: function () {
    return (
      div(null,
        // these properties can be read by the children but not modified
        MyTitleFactory({ title: 'my first props', color: 'peru' }),
        MyTitleFactory({ title: 'my first props', color: 'red' }),
        MyTitleFactory({ title: 'my first props', color: 'green' }),
        MyTitleFactory({ title: 'my first props', color: 'blue' })
      )
    )
  }
})

// Tell the ReactDOM what to render and where
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
