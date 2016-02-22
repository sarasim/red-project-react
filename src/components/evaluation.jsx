import React from 'react';
import {browserHistory} from "react-router";

var Evaluation = React.createClass({

  _handlestartQuiz: function(){
     browserHistory.push('/question-screen');
  },

  render : function(){
    return (
      <div className="main-panel">
        <button className="beginTest" onClick={this._handlestartQuiz}>Begin Evaluation</button>
      </div>
      )
   }

});

module.exports = Evaluation;
