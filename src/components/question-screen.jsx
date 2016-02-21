// 'use strict';

import React from 'react';
import {browserHistory} from "react-router";

import Countdown from './countdown-clock.jsx';


var Question = React.createClass({

  getInitialState(){
    return {
      questions: [

        //array and use .push to get to each question
      ]

    }

  },

  quizAnswer: function(event){
    event.preventDefault();

    // if(this.ref.input !== ''){
    //   this.state.questions.push(this.state.questions[1])

      this.refs.quizAnswer.reset();


   },


    //remember to return when using map()


// if(this.refs.quizAnswer === 'Mars'){
//   browserHistory.push('/accepted')
// if quizAnswer === 'Mars' ? true : false


  // renderQuestions: function(question, index){}?




  render: function(){
    return (
        <div className="main-panel">
            <div className="timer">{this.state.onClick ? <Countdown /> : null}</div>
              <Countdown />
            <div className="quiz">
              <span>What is the fourth planet from the sun?</span>
              <form className="quizForm">
                <input type="text" ref="quizAnswer" />
                <button type="submit" onSubmit={this.quizAnswer}>Submit Answer</button>
              </form>
            </div>
      </div>
    )
  }
});

module.exports = Question;
