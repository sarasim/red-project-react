import React from 'react';
import {browserHistory} from 'react-router';

var Welcome = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  _handletakeTest(){
   this.context.router.push('/evaluation');

  },

  render(){
    return (
      <div className="main-panel">
          <button className="takeTest" onClick={this._handletakeTest}>Take Test</button>
      </div>
    )
  }

});

module.exports = Welcome;
