'use strict';

module.exports = {
  name: require('./package').name,
  included: function (app) {
    this._super.included.apply(this, arguments);
    const images = ["activity", "people", "flag", "food", "nature", "object", "travel", "symbol"];
    for(let image of images) {
      app.import(`vendor/assets/${image}.png`);
    }
  }
};
