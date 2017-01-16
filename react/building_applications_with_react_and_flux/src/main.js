"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// HTML5 push state history management
// has some issues when going to a page then refreshing
// Router.run(routes, Router.HistoryLocation, function (Handler) {

// Standard -- Hash history management
Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
