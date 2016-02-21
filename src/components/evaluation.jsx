import React from 'react';
import {browserHistory} from "react-router";

var Evaluation = React.createClass({

  startQuiz: function(){
     browserHistory.push('/question-screen');
  },

  render : function(){
    return (
      <div className="main-panel">
        <button className="beginTest" onClick={this.startQuiz}>Begin Evaluation</button>
      </div>
      )
   }

});

module.exports = Evaluation;
