'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const join = require('path').join;

module.exports = {
  name: require('./package').name,
  
  treeForPublic: function() {
    const imagesDir = new Funnel(join(this.root, 'vendor/images'), {
      include: ['*.svg'],
      destDir: '/assets/images'
    });
    return mergeTrees([imagesDir]);
  },
  
  included: function (app) {
    this._super.included.apply(this, arguments);
  }
};
