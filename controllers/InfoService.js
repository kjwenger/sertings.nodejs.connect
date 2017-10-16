'use strict';

exports.getInfo = function(args, res, next) {
  /**
   * Get information about API
   * Get version, entry points, and statistics of API
   *
   * returns Object
   **/
  var examples = {};
  examples['application/json'] = {};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

