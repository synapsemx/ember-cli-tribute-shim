/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-tribute-shim',

  included: function(app) {
    this._super(app);

    app.import('bower_components/tribute/dist/tribute.js');
    app.import('bower_components/tribute/dist/tribute.css');
    app.import('vendor/shims/tribute.js');
  }
};
