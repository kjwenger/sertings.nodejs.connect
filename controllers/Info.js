'use strict';

var url = require('url');

var Info = require('./InfoService');

module.exports.getInfo = function getInfo (req, res, next) {
  Info.getInfo(req.swagger.params, res, next);
};
