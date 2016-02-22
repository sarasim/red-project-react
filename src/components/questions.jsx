import React from 'react';
import {browserHistory} from 'react-router';

var Questions = React.createClass({

  _handleTrue(e) {
    this.props.onAnswer(true);
  },

  _handleFalse(e){
    this.props.onAnswer(false);
  },

  render(){
    return (
      <div className="quiz">
          <span>{this.props.currentQuestion.question}</span>
          <button onClick={this.handleTrue}>True</button>
          <button onClick={this.handleFalse}>False</button>
      </div>
    );
  }
});

Questions.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }).isRequired,
  onAnswer: React.PropTypes.func.isRequired
};

module.exports = Questions;
