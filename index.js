'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const join = require('path').join;

module.exports = {
  name: require('./package').name,
  included: function (/* app */) {
    this._super.included.apply(this, arguments);
  }
};
