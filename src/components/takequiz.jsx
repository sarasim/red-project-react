import React from 'react';
import {browserHistory} from 'react-router';

import Countdown from './countdown-clock.jsx';
import Questionscreen from './question-screen.jsx';

var questions = [
  {
    question: 'Mars is the fourth planet from the Sun.',
    answer: true
  },
  {
    question: 'The film the Martian was set on Mars.',
    answer: true
  },
  {
    question: 'The NASA Exploration Rover Mission takes place on Mars.',
    answer: true
  }
];

var Quiz = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return {
      questions: []
    }
  },

  _handleCorrect(){
    this.context.router.push('/accepted');
  },

  _handleFailure(){
    this.context.router.push('/rejected');
  },

  render(){
    return (
      <div className="main-panel">
          <Countdown
            startMinutes={1}
            onTimerFinished={this._handleFailure} />
          <div className="quiz">
            <Questionscreen
              onCorrect={this._handleCorrect}
              onFailure={this._handleFailure}
              questions={questions} />
          </div>
     </div>
    )
  }
});

module.exports = Quiz;
