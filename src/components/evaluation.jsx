import React from 'react';
import {browserHistory} from "react-router";

var Evaluation = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _handlestartQuiz(){
     this.context.router.push('/takequiz');
  },

  render(){
    return (
      <div className="main-panel">
        <button className="beginTest" onClick={this._handlestartQuiz}>Begin Evaluation</button>
      </div>
      )
   }

});

module.exports = Evaluation;
