(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Tribute'] };
  }

  define('tribute', [], vendorModule);
})();
