// 'use strict';

import React from 'react';
import {browserHistory} from 'react-router';

var Countdown = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
          secondsElapsed: this.getSeconds(),
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
      if (this.state.secondsElapsed === 0){
      this.componentWillUnmount();
      }
    },

   componentDidMount(){
      this.interval = setInterval(this.tick, 1000);
   },

   componentWillUnmount(){
     clearInterval(this.interval);
   },

   timerFinished(){
     if (this.state.secondsElapsed === 0){
       this.context.router.push('/rejected');
     }
   },

  render(){
    return (
        <div className="timer">
          <p>{this.minutesLeft()} : {this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}</p>
          {this.timerFinished()}
        </div>

    );
  }

});

Countdown.propTypes = {
  onTimerFinished: React.PropTypes.func.isRequired
};

module.exports = Countdown;
