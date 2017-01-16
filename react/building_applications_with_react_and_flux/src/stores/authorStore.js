"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

// Node's EventEmitter
var EventEmitter = require('events').EventEmitter;

// Brings ES6's objectAssign to ES5
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _authors = [];
var _ = require('lodash');

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // ABOVE THIS LINE: Three necessary boilerplate functions
  // BELOW THIS LINE: Our custom functions

  getAllAuthors: function() {
    return _authors;
  },

  getAuthorById: function(id) {
    return _.find(_authors, { id: id });
  }
});

// This fn is called EVERY AND ANY TIME an action is dispatched
Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author); // Details in the authorAction.js file
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      // _authors.push(action.author); // Details in the authorAction.js file
      var existingAuthor = _.find(_authors, { id: action.author.id });
      var index = _.indexOf(_authors, existingAuthor);
      _authors.splice(index, 1, existingAuthor);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function(author) {
        return author.id === action.authorId;
      });
      AuthorStore.emitChange();
      break;
  }
});

module.exports = AuthorStore;
