var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        // props: properties passed in by the parent component
        h1(null, this.props.title)
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
        MyTitleFactory({title: 'my first props'}),
        MyTitleFactory({title: 'my first props'}),
        MyTitleFactory({title: 'my first props'}),
        MyTitleFactory({title: 'my first props'})
      )
    )
  }
})

// Tell the ReactDOM what to render and where
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
