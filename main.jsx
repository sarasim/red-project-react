var React = require('react');
var ReactDOM = require('react-dom');


var Mars = React.createClass({

  render: function(){
    return (
      <div>
        <h1>hello</h1>
        <button></button>
      </div>
    )
  }
});

//end
ReactDOM.render(<Mars />, document.querySelector('#mount-node'));
