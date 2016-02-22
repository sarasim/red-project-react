// 'use strict';

import React from 'react';

var Countdown = React.createClass({

  getInitialState() {
    return {

          secondsElapsed: 60
      };
  },

  getSeconds: function() {
     if(this.props.startMinutes >=1) {
       return this.props.startMinutes * 60;
     } else {
       return 60;
     }
   },

   secondsLeft: function() {
     return Math.floor(this.state.secondsElapsed % 60);
   },

   minutesLeft: function() {
     return Math.floor(this.state.secondsElapsed / 60);
   },

   //_decrementCounter(){
   //this.setState({secondsElapsed: this.state.secondsElapsed - 1});
   //}

//componentWillReceiveProps(nextProps){
//if (nextProps.startTime){
//     this._startTimer();
//   }
// }

// componentDidUpdate(prevProps, prevState){
//   if (this.state.secondsElapsed === 0) this.props.onTimeFinished();
// }

 //componentWillUnmount(){
 // clearInterval(this.interval);
 //},

 //this prevents memory leaks

// _startTimer(){
//     this.interval = setInterval(this._decrementCounter, 1000);
// }

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
    return (
        <div className="timer">
          <p>{this.minutesLeft()} : {this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}</p>
        </div>

    );
  }

});

module.exports = Countdown;


// Countdown.propTypes = {
//   startTime: PropTypes.number.isRequired,
//   startTimer: PropTypes.func.isRequired,
//   onTimeFinished: PropTypes.func.isRequired
// }
