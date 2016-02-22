// 'use strict';

import React from 'react';
import {browserHistory} from "react-router";

import Countdown from './countdown-clock.jsx';
import Questions from './questions.jsx';


var Questionscreen = React.createClass({

  getInitialState(){
    return {
      questions: {},

    }

  },

  quizAnswer: function(event){
    event.preventDefault();

      this.ref.quizAnswer.reset();


   },


  render: function(){
    return (
        <div className="main-panel">
            <div className="timer"></div>
              <Countdown startMinutes={1}
                 />
            <div className="quiz">
              <span>What is the fourth planet from the Sun?</span>
              <form className="quizForm">
                <input type="text" ref="quizAnswer" />
                <button type="submit" onSubmit={this.renderQuestions}>Submit Answer</button>
              </form>
            </div>
      </div>
    )
  }
});


module.exports = Questionscreen;

//--------------------------------------------------------Johnny's code
//
// var Questions = React.createClass({
//
// getInitialState: function(){
//   return {
//     correctCount: 0,
//     questionIndex: 0
//   }
// },
//
// componentWillUpdate: function(nextProps, nextState) {
//   if (nextState.questionIndex === nextProps.questions.length + 1) {
//     correctCount === 2
//     ? this.props. onCorrect())
//     : this.props. onFailure());
//   }
// },

//on Question screen:
//onCorrect={this._handleCorrect}
//_handleCorrect(){
// browserHistory.push('/accepted');
// }
//onFailer={this._handleFailure}
// browserHistory.push('/rejected');
 // }

//
// render(){
//   return(
//     <div className='main-panel'>
//       <Question currentQuestion={this.props.questions[this.state.questionIndex]}
//         onAnswer={this._handleUserAnswer} />
//     </div>
//
//   )
// },
//
// _handleUserAnswer(userAnswer){
//   var correctAnswer = this.props.question[this.state.questionIndex].answer;
//
//   var currentCorrectCount = this.state.correctCount;
//
//   if (correctAnswer === userAnswer) {
//     currentCorrectCount = this.state.correctCount + 1;
// }
//   this.setState({
//     correctCount: currentCorrectCount,
//     questionIndex: this.state.questionIndex + 1
//   });
//
// });

// Question.propType = {
//   question: ReactPropTypes.arrayOf(
//     React.PropTypes.shapeOf({
//       question: React.PropTypes.string.isRequired,
//       answer:React.PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// }


// {this.state.questions.map(this.renderQuestions)}
/*<Countdown
onTimerFinished ={this._handleTimeRunout}
startTime={60}
startTimer={this.state.startTimer} />*/

//Countdown.defaultProps = {
//   InitialStartTime: 60
// };

// _handleTimeRunout(){
//   browserHistory.push('./rejected');
// }

//PUBLIC FUNCTIONS AT THE TOP AND PRIVATE AT THE BOTTOM
