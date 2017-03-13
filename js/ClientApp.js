var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1(null, 'My title component')
      )
    )
  }
})

// Components named with Pascal Case.
var MyFirstComponent = React.createClass({
  // render has to be a pure function
  render: function () {
    return (
      div(null,
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle)
      )
    )
  }
})

// Tell the ReactDOM what to render and where
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
