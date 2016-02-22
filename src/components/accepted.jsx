import React from 'react';
import {browserHistory} from "react-router";

var Accepted = React.createClass({

render : function(){

  return (
    <div className="accepted-panel">
      <h1 className="accepted">Accepted!</h1>
        <div className="shuttle-launch"><i className="fa fa-space-shuttle"></i></div>
    </div>

  );
}


});

module.exports = Accepted;
