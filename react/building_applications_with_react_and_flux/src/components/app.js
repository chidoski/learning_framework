/* eslint-disable strict */ // To ignore us defining a global var

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var Header = require('./common/header');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
