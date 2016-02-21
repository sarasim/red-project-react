// 'use strict';

import React from 'react';

var Countdown = React.createClass({

  getInitialState: function() {
    return {
          minutedElapsed: 1,
          start: false,
          secondsElapsed: 60
      };
  },

  tick: function(){
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
      if (this.state.secondsElapsed <=0){
      clearInterval(this.interval);
      }
    },

   componentDidMount: function(){
      this.interval = setInterval(this.tick, 1000);
   },

  render: function(){
    return  (

        <div className="timer">
          <p>{ this.state.secondsElapsed }</p>
        </div>

    );
  }

});

//or instead of <p>{this.renderMinutes()}:{this.renderSeconds()}</p>
module.exports = Countdown;
