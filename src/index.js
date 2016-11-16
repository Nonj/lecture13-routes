/*eslint no-unused-vars: "off"*/ //don't show warnings for unused
import React from 'react';
import ReactDOM from 'react-dom';
import App from './PetApp';
import {AboutPage, ResourcesPage} from './About';
import AdoptPage from './AdoptDog';
import {Router, Route, browserHistory} from 'react-router';

//css files
import './pet-app.css'; //load CSS for app
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={AboutPage} />
    <Route path="/resources" component={ResourcesPage} />
    <Route path="/information" component={ResourcesPage} />
  </Router>
  ,
  document.getElementById('root')
);