// 'use strict';

import React from 'react';
import {browserHistory} from 'react-router';

var Countdown = React.createClass({

  getInitialState() {
    return {
          secondsElapsed: 60
      };
  },

  getSeconds() {
     if(this.props.startMinutes >=1) {
       return this.props.startMinutes * 60;
     } else {
       return 60;
     }
   },

   secondsLeft() {
     return Math.floor(this.state.secondsElapsed % 60);
   },

   minutesLeft() {
     return Math.floor(this.state.secondsElapsed / 60);
   },

  tick(){
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
      if (this.state.secondsElapsed <=0){
      clearInterval(this.interval);
      }
    },

   componentDidMount(){
      this.interval = setInterval(this.tick, 1000);
   },

  render(){
    return (
        <div className="timer">
          <p>{this.minutesLeft()} : {this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}</p>
        </div>

    );
  }

});

Countdown.propTypes = {
  onTimerFinished: React.PropTypes.func.isRequired
};

module.exports = Countdown;
