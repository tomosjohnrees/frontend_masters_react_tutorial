import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

// Components named with Pascal Case.
var MyFirstComponent = React.createClass({
  // render has to be a pure function
  render: function () {
    return (
      <div>
        <MyTitle title='my first props' color='peru' />
        <MyTitle title='my first props' color='red' />
        <MyTitle title='my first props' color='green' />
        <MyTitle title='my first props' color='peru' />
      </div>
    )
  }
})

// Tell the ReactDOM what to render and where
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
