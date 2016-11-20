/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-tribute-shim',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/tribute/dist/tribute.js');
    app.import('bower_components/tribute/dist/tribute.css');
  }
};
