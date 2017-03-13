// tells ESLint that these are global variable
/* global React ReactDOM */

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
