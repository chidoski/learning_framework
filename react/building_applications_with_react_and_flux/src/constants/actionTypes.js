"use strict";

// This sets it so you don't have to double-type the name of the constant
// like CREATE_AUTHOR: 'CREATE_AUTHOR'
var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  INITIALIZE: null,
  CREATE_AUTHOR: null,
  UPDATE_AUTHOR: null,
  DELETE_AUTHOR: null
});
