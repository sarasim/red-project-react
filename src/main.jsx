

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//components

import Question from './components/question-screen.jsx';
import Countdown from './components/countdown-clock.jsx';
import NotFound from './components/404.jsx';
import Welcome from './components/welcome-screen.jsx';

var Mars = React.createClass({

  render: function(){
    return(
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome-screen' />
        <Route path='/welcome-screen' component={Welcome} />
        <Route path='/question-screen' component={Question} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});


ReactDOM.render(<Mars/>, document.querySelector('#mars-quiz'));

//browser not making a request to get a page,
//js is modifying the browser so that the user gets visual feedback but not actually got o another page
