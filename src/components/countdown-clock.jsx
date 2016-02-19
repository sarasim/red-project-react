// 'use strict';

import React from 'react';

var Countdown = React.createClass({

  getInitialState: function() {
    return {
          timer: 'timer-hidden',
          secondsElapsed: 60
      };
  },

  render: function(){
    return  (
      <div className="mars-quiz">
        <div className={this.startTimer}>
          <button className="takeTest" onClick={this.startTimer}>Take Test</button>
          <p>{ this.state.secondsElapsed }</p>
        </div>
      </div>

    );
  }

});

//or instead of <p>{this.renderMinutes()}:{this.renderSeconds()}</p>
module.exports = Countdown;
