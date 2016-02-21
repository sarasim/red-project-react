import React from 'react';
import {browserHistory} from "react-router";

var Welcome = React.createClass({


  takeTest: function(){
   browserHistory.push('/evaluation');

 },

  render: function(){
    return (
      <div className="main-panel">
          <button className="takeTest" onClick={this.takeTest}>Take Test</button>
      </div>
    );
  }
});

module.exports = Welcome;
