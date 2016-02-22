import React from 'react';
import {browserHistory} from 'react-router';

var Rejected = React.createClass({

render : function(){

  return (
  <div className="rejected-panel">
    <h1 className="rejected">Rejected!</h1>
  </div>

  )
}

});

module.exports = Rejected;
