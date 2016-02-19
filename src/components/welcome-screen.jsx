import React from 'react';

var Welcome = React.createClass({

  takeTest(){
   this.props.history.push('./question-screen');

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
