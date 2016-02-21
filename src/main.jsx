

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//components

import Welcome from './components/welcome-screen.jsx';
import Evaluation from './components/evaluation.jsx';
import Question from './components/question-screen.jsx';
import Countdown from './components/countdown-clock.jsx';
import Rejected from './components/rejected.jsx';
import Accepted from './components/accepted.jsx';
import NotFound from './components/404.jsx';


var Mars = React.createClass({

  render: function(){
    return(
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome-screen' />
        <Route path='/welcome-screen' component={Welcome} />
        <Route path='/evaluation' component={Evaluation} />
        <Route path='/question-screen' component={Question} />
        <Route path='/rejected' component={Rejected} />
        <Route path='/accepted' component={Accepted} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});


ReactDOM.render(<Mars/>, document.querySelector('#mount-node'));

//browser not making a request to get a page,
//js is modifying the browser so that the user gets visual feedback but not actually got o another page
