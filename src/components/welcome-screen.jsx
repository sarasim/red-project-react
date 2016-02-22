import React from 'react';
import {browserHistory} from "react-router";

var Welcome = React.createClass({


  _handletakeTest: function(){
   browserHistory.push('/evaluation');

 },

  render(){
    return (
      <div className="main-panel">
          <button className="takeTest" onClick={this._handletakeTest}>Take Test</button>
      </div>
    );
  }
});

module.exports = Welcome;
