'use strict';

var React = require('react');
var ReactDOM = require('react-dom');


var Mars = React.createClass({

  render: function(){
    return (
      <div className="mars-quiz">
        <div className="side-panel">
           <h1 className="mars-header">Mars</h1>
           <div className="shuttle"><i className="fa fa-space-shuttle"></i></div>
        </div>
        <div className="main-panel">
            <button className="takeTest">Take Test</button>
            <div className="timer">
              <p>00:00</p>
            </div>
        </div>
      </div>
    )
  }
});

//end
ReactDOM.render(<Mars />, document.querySelector('#mount-node'));
