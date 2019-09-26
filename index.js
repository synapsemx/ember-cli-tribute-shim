/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-tribute-shim',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/tribute.js');
    this.import('vendor/tribute.css');
    this.import('vendor/shims/tribute.js');
  },

  treeForVendor(vendorTree) {
    var tributeTree = new Funnel(path.dirname(require.resolve('tributejs')), {
      files: ['tribute.js', 'tribute.css'],
    });

    return new MergeTrees([vendorTree, tributeTree]);
  },
};
