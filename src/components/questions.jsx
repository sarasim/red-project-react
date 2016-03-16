import React from 'react';

var Questions = React.createClass({

  _handleTrue() {
    this.props.onAnswer(true);
  },

  _handleFalse() {
    this.props.onAnswer(false);
  },

  render(){
    return (
      <div className="quiz-wrapper">
        <div className="quiz">
            <span>{this.props.currentQuestion.question}</span>
            <button onClick={this._handleTrue}>True</button>
            <button onClick={this._handleFalse}>False</button>
        </div>
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
