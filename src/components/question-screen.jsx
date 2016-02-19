// 'use strict';

import React from 'react';


var Question = React.createClass({

  getInitialState(){
    return {
      start: false
    }
  },

  startQuiz: function(){
    this.setState({start: true});
  },

  render: function(){
    return (
        <div className="main-panel">
            <button className="beginTest" onClick={this.startQuiz}>Begin Evaluation</button>
        </div>
    )
  }
});

//end
module.exports = Question;
